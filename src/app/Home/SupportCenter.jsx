export default function SupportCenter() {
  return (
    <section className="py-16 md:py-20">
  <div className="mx-auto max-w-7xl px-4">
    <div
      className="
        relative
        overflow-hidden
        rounded-[30px]

        bg-white/5
        backdrop-blur-xl

        border border-white/10

        shadow-[0_0_30px_rgba(16,185,129,0.18)]
      "
    >
      {/* Emerald Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_right,rgba(16,185,129,0.18),transparent_60%)]
        "
      />

      <div className="relative flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          <img
            src="/CallSupport.jpg"
            alt="Support"
            className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
          />

          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Need Expert Guidance?
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              Get professional guidance for buying, selling, or renting
              property. Our specialists are ready to assist you.
            </p>
          </div>
        </div>

        {/* Right */}
       <a
  href="tel:1700123456"
  className="
    group
    flex
    w-full
    max-w-xs
    items-center
    justify-center
    gap-4

    rounded-2xl

    bg-white/5
    border border-white/10

    px-5
    py-4

    transition-all
    duration-300

    hover:bg-emerald-500/10
    hover:border-emerald-400/30
  "
>
  <div
    className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full

      bg-emerald-500/10

      transition
      group-hover:bg-emerald-500/20
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 text-emerald-300"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.45 3a2 2 0 0 1-.57 1.74l-1.27 1.27a16 16 0 0 0 6.36 6.36l1.27-1.27a2 2 0 0 1 1.74-.57l3 .45A2 2 0 0 1 22 16.92Z" />
      <path d="M15 5a5 5 0 0 1 4 4" />
      <path d="M15 1a9 9 0 0 1 8 8" />
    </svg>
  </div>

  <div>
    <p className="text-sm text-gray-400">Call Now</p>

    <h3 className="text-2xl font-bold tracking-wide text-emerald-300">
      18812
    </h3>
  </div>
</a>
      </div>
    </div>
  </div>
</section>
  );
}