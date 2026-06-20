"use client";

import Link from "next/link";

export default function SeeDetailsButton({ id }) {
  return (
    <Link
      href={`/homes/${id}`}
      className="
        px-4
        py-2.5
        rounded-xl
        text-sm
        font-medium
        bg-white/5
        border border-white/10
        text-white
        hover:bg-emerald-500
        hover:text-black
        transition
      "
    >
      See Details
    </Link>
  );
}