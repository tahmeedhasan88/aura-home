"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import UniversalNav from "../Components/UniversalNav";


export default function HomesPage() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

const search =
  searchParams.get("search")?.toLowerCase() || "";

  useEffect(() => {
    fetch("/homes.json")
      .then((res) => res.json())
      .then((data) => {
        setHomes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load homes:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#06141B]">
        <p className="text-emerald-300 text-lg animate-pulse">
          Loading homes...
        </p>
      </section>
    );
  }


  const filteredHomes = homes.filter((home) => {
    const name = typeof home.name === 'string' ? home.name.toLowerCase() : '';
    const location = typeof home.location === 'string' ? home.location.toLowerCase() : '';

    if (!search) {
      return true;
    }

    return name.includes(search) || location.includes(search);
  });

  return (
    <div>
      <section>
        <UniversalNav></UniversalNav>
      </section>


      <section className="min-h-screen py-16 pt-32 bg-[#06141B]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Explore All Homes
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover our complete collection of luxurious residences designed
            to match your lifestyle and comfort.
          </p>
        </div>

        {/* Cards */}
       <div
  className="
    grid
    grid-cols-[repeat(auto-fit,minmax(320px,320px))]
    justify-center
    gap-8
    max-w-7xl
    mx-auto
    px-4
  "
>
  {filteredHomes.map((home, index) => (
    <div
      key={home.id || index}
      className="
        group
        relative
        w-full
        max-w-[320px]

        rounded-[30px]
        overflow-hidden

        bg-white/5
        backdrop-blur-xl

        border border-white/10

        shadow-[0_0_30px_rgba(16,185,129,0.18)]

        hover:shadow-[0_0_50px_rgba(16,185,129,0.35)]
        hover:-translate-y-3

        transition-all
        duration-500
      "
    >
      {/* Green Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-80
          bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.22),transparent_60%)]
        "
      />

      {/* Shine Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            top-0
            -left-32
            h-full
            w-24
            rotate-12
            bg-white/10
            blur-xl

            group-hover:left-[140%]

            transition-all
            duration-1000
          "
        />
      </div>

      <div className="relative p-5">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={home.photo}
            alt={home.name}
            className="
              w-full
              h-[210px]
              object-cover

              transition-transform
              duration-500

              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white text-xl font-semibold line-clamp-1">
            {home.name}
          </h3>

          <p className="text-gray-400 text-sm mt-2 line-clamp-2 min-h-[40px]">
            {home.shortDescription}
          </p>

          <div className="mt-5 flex justify-between items-end">
            <span className="text-emerald-300 text-xl font-bold">
              {home.price}
            </span>

            <Link
              href={`/homes/${home.id || index}`}
              className="
                px-4
                py-2.5

                rounded-xl

                text-sm
                font-medium

                bg-white/5
                border border-white/10

                text-white

                hover:bg-emerald-500
                hover:text-black

                transition
              "
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Back Button */}
        <div className="flex justify-center mt-16">

          <Link
            href="/"
            className="
              px-10
              py-3.5

              rounded-xl

              font-semibold
              text-emerald-300

              border border-emerald-500/40
              bg-emerald-500/10
              backdrop-blur-md

              shadow-[0_0_20px_rgba(16,185,129,0.35)]

              hover:bg-emerald-500
              hover:text-black
              hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]

              transition-all
              duration-300
            "
          >
            Back to Home
          </Link>

        </div>

      </div>
    </section>
    </div>
  );
}