import { Bath, Bed, Heart, MapPin, MoreVertical } from 'lucide-react';
import React from 'react';

const MyListings = () => {


const listings = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      title: "Lunaov Loft",
      location: "Manhattan, New York, USA",
      price: "$2,550",
      type: "Apartment",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      title: "Urban Oasis",
      location: "Brooklyn, New York, USA",
      price: "$2,800",
      type: "Apartment",
    },
  ];




    return (
        <div>
            

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0C1825] p-6">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                My Listings
              </h2>

              <button className="text-sm text-gray-400 transition hover:text-white">
                View All
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#101D2C] transition hover:border-emerald-500/40"
                >
                  {/* Image */}

                  <div className="relative h-64">

                    <img
                      src={listing.image}
                      alt={listing.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#081421]/80 backdrop-blur">
                      <Heart size={18} />
                    </button>

                  </div>

                  {/* Body */}

                  <div className="space-y-4 p-5">

                    <div className="flex items-start justify-between">

                      <div>

                        <div className="flex items-center gap-3">

                          <h3 className="text-xl font-semibold">
                            {listing.title}
                          </h3>

                          <span className="rounded bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
                            {listing.type}
                          </span>

                        </div>

                        <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                          <MapPin size={15} />
                          {listing.location}
                        </div>

                      </div>

                      <button className="rounded-lg p-2 transition hover:bg-white/5">
                        <MoreVertical size={20} />
                      </button>

                    </div>

                    <div className="flex items-center justify-between">

                      <div>
                        <span className="text-3xl font-bold text-white">
                          {listing.price}
                        </span>

                        <span className="ml-1 text-gray-400">
                          / month
                        </span>
                      </div>

                      <div className="flex items-center gap-5 text-gray-400">

                        <div className="flex items-center gap-1">
                          <Bed size={18} />
                          <span>3</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <Bath size={18} />
                          <span>2</span>
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>


        </div>
    );
};

export default MyListings;