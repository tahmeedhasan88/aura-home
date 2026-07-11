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
import { useEffect, useState } from "react";
import MyListings from "../Pages/ProfilePage/MyListings";
import PropertyStatus from "../Pages/ProfilePage/PropertyStatus";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import uploadImage from "@/app/lib/uploadImage";


export default function UserProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();
  const [openEditModal, setOpenEditModal] = useState(false);


  const [form, setForm] = useState({
  name: "",
  location: "",
});

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user?.email) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/users/${encodeURIComponent(session.user.email)}`
        );

        if (!res.ok) {
          if (res.status === 404) {
            setUser({
              email: session.user.email,
              name: session.user.name || session.user.email,
              image: session.user.image || "",
            });
            return;
          }

          throw new Error("Failed to fetch user");
        }

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [session?.user?.email, status]);

  const menuItems = [
    {
      icon: User,
      title: "My Profile",
      href: "/user-profile",
      active: true,
    },
    {
      icon: Home,
      title: "Home",
    },
    {
      icon: Heart,
      title: "Saved Listings",
    },
    {
      icon: Building2,
      title: "My Properties",
      href: "/listings",
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


  if (loading) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#07131F] text-white">
      <span className="loading loading-spinner text-success"></span>
    </section>
  );
}

//for handling profile image upload
 const handleProfileImage = async (event) => {
  const file = event.target.files[0];

  if (!file || !user) return;

  try {
    setUploading(true);

    const imageUrl = await uploadImage(file);

    const res = await fetch(`/api/users/${encodeURIComponent(user.email)}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: imageUrl,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to update profile");
    }

    setUser((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  } catch (error) {
    console.error(error);
  } finally {
    setUploading(false);
    event.target.value = "";
  }
};



const handleChange = (event) => {
  const { name, value } = event.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};


//for handling profile update 
const handleProfileUpdate = async () => {
  try {

    console.log(form)
    const res = await fetch(`/api/users/${user.email}`, {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: form.name.trim(),
        location: form.location.trim(),
      }),
    });

    if (!res.ok) {
      throw new Error("Update failed");
    }

    setUser((prev) => ({
      ...prev,
      name: form.name.trim(),
      location: form.location.trim(),
    }));

    setOpenEditModal(false);
  } catch (error) {
    console.error(error);
  }
};

  
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
            <button onClick={() => signOut({ callbackUrl: "/",})} className="flex items-center gap-3 text-red-400 transition hover:text-red-300">
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
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600"
                alt="Profile banner"
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

            <div className="relative h-40 w-40">

            {/* Green Border */}
            <div className="absolute inset-0 rounded-full border-4 border-emerald-400"></div>

            {/* Profile Picture */}

            {uploading ? (
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#132536]">
            Uploading...
            </div>
            ) : (
            <img
            src={
            user?.image ||
            "https://i.ibb.co/4pDNDk1/avatar.png"
            }
            alt={user?.name}
            className="h-full w-full rounded-full object-cover p-2.5"
            />
            )}

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
          onChange={handleProfileImage}
          />

            </div>

                  {/* Info */}

                  <div>

                    <h2 className="text-3xl font-bold">
                      {user?.name}
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
                        {user?.location || "Location not added"}
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail size={17} />
                        {user?.email}
                      </div>

                    <p>
                    Member Since :{" "}
                    {new Date(user?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    })}
                    </p>

                    </div>

                  </div>

                </div>

              <button
              onClick={() => {
              setForm({
              name: user?.name || "",
              location: user?.location || "",
              });

              setOpenEditModal(true);
              }}
                className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
              >
              <Pencil size={18} />
              Edit Profile
              </button>
              </div>
            </div>
          </div>
                    {/* My Listings */}

          <MyListings></MyListings>



          {/* Modal of edit profile */}


        {openEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
        <div className="w-full max-w-md rounded-2xl bg-[#0C1825] p-6">
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
        Edit Profile
        </h2>

        <button
        onClick={() => setOpenEditModal(false)}
        >
        <X />
        </button>
        </div>

        <div className="mt-6">
        <label className="mb-2 block">
        Name
        </label>

          <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-white/10 bg-[#132536] px-4 py-3 outline-none"
          />

        </div>

        <div className="mt-5">
        <label className="mb-2 block">
        Location
        </label>

        <input
        defaultValue={user?.location}
        name="location"
        onChange={handleChange}
        value={form.location}
        type="text"
        className="w-full rounded-xl border border-white/10 bg-[#132536] px-4 py-3 outline-none"
        />
        </div>

        <button
        onClick={handleProfileUpdate}
        className="mt-8 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black transition hover:bg-emerald-400"
        >
        Save
        </button>
        </div>
        </div>
        )}





                    {/* Post Property */}

          <PropertyStatus></PropertyStatus>

        </main>
      </div>
    </section>
  );
}