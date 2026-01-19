// UI
export { DetectLocationGate } from './ui';

// Model (Hooks)
export { useDetectLocationQuery } from './model/useDetectLocationQuery';

// Lib (Utilities & Types)
export { getCurrentPosition } from './lib/ getCurrentPosition';
export { GEO_OPTIONS } from './lib/geoOptions';
export type { LatLon } from './lib/types';
export { GeoError, mapGeoError } from './lib/errors';
export type { GeoErrorCode } from './lib/errors';

// Model (Query Keys & Cache)
export { detectLocationQueryKey } from './model/queryKeys';
export { loadCachedLocation, saveCachedLocation } from './model/cache';