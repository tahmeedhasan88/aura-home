"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import UniversalNav from "../Components/UniversalNav";
import { useSession } from "next-auth/react";



export default function ListingsPage() {
  const [listings, setListings] = useState([]);

const {  data: session,  status } = useSession();


useEffect(() => {
  const fetchListings = async () => {
    if (!session?.user?.email) return;

    const res = await fetch(
      `/api/listings?email=${session.user.email}`
    );

    const data = await res.json();

    setListings(data);
  };

  fetchListings();
}, [session]);



  const handleCancel = (id) => {
    const updated = listings.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "listings",
      JSON.stringify(updated)
    );

    setListings(updated);
  };

  return (
    <>
      <UniversalNav />

      <section className="min-h-screen bg-[#06141B] pt-32 pb-16 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              My Listings
            </h1>

            <p className="text-gray-400 mt-3">
              Your selected properties.
            </p>
          </div>

          {listings.length === 0 ? (
            <div className="text-center">

              <p className="text-gray-400 text-lg">
                No listing added.
              </p>

              <Link
                href="/homes"
                className="inline-block mt-8 px-8 py-3 rounded-xl bg-emerald-500 text-black font-semibold"
              >
                Browse Homes
              </Link>

            </div>
          ) : (
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-8
                justify-items-center
              "
            >
              {listings.map((home) => (
                <div
                  key={home.id}
                  className="
                    w-full
                    max-w-[320px]
                    rounded-[30px]
                    overflow-hidden
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    shadow-[0_0_30px_rgba(16,185,129,0.18)]
                  "
                >
                  <div className="p-5">

                    <img
                      src={home.photo}
                      alt={home.name}
                      className="w-full h-[210px] object-cover rounded-2xl"
                    />

                    <h2 className="mt-5 text-xl font-semibold text-white">
                      {home.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      {home.shortDescription}
                    </p>

                    <div className="mt-5 flex justify-between items-center">
                      <span className="text-xl font-bold text-emerald-300">
                        {home.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCancel(home.id)}
                      className="
                        w-full
                        mt-6
                        py-3
                        rounded-xl
                        bg-red-500
                        text-white
                        font-medium
                        hover:bg-red-600
                        transition
                      "
                    >
                      Cancel Listing
                    </button>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </section>
    </>
  );
}