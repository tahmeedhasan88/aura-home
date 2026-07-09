"use client";

import Image from "next/image";
import {
  Bath,
  Bed,
  Building2,
  CreditCard,
  Heart,
  Home,
  LogOut,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  MoreVertical,
  Pencil,
  Plus,
  Settings,
  UploadCloud,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import MyListings from "../Pages/ProfilePage/MyListings";
import PropertyStatus from "../Pages/ProfilePage/PropertyStatus";
import Link from "next/link";


export default function UserProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      icon: User,
      title: "My Profile",
      active: true,
    },
    {
      icon: Building2,
      title: "My Listings",
    },
    {
      icon: Home,
      title: "My Properties",
    },
    {
      icon: Heart,
      title: "Saved Listings",
    },
    {
      icon: MessageSquare,
      title: "Messages",
    },
    {
      icon: CreditCard,
      title: "Billing History",
    },
    {
      icon: Settings,
      title: "Support Center",
    },
  ];

  
  return (
    <section className="min-h-screen bg-[#07131F] text-white">
      <div className="mx-auto flex max-w-[1700px]">

        {/* Mobile Menu */}

        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed left-5 top-5 z-40 rounded-lg bg-[#0E1C2B] p-3 lg:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Overlay */}

        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}

        {/* Sidebar */}

        <aside
          className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-white/10 bg-[#081421] transition-all duration-300 lg:static
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 p-6 lg:hidden">
            <h2 className="text-xl font-semibold">Dashboard</h2>

            <button onClick={() => setSidebarOpen(false)}>
              <X />
            </button>
          </div>

          <nav className="flex-1 space-y-2 p-6">

            
                    <Link
                      href="/"
                      className="relative z-10 shrink-0"
                    >
                      <h1 className="font-bold  tracking-wide leading-none">
                        <span className="text-cyan-400 text-[18px] sm:text-[20px] md:text-[24px]">
                          AURA
                        </span>
                        <span className="text-white text-[18px] sm:text-[20px] md:text-[24px]">
                          HOME
                        </span>
                      </h1>
                    </Link>


            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  className={`flex w-full items-center gap-3 mt-5 rounded-xl px-4 py-3 text-left transition
                  ${
                    item.active
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "hover:bg-white/5"
                  }`}
                >
                  <Icon size={19} />

                  <span>{item.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-6">
            <button className="flex items-center gap-3 text-red-400 transition hover:text-red-300">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}

        <main className="flex-1 p-5 lg:p-8">

          {/* Profile */}

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0C1825]">

            {/* Banner */}

            <div className="relative h-52 w-full">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600"
                alt=""
                fill
                className="object-cover opacity-30"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0C1825] via-[#0C1825]/60 to-transparent" />
            </div>

            <div className="relative px-6 pb-8">

              {/* Profile Content */}

              <div className="-mt-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-col gap-6 md:flex-row md:items-center">

                  {/* Profile Image */}

                 {/* Profile Image */}

<div className="relative h-40 w-40">

  {/* Green Border */}
  <div className="absolute inset-0 rounded-full border-4 border-emerald-400"></div>

  {/* Profile Picture */}
  <img
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="Profile"
    className="h-full w-full rounded-full object-cover p-2.5"
  />

  {/* Upload Button - Border Edge */}
  <label
    htmlFor="profile-image"
    className="absolute bottom-0 right-0 z-20 flex h-11 w-11 translate-x-1/4 translate-y-1/4 cursor-pointer items-center justify-center rounded-full border-4 border-[#0C1825] bg-red-500 transition hover:bg-red-600"
  >
    <Plus size={20} className="text-white" />
  </label>

  <input
    id="profile-image"
    type="file"
    accept="image/*"
    className="hidden"
  />

</div>

                  {/* Info */}

                  <div>

                    <h2 className="text-3xl font-bold">
                      Alex R.
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-3">

                      <p className="text-gray-300">
                        Member / Investor
                      </p>

                      <span className="rounded bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
                        Active User
                      </span>

                    </div>

                    <div className="mt-5 space-y-3 text-gray-300">

                      <div className="flex items-center gap-2">
                        <MapPin size={17} />
                        New York, USA
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail size={17} />
                        alex.r@email.com
                      </div>

                      <p>
                        Member Since : 2023
                      </p>

                    </div>

                  </div>

                </div>

                <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400">
                  <Pencil size={18} />
                  Edit Profile
                </button>

              </div>
            </div>
          </div>
                    {/* My Listings */}

          <MyListings></MyListings>

                    {/* Post Property */}

          <PropertyStatus></PropertyStatus>

        </main>
      </div>
    </section>
  );
}