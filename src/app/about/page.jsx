"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UniversalNav from "../Components/UniversalNav";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";
import {
  Home,
  Building2,
  DollarSign,
} from "lucide-react";

const salesData = [
  { year: "2022", sales: 0.6, units: 3 },
  { year: "2023", sales: 1.1, units: 5 },
  { year: "2024", sales: 1.8, units: 8 },
  { year: "2025", sales: 2.6, units: 12 },
  { year: "2026", sales: 3.5, units: 16 },
];



const TrendLine = () => (
  <svg
    viewBox="0 0 120 30"
    className="w-full h-8 mt-6"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="trendGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#34d399" />
      </linearGradient>
    </defs>

    <path
      d="M0 22
         C15 20,18 15,30 17
         S52 22,60 18
         S80 12,92 15
         S108 16,120 10"
      fill="none"
      stroke="url(#trendGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    <path
      d="M0 30
         L0 22
         C15 20,18 15,30 17
         S52 22,60 18
         S80 12,92 15
         S108 16,120 10
         L120 30 Z"
      fill="rgba(16,185,129,.08)"
    />
  </svg>
);


export default function About() {
  const { data: session } = useSession();

  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchListings = async () => {
      const res = await fetch(
        `/api/listings?email=${encodeURIComponent(session.user.email)}`
      );

      const data = await res.json();

    console.log("Listings:", data);
    console.log(session);

      setListings(data);
    };

    fetchListings();
  }, [session]);

  const totalListings = listings.length;

  const totalValue = listings.reduce((total, property) => {
    const price = Number(
      property.price.replace("$", "").replace(/,/g, "")
    );

    return total + price;
  }, 0);

  return (
    <>
      <UniversalNav />

      <section className="min-h-screen bg-[#06141B] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-3">
              Overview of your real estate statistics.
            </p>
          </div>

          {/* Top Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

            {/* Available Property */}

            <div className="rounded-3xl
                border
                border-emerald-500/20
                bg-gradient-to-br
                from-[#10232c]
                via-[#0d1f27]
                to-[#112b34]
                backdrop-blur-xl
                p-6
                shadow-[0_0_35px_rgba(16,185,129,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400/40
                hover:shadow-[0_0_45px_rgba(16,185,129,0.2)]">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400 text-sm">
                    Available Property
                  </p>

                  <h2 className="mt-4 text-4xl font-bold text-white">
                    20
                  </h2>

                </div>

                <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">

                  <Home
                    className="text-emerald-400"
                    size={30}
                  />

                </div>

              </div>

              <div className="mt-8 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-full rounded-full bg-emerald-400"></div>
              </div>

            </div>

            {/* Total Listings */}

            <div className="rounded-3xl
                    border
                    border-emerald-500/20
                    bg-gradient-to-br
                    from-[#10232c]
                    via-[#0d1f27]
                    to-[#112b34]
                    backdrop-blur-xl
                    p-6
                    shadow-[0_0_35px_rgba(16,185,129,0.12)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-400/40
                    hover:shadow-[0_0_45px_rgba(16,185,129,0.2)]">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400 text-sm">
                    Total Listings
                  </p>

                  <h2 className="mt-4 text-4xl font-bold text-white">
                    {totalListings}
                  </h2>

                </div>

                <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">

                  <Building2
                    className="text-emerald-400"
                    size={30}
                  />

                </div>

              </div>

              <div className="mt-8 h-2 rounded-full bg-white/10 overflow-hidden">

                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{
                    width: `${(totalListings / 20) * 100}%`,
                  }}
                />

              </div>

            </div>

            {/* Total Value */}

            <div className="rounded-3xl
                border
                border-emerald-500/20
                bg-gradient-to-br
                from-[#10232c]
                via-[#0d1f27]
                to-[#112b34]
                backdrop-blur-xl
                p-6
                shadow-[0_0_35px_rgba(16,185,129,0.12)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400/40
                hover:shadow-[0_0_45px_rgba(16,185,129,0.2)]">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-400 text-sm">
                    Total Value
                  </p>

                  <h2 className="mt-4 text-4xl font-bold text-white">
                    $
                    {totalValue.toLocaleString()}
                  </h2>

                </div>

                <div className="h-14 w-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">

                  <DollarSign
                    className="text-emerald-400"
                    size={30}
                  />

                </div>

              </div>

              <div className="mt-8 h-2 rounded-full bg-white/10 overflow-hidden">

                <div className="h-full w-full rounded-full bg-emerald-400"></div>

              </div>

            </div>

          </div>

          {/* Chart Section */}

          <div className="mt-10 rounded-3xl border border-white/10 bg-[#0A1A22] p-6">

            <div className="mb-8">

              <h2 className="text-2xl font-bold text-white">
                Total Sales in Five Years
              </h2>

              <p className="text-gray-400 mt-2">
                Property sales performance from 2022 to 2026.
              </p>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">

            <div className="xl:col-span-5 h-[420px]">

            <ResponsiveContainer width="100%" height="100%">

            <BarChart
            data={salesData}
            margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 5,
            }}
            >

            <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1d3943"
            />

            <XAxis
                dataKey="year"
                tick={{
                fill: "#9ca3af",
                fontSize: 13,
                }}
                tickLine={false}
                axisLine={false}
            />

            <YAxis
                tick={{
                fill: "#9ca3af",
                fontSize: 13,
                }}
                tickLine={false}
                axisLine={false}
            />

            <Tooltip
                contentStyle={{
                background: "#081319",
                border: "1px solid rgba(16,185,129,.35)",
                borderRadius: "16px",
                color: "#fff",
                boxShadow: "0 10px 35px rgba(0,0,0,.35)",
                }}
                labelStyle={{
                color: "#10b981",
                }}
            />

            <Legend />

            <Bar
                dataKey="units"
                name="Units Sold"
                radius={[8, 8, 0, 0]}
                fill="#10b981"
                barSize={36}
            />

            <Line
                type="monotone"
                dataKey="sales"
                name="Sales ($M)"
                stroke="#34d399"
                strokeWidth={4}
                dot={{
                r: 5,
                fill: "#34d399",
                }}
                activeDot={{
                r: 7,
                }}
            />

            </BarChart>

            </ResponsiveContainer>

            </div>

        </div>

          </div>

        </div>
      </section>
    </>
  );
}