"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Bed,
  Bath,
  Ruler,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export default function HomeDetailsPage({ params }) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/homedetails.json")
      .then((res) => res.json())
      .then((data) => {
        const singleHome = data.find(
          (item) => String(item.id) === String(id)
        );

        setHome(singleHome);

        if (singleHome) {
          setSelectedImage(singleHome.photo);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#06141B]">
        <p className="text-emerald-300 text-lg">Loading...</p>
      </section>
    );
  }

  if (!home) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#06141B]">
        <h2 className="text-white text-2xl">Home Not Found</h2>
      </section>
    );
  }

  const images = [home.photo, home.secondPhoto];

  return (
    <section className="min-h-screen bg-[#06141B] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.18)] p-6">
          <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 items-start detail-layout">

            <div className="w-full lg:flex-[0_0_65%] lg:w-auto min-w-0 space-y-6 detail-left">
              <div className="overflow-hidden rounded-[30px] border border-white/10 shadow-lg shadow-emerald-500/10">
                <img
                  src={selectedImage}
                  alt={home.name}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover"
                />
              </div>

              <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-1">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      selectedImage === image
                        ? "border-emerald-400"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-24 h-20 sm:w-28 sm:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full lg:flex-[0_0_35%] lg:w-auto min-w-0 flex flex-col justify-between gap-8 detail-right">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-emerald-300 ring-1 ring-emerald-500/20">
                  <Sparkles className="h-4 w-4" />
                  Premium Listing
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight truncate">
                  {home.name}
                </h1>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 text-sm text-gray-300">
                  <span className="inline-flex items-center gap-2 max-w-full">
                    <MapPin className="h-4 w-4 text-emerald-300" />
                    <span className="truncate max-w-[220px] sm:max-w-[300px]">{home.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span className="truncate max-w-[160px]">{home.status}</span>
                  </span>
                </div>

                <div className="mt-6 rounded-[28px] bg-[#071a23] p-4 sm:p-6 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-400/80">
                    Price
                  </p>
                  <p className="mt-3 text-2xl sm:text-3xl font-bold text-white">
                    {home.price}
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-3xl bg-white/5 p-4 text-center border border-white/10">
                    <Bed className="mx-auto h-5 w-5 text-emerald-300" />
                    <p className="mt-3 text-sm text-gray-300 truncate">Bedrooms</p>
                    <p className="mt-2 text-[17px] font-semibold text-white">{home.bedrooms}</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-center border border-white/10">
                    <Bath className="mx-auto h-5 w-5 text-emerald-300" />
                    <p className="mt-3 text-sm text-gray-300 truncate">Bathrooms</p>
                    <p className="mt-2 text-[17px] font-semibold text-white">{home.bathrooms}</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-center border border-white/10">
                    <Ruler className="mx-auto h-5 w-5 text-emerald-300" />
                    <p className="mt-3 text-sm text-gray-300 truncate">Area</p>
                    <p className="mt-2 text-[17px] font-semibold text-white">{home.squareFeet} sq ft</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-center border border-white/10">
                    <Sparkles className="mx-auto h-5 w-5 text-emerald-300" />
                    <p className="mt-3 text-sm text-gray-300 truncate">Status</p>
                    <p className="mt-2 text-[17px] font-semibold text-white">{home.status}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#071a23] p-4 sm:p-6 border border-white/10 max-h-[180px] sm:max-h-[260px] overflow-auto">
                <h2 className="text-xl font-semibold text-white">Property Description</h2>
                <p className="mt-4 text-gray-400 leading-7">
                  {home.fullDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black transition hover:scale-[1.01]">
                  Book a Private Tour
                </button>
                <Link href="/homes" className="w-full sm:w-auto inline-flex items-center justify-center rounded-3xl border border-emerald-500/40 bg-white/5 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500 hover:text-black">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}