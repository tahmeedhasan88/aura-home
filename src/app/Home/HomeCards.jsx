"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SeeDetailsButton from "../Components/Buttons/SeeDetailsButton";

export default function HomeCards() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/homes.json")
      .then((res) => res.json())
      .then((data) => setHomes(data.slice(0, 6)));
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center lg:text-start lg:px-4 mb-12">
          <h2 className="text-4xl font-bold text-white">
            Featured Homes
          </h2>

          <p className="text-gray-400 mt-3">
            Discover our handpicked luxury residences.
          </p>
        </div>

        {/* Cards */}
        <div className="
    grid
    grid-cols-[repeat(auto-fit,minmax(320px,320px))]
    justify-center
    gap-8
    max-w-7xl
    mx-auto
    px-4
  ">

          {homes.map((home, index) => (
            <div
              key={index}
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
                  bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.22),transparent_60%)]
                  opacity-80
                "
              />

              {/* Shine */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="
                    absolute
                    -left-32
                    top-0
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

                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {home.shortDescription}
                  </p>

                  <div className="mt-5 flex justify-between items-end">

                    <span className="text-emerald-300 text-xl font-bold">
                      {home.price}
                    </span>

                    {/* <Link
                      href={`/homes/${index}`}
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
                    </Link> */}

                      <SeeDetailsButton id={home.id}></SeeDetailsButton>


                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* See More */}
        <div className="flex justify-center mt-14">

          <Link
            href="/homes"
            className="
              px-10
              py-3.5

              rounded-xl

              text-emerald-300
              font-semibold

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
            See More
          </Link>

        </div>

      </div>
    </section>
  );
}