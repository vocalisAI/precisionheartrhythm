"use client";

import { Map, MapMarker, MarkerContent } from "@/components/ui/map";

export default function LocationMap() {
  const officeLocation = {
    lat: 41.6894,
    lng: -83.7275,
  };

  return (
    <div className="h-[400px] w-full mt-4 rounded-lg overflow-hidden border border-border shadow-sm">
      <Map 
        center={[officeLocation.lng, officeLocation.lat]}
        zoom={15}
        styles={{
          light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        }}
      >
        <MapMarker longitude={officeLocation.lng} latitude={officeLocation.lat}>
          <MarkerContent>
            <div className="relative -translate-y-1/2">
              <div className="text-primary drop-shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#073c69]" // Primary Blue
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" fill="white" />
                </svg>
              </div>
            </div>
          </MarkerContent>
        </MapMarker>
      </Map>
    </div>
  );
}
