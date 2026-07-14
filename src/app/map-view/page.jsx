"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

import UniversalNav from "../Components/UniversalNav";
import MapPropertyCards from "../Components/MapPropertyCards";

const cityCoordinates = {
  Milan: [45.4642, 9.19],
  Como: [45.8093, 9.0874],
  Florence: [43.7696, 11.2558],
  Turin: [45.0703, 7.6869],
  Venice: [45.4408, 12.3155],
  Rome: [41.9028, 12.4964],
  Bologna: [44.4949, 11.3426],
  Trento: [46.0748, 11.1217],
  Verona: [45.4384, 10.9916],
  Umbria: [43.0, 12.5],
  "Lake Maggiore": [46.0, 8.7],
  "Lake Garda": [45.6, 10.7],
  "Lake Como": [46.0, 9.3],
  Dolomites: [46.4, 11.8],
};

const getHomePosition = (home) => {
  if (home?.coordinates?.lat && home?.coordinates?.lng) {
    return [
      Number(home.coordinates.lat),
      Number(home.coordinates.lng),
    ];
  }

  const location =
    typeof home?.location === "string"
      ? home.location
      : "";

  for (const [city, coords] of Object.entries(cityCoordinates)) {
    if (location.includes(city)) {
      return coords;
    }
  }

  return [45.4642, 9.19];
};

const MapContent = dynamic(
  async () => {
    const [{ MapContainer, Marker, Popup, TileLayer }, L] =
      await Promise.all([
        import("react-leaflet"),
        import("leaflet"),
      ]);

    const markerIcon = new L.Icon({
      iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    return function LeafletMap({ homes }) {
      return (
        <MapContainer
          center={[45.4642, 9.19]}
          zoom={6}
          scrollWheelZoom
          className="h-[450px] w-full lg:h-[720px]"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {homes.map((home) => (
            <Marker
              key={home.id}
              position={getHomePosition(home)}
              icon={markerIcon}
            >
              <Popup>
                <div className="space-y-1">
                  <h3 className="font-semibold">
                    {home.name}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {home.location}
                  </p>

                  <p className="font-medium">
                    {home.price}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      );
    };
  },
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[450px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-500 lg:h-[720px]">
        Loading map...
      </div>
    ),
  }
);

export default function MapView() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/homedetails.json")
      .then((res) => res.json())
      .then(setHomes)
      .catch(() => setHomes([]));
  }, []);

  return (
    <div>
      <UniversalNav />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-28">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full lg:w-[360px] xl:w-[380px]">
            <div className="space-y-8">
              {homes.slice(0, 2).map((home) => (
                <MapPropertyCards
                  key={home.id}
                  home={home}
                />
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
              <MapContent homes={homes} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}