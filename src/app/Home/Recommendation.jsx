"use client"
import Swal from "sweetalert2";

export default function Recommendation() {

const handleClick = () => {

  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You Are Not Applicable For This Feature!",
});
}


  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:justify-between lg:gap-20 lg:px-8">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Get Home Recommendations
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
            Sign in to receive personalized property recommendations based on
            your budget, preferred location, and browsing history.
          </p>

         <button
                         onClick={handleClick}
                         className="
                           inline-flex items-center
                           px-7 py-3
                           rounded-xl
                           font-semibold
                           text-white
         
                           bg-[#0d9488]/20
                           border border-[#2dd4bf]/40
                             mt-5
                           backdrop-blur-md
         
                           hover:bg-[#0d9488]/35
                           hover:shadow-[0_0_35px_rgba(45,212,191,0.4)]
         
                           transition-all duration-300
                         "
                       >
                         Let's Go
                       </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/multicard.PNG"
            alt="Home Recommendation"
            className="
              w-full
              max-w-[520px]
              object-contain
              select-none
            "
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}