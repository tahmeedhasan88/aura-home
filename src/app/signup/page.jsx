"use client";

import { useState } from "react";
import Link from "next/link";
import { postUser } from "../Server/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    
  });


  const handleChange = (e) => {

    setForm({...form, [e.target.name]: e.target.value});
  }


  const handleSubmit = async (e) => {

  e.preventDefault();

  const result = await postUser(form);

  console.log(form);

  if (result.acknowledged) {

    alert("User created successfully!");
    router.push("/signin");
  }

  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
            Create your account on
          </p>

          <Link href="/" className="inline-block">
            <h1 className="text-[32px] font-bold tracking-wide">
              <span className="text-cyan-400">AURA</span>
              <span className="text-white">HOME</span>
            </h1>
          </Link>
        </div>

        {/* Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]

            bg-white/5
            backdrop-blur-xl

            border border-white/10

            shadow-[0_0_30px_rgba(16,185,129,0.18)]

            p-6
            sm:p-8
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.22),transparent_60%)]
              opacity-80
            "
          />

          {/* Shine */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                -left-32
                top-0
                h-full
                w-24
                rotate-12
                bg-white/10
                blur-xl
              "
            />
          </div>

          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name = "name"
                  value={form.name}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl

                    border border-white/10
                    bg-white/5

                    px-4
                    py-3

                    text-white
                    placeholder:text-gray-500

                    outline-none

                    focus:border-emerald-400
                    focus:ring-2
                    focus:ring-emerald-400/20

                    transition
                  "
                />
              </div>

              {/* Picture */}
              {/* <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Profile Picture
                </label>

                <input
                  type="file"
                  accept="image/*"
                  className="
                    w-full
                    rounded-2xl

                    border border-white/10
                    bg-white/5

                    px-4
                    py-3

                    text-sm
                    text-gray-300

                    file:mr-4
                    file:rounded-xl
                    file:border-0
                    file:bg-emerald-500
                    file:px-4
                    file:py-2
                    file:font-medium
                    file:text-black

                    hover:file:bg-emerald-400

                    transition
                  "
                />
              </div> */}



              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name = "email"
                  value={form.email}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl

                    border border-white/10
                    bg-white/5

                    px-4
                    py-3

                    text-white
                    placeholder:text-gray-500

                    outline-none

                    focus:border-emerald-400
                    focus:ring-2
                    focus:ring-emerald-400/20

                    transition
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  name = "password"
                  value={form.password}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl

                    border border-white/10
                    bg-white/5

                    px-4
                    py-3

                    text-white
                    placeholder:text-gray-500

                    outline-none

                    focus:border-emerald-400
                    focus:ring-2
                    focus:ring-emerald-400/20

                    transition
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  rounded-2xl

                  bg-emerald-500

                  px-4
                  py-3

                  font-semibold
                  text-black

                  hover:bg-emerald-400

                  transition
                "
              >
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="
                    text-emerald-300
                    hover:text-emerald-200

                    transition
                  "
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}