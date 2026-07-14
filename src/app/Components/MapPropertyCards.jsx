"use client";

import SeeDetailsButton from "./Buttons/SeeDetailsButton";

export default function MapPropertyCards({ home }) {
  return (
    <div
      className="
        group
        relative
        w-full
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
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.22),transparent_60%)]
          opacity-80
        "
      />

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
        <div className="overflow-hidden rounded-2xl">
          <img
            src={home.photo}
            alt={home.name}
            className="
              h-[210px]
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        <div className="mt-5">
          <h3 className="line-clamp-1 text-xl font-semibold text-white">
            {home.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-400">
            {home.shortDescription}
          </p>

          <div className="mt-5 flex items-end justify-between">
            <span className="text-xl font-bold text-emerald-300">
              {home.price}
            </span>

            <SeeDetailsButton id={home.id} />
          </div>
        </div>
      </div>
    </div>
  );
}