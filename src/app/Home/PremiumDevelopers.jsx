const developers = [
  "/developers/bellismo.JPG",
  "/developers/CasaBella.jpg",
  "/developers/DolceCasa.png",
  "/developers/Gabetti.jpg",
  "/developers/milano.jpg",
  "/developers/Monteverde.jpg",
  "/developers/Tenicasa.png",
  "/developers/TTTT.png",
  "/developers/Tuscan.JPG",
  "/developers/vistaverde.jpg",
];

export default function PremiumDevelopers() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center lg:text-start">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Premium Developers
          </h2>
          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Trusted real estate development partners.
          </p>
        </div>

        <div className="overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="5"
            loop="infinite"
          >
            <div className="flex items-center gap-10 md:gap-16">
              {developers.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Developer ${index + 1}`}
                  className="h-10 w-auto object-contain sm:h-12 md:h-14 lg:h-16"
                />
              ))}
            </div>
          </marquee>
        </div>
      </div>
    </section>
  );
}