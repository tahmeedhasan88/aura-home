import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./Components/Footer";
import NextAuthProvider from "./Provider/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aurahome.com"),

  title: {
    default: "AURA HOME",
    template: "%s | AURA HOME",
  },

  description:
    "AURA HOME helps you discover and buy your perfect home. Browse premium apartments, villas, family homes, and luxury properties with trusted listings and detailed information.",

  keywords: [
    "AURA HOME",
    "real estate",
    "home selling",
    "buy house",
    "apartments",
    "luxury homes",
    "family home",
    "villa",
    "property listings",
    "dream home",
    "real estate Bangladesh",
    "houses for sale",
  ],

  applicationName: "AURA HOME",

  authors: [
    {
      name: "Tahmeed Hasan",
      url: "https://aurahome.com",
    },
  ],

  creator: "Tahmeed Hasan",

  publisher: "AURA HOME",

  category: "Real Estate",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "https://i.ibb.co.com/gMqPqvyj/favicon.png",
    shortcut: "https://i.ibb.co.com/gMqPqvyj/favicon.png",
    apple: "https://i.ibb.co.com/gMqPqvyj/favicon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurahome.com",
    siteName: "AURA HOME",
    title: "AURA HOME | Find Your Dream Home",
    description:
      "Explore beautiful apartments, villas, and premium homes with AURA HOME. Find the perfect property with trusted listings and detailed information.",

    images: [
      {
        url: "https://i.ibb.co.com/1thPRwfw/Home-Page.jpg",
        width: 1200,
        height: 630,
        alt: "AURA HOME - Home Page",
      },
      {
        url: "https://i.ibb.co.com/fGCDGNps/Product.jpg",
        width: 1200,
        height: 630,
        alt: "AURA HOME Property Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AURA HOME | Find Your Dream Home",
    description:
      "Find your dream home with AURA HOME. Browse premium properties, apartments, and villas in one place.",
    images: ["https://i.ibb.co.com/1thPRwfw/Home-Page.jpg"],
  },

  appleWebApp: {
    capable: true,
    title: "AURA HOME",
    statusBarStyle: "default",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  other: {
    "theme-color": "#0F172A",
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>


    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-screen">
        

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
        
      
      </body>
    </html>


    </NextAuthProvider>
  );
}
