"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function AddListing({ home }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleAddListing = async () => {
  if (status !== "authenticated") {
    router.push("/signin");
    return;
  }

  const listing = {
    homeId: home.id,
    userEmail: session.user.email,
    name: home.name,
    photo: home.photo,
    shortDescription: home.shortDescription,
    price: home.price,
  };

  const res = await fetch("/api/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listing),
  });

  const data = await res.json();

  if (data.success) {
    toast.success("Listing added successfully!");
    router.push("/listings");
  }
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