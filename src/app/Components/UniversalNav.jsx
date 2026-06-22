'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import {
  Search,
  Globe,
  Bell,
  User,
  Menu,
  X,
} from 'lucide-react';

export default function UniversalNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const search = searchParams.get('search') || '';
  const searchPath = pathname.startsWith('/homes') ? pathname : '/homes';

  const updateSearch = (value, replace = true) => {
    const params = new URLSearchParams();

    if (value.trim()) {
      params.set('search', value);
    }

    const query = params.toString();
    const url = query ? `${searchPath}?${query}` : searchPath;

    if (replace) {
      router.replace(url);
    } else {
      router.push(url);
    }
  };

  const handleSearch = (e) => {
    updateSearch(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    updateSearch(e.currentTarget.value, false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 pt-4">
      <div className="max-w-7xl mx-auto">

        <div
          className="
            relative
            h-[64px]
            md:h-[72px]

            flex
            items-center
            gap-3

            px-4
            md:px-6

            rounded-2xl

            bg-white/[0.08]
            backdrop-blur-2xl
            backdrop-saturate-200

            border
            border-white/15

            shadow-[0_8px_32px_rgba(0,0,0,0.25)]

            overflow-hidden
          "
        >
          <div className="absolute inset-y-0 right-0 w-[60%] bg-gradient-to-l from-white/15 via-white/5 to-transparent pointer-events-none" />

          <Link
            href="/"
            className="relative z-10 shrink-0"
          >
            <h1 className="font-bold tracking-wide leading-none">
              <span className="text-cyan-400 text-[18px] sm:text-[20px] md:text-[24px]">
                AURA
              </span>
              <span className="text-white text-[18px] sm:text-[20px] md:text-[24px]">
                HOME
              </span>
            </h1>
          </Link>

          <div className="flex-1 relative z-10 min-w-0">
            <div className="relative max-w-lg mx-auto">
              <Search
                size={16}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-white/40
                "
              />

              <input
                type="text"
                value={search}
                onChange={handleSearch}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search by name or location..."
                className="
                  w-full
                  h-10
                  md:h-11

                  pl-9
                  pr-3

                  rounded-xl

                  bg-black/20

                  border
                  border-white/10

                  text-white
                  text-sm

                  placeholder:text-white/35

                  outline-none

                  transition-all

                  focus:border-cyan-400/40
                "
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 relative z-10">

            <button
              className="
                text-white/70
                hover:text-cyan-300
                transition-colors
              "
            >
              <Globe size={18} />
            </button>

            <button
              className="
                text-white/70
                hover:text-cyan-300
                transition-colors
              "
            >
              <Bell size={18} />
            </button>

            <button
              className="
                w-9
                h-9

                rounded-full

                bg-white/10
                border
                border-white/15

                flex
                items-center
                justify-center

                text-white/80
              "
            >
              <User size={16} />
            </button>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden

              relative
              z-10

              text-white/80

              flex
              items-center
              justify-center
            "
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            className="
              md:hidden

              mt-3

              rounded-2xl

              bg-white/[0.08]
              backdrop-blur-2xl

              border
              border-white/15

              overflow-hidden
            "
          >
            <div className="flex flex-col p-4 gap-4">

              <button
                className="
                  flex
                  items-center
                  gap-3

                  text-white/80

                  hover:text-cyan-300
                  transition-colors
                "
              >
                <Globe size={18} />
                <span>Language</span>
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-3

                  text-white/80

                  hover:text-cyan-300
                  transition-colors
                "
              >
                <Bell size={18} />
                <span>Notifications</span>
              </button>

              <button
                className="
                  flex
                  items-center
                  gap-3

                  text-white/80

                  hover:text-cyan-300
                  transition-colors
                "
              >
                <User size={18} />
                <span>Profile</span>
              </button>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}