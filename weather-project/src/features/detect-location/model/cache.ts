import type { LatLon } from "../lib/types";

const KEY = "last_known_location_v1";

export function loadCachedLocation(): LatLon | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as LatLon) : null;
  } catch {
    return null;
  }
}

export function saveCachedLocation(loc: LatLon) {
  try {
    localStorage.setItem(KEY, JSON.stringify(loc));
  } catch {}
}
