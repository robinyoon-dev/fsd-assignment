import { useQuery } from "@tanstack/react-query";
import { loadCachedLocation, saveCachedLocation } from "./cache";
import { detectLocationQueryKey } from "./queryKeys";
import { getCurrentPosition } from "../lib/ getCurrentPosition";

export function useDetectLocationQuery() {
  return useQuery({
    queryKey: detectLocationQueryKey,
    queryFn: async () => {
      const loc = await getCurrentPosition();
      saveCachedLocation(loc);
      return loc;
    },
    // 캐시가 있으면 즉시 화면에 반영 가능 (UX 개선)
    initialData: () => loadCachedLocation() ?? undefined,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    retry: false, // 권한 거부는 retry가 의미 없음
  });
}
