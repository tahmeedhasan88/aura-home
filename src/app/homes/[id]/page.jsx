import PropertyDetails from "./PropertyDetails";

export async function generateMetadata({ params }) {
  const res = await fetch("https://aura-home-one.vercel.app/homedetails.json", {
    cache: "no-store",
  });

  const homes = await res.json();

  const home = homes.find(
    (item) => String(item.id) === String(params.id)
  );

  if (!home) {
    return {
      title: "Property Not Found | AURA HOME",
    };
  }

  return {
    title: `${home.name} | AURA HOME`,
    description: home.fullDescription,

    openGraph: {
      title: home.name,
      description: home.fullDescription,
      url: `https://aura-home-one.vercel.app/homes/${home.id}`,

      images: [
        {
          url: home.photo,
          width: 1200,
          height: 630,
          alt: home.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: home.name,
      description: home.fullDescription,
      images: [home.photo],
    },
  };
}

export default function Page({ params }) {
  return <PropertyDetails params={params} />;
}