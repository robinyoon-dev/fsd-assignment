import { GEO_OPTIONS } from "./geoOptions";
import { GeoError, mapGeoError } from "./errors";
import type { LatLon } from "./types";

export function getCurrentPosition(
  options: PositionOptions = GEO_OPTIONS
): Promise<LatLon> {
  if (!("geolocation" in navigator)) {
    return Promise.reject(
      new GeoError("UNSUPPORTED", "이 브라우저는 위치 기능을 지원하지 않습니다.")
    );
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => reject(mapGeoError(err)),
      options
    );
  });
}
