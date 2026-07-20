"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBarHm from "./NavBarHm";

const Banner = () => {
  return (
    <>
      <NavBarHm></NavBarHm>
    
      <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bnrimg.png"
            alt="AuraHome Luxury Living Room"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative z-10 w-full pt-24 md:pt-32">

          <div className="max-w-2xl space-y-5 md:space-y-7 text-center md:text-left">

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#2dd4bf] uppercase drop-shadow-lg">
              AURAHOME
            </h1>

            <p className="text-zinc-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Premium real estate platform with luxury living
              experience. Modern design, smooth performance, and elegant
              comfort in one place.
            </p>

            <div className="pt-2 flex justify-center md:justify-start">
              <Link
                href="/get-started"
                className="
                  inline-flex items-center
                  px-7 py-3
                  rounded-xl
                  font-semibold
                  text-white

                  bg-[#0d9488]/20
                  border border-[#2dd4bf]/40

                  backdrop-blur-md

                  hover:bg-[#0d9488]/35
                  hover:shadow-[0_0_35px_rgba(45,212,191,0.4)]

                  transition-all duration-300
                "
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default Banner;