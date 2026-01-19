"use client";

import React from "react";
import { useDetectLocationQuery } from "../model/useDetectLocationQuery";
import { GeoError } from "../lib/errors";

type Props = {
  children: (loc: { lat: number; lon: number }) => React.ReactNode;
  fallback?: React.ReactNode;
};

export function DetectLocationGate({ children, fallback }: Props) {
  const locQuery = useDetectLocationQuery();

  // 1) 캐시도 없고 로딩 중
  if (locQuery.isLoading && !locQuery.data) {
    return (
      <div className="flex min-h-[120px] items-center justify-center rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700 shadow-sm">
        현재 위치 확인 중...
      </div>
    );
  }

  // 2) 실패
  if (locQuery.isError) {
    const err = locQuery.error as GeoError;

    if (fallback) return <>{fallback}</>;

    return (
      <div className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="grid gap-1">
          <p className="text-base font-semibold text-zinc-900">
            현재 위치를 가져오지 못했어요.
          </p>
          <p className="text-sm text-zinc-600">{err.message}</p>

          {err.code === "PERMISSION_DENIED" && (
            <p className="mt-1 text-sm text-zinc-600">
              브라우저/OS 설정에서 위치 권한을 허용한 뒤 다시 시도해 주세요.
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => locQuery.refetch()}
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 active:bg-zinc-950"
          >
            다시 시도
          </button>

          <button
            type="button"
            onClick={() => alert("여기에 지역 검색/선택 UI 연결")}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 active:bg-zinc-100"
          >
            지역 직접 선택
          </button>
        </div>
      </div>
    );
  }

  // 3) 성공 (캐시든 실제든)
  const loc = locQuery.data!;
  return <>{children({ lat: loc.lat, lon: loc.lon })}</>;
}
