"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddListing({ home }) {
  const router = useRouter();
  const { status } = useSession();

  const handleAddListing = () => {
    if (status !== "authenticated") {
      router.push("/signin");
      return;
    }

    const storedListings =
      JSON.parse(localStorage.getItem("listings")) || [];

    const exists = storedListings.find(
      (item) => item.id === home.id
    );

    if (!exists) {
      storedListings.push({
        id: home.id,
        name: home.name,
        photo: home.photo,
        shortDescription: home.shortDescription,
        price: home.price,
      });

      localStorage.setItem(
        "listings",
        JSON.stringify(storedListings)
      );
    }

    toast.success("Listing added successfully!");
    router.push("/listings");
    
  };

  return (

    <div>
    <button
      onClick={handleAddListing}
      className="w-full sm:w-auto inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
    >
      Add Listing
    </button>





    
    </div>

    
  );
}