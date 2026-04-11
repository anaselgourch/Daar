"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import React from 'react';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
});

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const categories = ["Shop All", "Best Sellers", "Perfume", "Body Mist", "Body Care", "Gifts & Sets"];

  useEffect(() => {
    // Keep 768px as the trigger for the mobile video/nav logic
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    /* Responsive Heights: 
       Mobile: 500px 
       Small Screen (md): 606px 
       Large Desktop (lg): 750px 
    */
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-[#0F0F0F]">
      
      {/* SECONDARY NAV: Disappears on scroll as it is absolute to Hero */}
      <div className="md:hidden absolute top-0 left-0 w-full z-20 overflow-x-auto no-scrollbar bg-white backdrop-blur-sm py-3 border-b border-gray-100">
        <div className="flex whitespace-nowrap px-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat} href="#" className="text-[12px] text-[#3D3638]/80 font-[320]">{cat}</Link>
          ))}
        </div>
      </div>

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={isMobile ? "/hero-mobile.mp4" : "/hero-desktop.mp4"} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/5" />

      {/* Responsive Padding: Adjusting bottom padding based on the three height states */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full w-full px-6 md:px-10 lg:px-24 pb-13 md:pb-16 lg:pb-22">
        <div className="max-w-4xl"> 
          
          <h1 className="text-white uppercase leading-[1.1] tracking-[0.26px] pb-[5px] m-0 font-semibold text-[32px] md:text-[35px] lg:text-[38px]">
            PURE SHOPPING
          </h1>

          <p className="text-white/85 text-[11px] md:text-[13px] lg:text-[14px] leading-[1] pb-[8px] font-normal">
            Top niche boutiques at the best prices.
          </p>

          <div className="mt-2">
            <button className="bg-white px-7 py-2 md:py-1.5 transition-all duration-300 hover:bg-[#221E1F] group cursor-pointer">
              <span className="text-[11px] font-normal uppercase tracking-[0.15em] text-black group-hover:text-white">
                STEP INSIDE
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}