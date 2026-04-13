// src/components/TrustBar.tsx
"use client";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600"] });

export default function TrustBar() {
  const signals = [
    "Free Delivery",
    "Cash on Delivery",
    "Verified Sellers",
    "Fast Local Shipping"
  ];

  return (
    <div className={`bg-[#303A40] py-2 overflow-hidden ${montserrat.className}`}>
      {/* DESKTOP VERSION: Static flex layout as requested */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 justify-center items-center gap-x-18">
        {signals.map((signal, index) => (
          <div key={index} className="flex items-center">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/90">
              {signal}
            </span>
          </div>
        ))}
      </div>

      {/* MOBILE VERSION: Infinite horizontal scroll loop */}
      <div className="flex md:hidden relative whitespace-nowrap">
        <div className="animate-marquee flex gap-x-12 px-6">
          {/* We render the list twice to create a seamless infinite loop */}
          {[...signals, ...signals].map((signal, index) => (
            <span 
              key={index} 
              className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/90"
            >
              {signal}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}