"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import UniversalNav from "../Components/UniversalNav";
import { useSession } from "next-auth/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchListings = async () => {
      if (!session?.user?.email) return;

      const res = await fetch(`/api/listings?email=${encodeURIComponent(session.user.email)}`);
      const data = await res.json();

      setListings(data);
    };

    fetchListings();
  }, [session]);

  const handleCancel = async (listing) => {
    const listingId = listing?._id?.toString?.() || listing?.id || listing?.homeId;

    if (!listingId) return;

    const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            actions: 'flex justify-center gap-4',
            confirmButton: 'rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600',
            cancelButton: 'bg-blue-500 rounded-lg border border-gray-200 px-5 py-2 text-white  hover:bg-blue-200',
          },
          buttonsStyling: false,
        });
    
        const result = await swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,
        });
    
        if (!result.isConfirmed) {
          await swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your listing is safe.',
            icon: 'error',
          });
          return;
        }
    
        try {
          const res = await fetch('/api/listings', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ listingId, email: session?.user?.email }),
          });
    
          const data = await res.json();
    
          if (!res.ok || !data.success) {
            throw new Error(data.message || 'Failed to delete listing');
          }
    
          setListings((prev) =>
            prev.filter((item) => {
              const currentId = item?._id?.toString?.() || item?.id || item?.homeId;
              return currentId !== listingId;
            })
          );
    
          await swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: 'Your listing has been deleted.',
            icon: 'success',
          });
        } catch (error) {
          console.error(error);
          await swalWithBootstrapButtons.fire({
            title: 'Delete failed',
            text: error.message || 'Could not delete the listing.',
            icon: 'error',
          });
        }
    
  };

  return (
    <>
      <UniversalNav />

      <section className="min-h-screen bg-[#06141B] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center lg:text-start mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">My Listings</h1>
            <p className="text-gray-400 mt-3">Your selected properties.</p>
          </div>

          {listings.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-400 text-lg">No listing added.</p>

              <Link
                href="/homes"
                className="inline-block mt-8 px-8 py-3 rounded-xl bg-emerald-500 text-black font-semibold"
              >
                Browse Homes
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {listings.map((home) => (
                <div key={home.id ?? home._id} className="w-full max-w-[320px] rounded-[30px] overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.18)]">
                  <div className="p-5">
                    <img src={home.photo} alt={home.name} className="w-full h-[210px] object-cover rounded-2xl" />

                    <h2 className="mt-5 text-xl font-semibold text-white">{home.name}</h2>
                    <p className="mt-2 text-sm text-gray-400">{home.shortDescription}</p>

                    <div className="mt-5 flex justify-between items-center">
                      <span className="text-xl font-bold text-emerald-300">{home.price}</span>

                      
                      <RiDeleteBin5Line onClick={() => handleCancel(home)} className="text-red-500" />
                    </div>

                    {/* <button  className="w-full mt-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition">
                      Cancel Listing
                    </button> */}


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
