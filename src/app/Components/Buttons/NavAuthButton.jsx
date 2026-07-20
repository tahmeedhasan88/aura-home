"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const NavAuthButton = () => {
  const { data: session, status } = useSession();

  const [image, setImage] = useState("");

  useEffect(() => {
    if (status !== "authenticated" || !session?.user?.email) {
      setImage("");
      return;
    }

    const getUser = async () => {
      try {
        const res = await fetch(
          `/api/users/${encodeURIComponent(session.user.email)}`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) return;

        const user = await res.json();
        setImage(user.image || "");
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, [session?.user?.email, status]);

  if (status === "loading") {
    return (
      <div className="h-9 w-9 rounded-full border border-white/15 bg-white/10" />
    );
  }

  if (status !== "authenticated") {
    return (
      <Link href="/signin">
        <button
          className="
            rounded-xl
            border border-cyan-400/30
            bg-cyan-200
            px-5
            py-2
            text-sm
            font-medium
            text-black
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-cyan-400/60
            hover:bg-cyan-500/25
          "
        >
          Sign In
        </button>
      </Link>
    );
  }

  return (
    <Link href="/user-profile">
      <button
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/15
          bg-white/10
          transition
          hover:border-cyan-400/50
        "
      >
        {image ? (
          <img 
            src={image}
            alt="Profile"
            width={36}
            height={36}
            className="h-full w-full object-cover"
          />
        ) : (
          <User
            size={16}
            className="text-white/80"
          />
        )}
      </button>
    </Link>
  );
};

export default NavAuthButton;