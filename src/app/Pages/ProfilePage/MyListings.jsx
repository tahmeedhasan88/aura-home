import { Bath, Bed, Heart, MapPin, MoreVertical } from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const MyListings = () => {


 const { data: session } = useSession();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      if (!session?.user?.email) return;

      try {
        const res = await fetch(
          `/api/listings?email=${session.user.email}`
        );

        if (!res.ok) return;

        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.error(error);
      }
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
        <div>
            

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0C1825] p-6">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                My Listings
              </h2>


              <Link href="/listings">
              <button className="text-sm text-gray-400 transition hover:text-white">
                View All
              </button>
              
              </Link>

              
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {listings.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-[#0C1825] p-10 text-center">
          <p className="text-gray-400">
            No listings added yet.
          </p>

          <Link
            href="/homes"
            className="mt-6 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
          >
            Browse Homes
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {listings.slice(0, 2).map((home, index) => (
            <div
                  key={home.id ?? home._id ?? index}
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

          </div>


        </div>
    );
};

export default MyListings;


























