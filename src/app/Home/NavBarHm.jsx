'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBarHm() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Map View', href: '/map-view' },
    { name: 'Listings', href: '/listings' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 pt-4">

      <div className="max-w-7xl mx-auto">

        <div
          className="
            relative
            h-[72px]

            flex items-center justify-between

            px-6 md:px-8

            rounded-2xl

            bg-white/[0.08]
            backdrop-blur-2xl
            backdrop-saturate-200

            border border-white/15

            shadow-[0_8px_32px_rgba(0,0,0,0.25)]

            overflow-hidden
          "
        >

          {/* Right Glow */}
          <div className="absolute inset-y-0 right-0 w-[60%] bg-gradient-to-l from-white/15 via-white/5 to-transparent pointer-events-none" />

          
          <Link href="/" className="relative z-10">
            <h1 className="text-[24px] font-bold tracking-wide">
              <span className="text-cyan-400">AURA</span>
              <span className="text-white">HOME</span>
            </h1>
          </Link>

          
          <div className="hidden md:flex items-center gap-10 ml-auto relative z-10">

            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    relative
                    text-white/90
                    text-sm

                    hover:text-cyan-300

                    transition-all
                    duration-300
                    group
                  "
                >
                  {item.name}

                  <span
                    className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      -bottom-2

                      h-[2px]
                      w-0

                      bg-cyan-300

                      group-hover:w-full
                      transition-all
                      duration-300
                    "
                  />
                </Link>
              ))}
            </div>

          <Link href="/signin">
          
          <button
              className="
                px-5 py-2.5

                rounded-xl

                bg-cyan-500/15
                border border-cyan-400/30

                backdrop-blur-md

                text-cyan-200
                text-sm
                font-medium

                hover:bg-cyan-500/25
                hover:border-cyan-400/60

                transition-all
                duration-300
              "
            >
              Sign In
            </button>

          
          </Link>



          </div>

          {/* Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-cyan-300 relative z-10"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Menu of phone */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden
                mt-3

                rounded-2xl

                bg-white/[0.08]
                backdrop-blur-2xl

                border border-white/15

                overflow-hidden
              "
            >
              <div className="flex flex-col p-6 gap-5">

                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="
                      text-white/90
                      hover:text-cyan-300
                      transition-all
                    "
                  >
                    {item.name}
                  </Link>
                ))}

                <Link href="/signin" >
                
                <button
                  className="
                    mt-2
                    py-3

                    rounded-xl

                    bg-cyan-500/15
                    border border-cyan-400/30

                    text-cyan-200

                    backdrop-blur-md
                  "
                >
                  Sign In
                </button>
                
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}