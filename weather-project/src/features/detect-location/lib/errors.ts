export type GeoErrorCode =
  | "UNSUPPORTED"
  | "PERMISSION_DENIED"
  | "TIMEOUT"
  | "POSITION_UNAVAILABLE"
  | "UNKNOWN";

export class GeoError extends Error {
  code: GeoErrorCode;

  constructor(code: GeoErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

export function mapGeoError(err: GeolocationPositionError): GeoError {
  switch (err.code) {
    case err.PERMISSION_DENIED:
      return new GeoError("PERMISSION_DENIED", "위치 권한이 거부되었습니다.");
    case err.TIMEOUT:
      return new GeoError("TIMEOUT", "위치 조회 시간이 초과되었습니다.");
    case err.POSITION_UNAVAILABLE:
      return new GeoError("POSITION_UNAVAILABLE", "현재 위치를 확인할 수 없습니다.");
    default:
      return new GeoError("UNKNOWN", "알 수 없는 위치 오류가 발생했습니다.");
  }
}
