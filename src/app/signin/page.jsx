import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {

  const [form, setForm] = useState({

    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setForm({...form, [e.target.name]: e.target.value});
  };


  const handleSubmit = (e) => {
    
  }


  return (
    <section className="px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">
            Sign in to
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
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
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

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
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

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-400">
                  <input
                    type="checkbox"
                    className="accent-emerald-500"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-emerald-300 hover:text-emerald-200 transition"
                >
                  Forgot Password?
                </Link>
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
                Sign In
              </button>

              <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-emerald-300 hover:text-emerald-200 transition"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}