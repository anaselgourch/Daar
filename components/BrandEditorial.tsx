"use client";
import Image from "next/image";
import Link from "next/link";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function AboutConcept() {
  return (
    <section className={`relative w-full h-[85vh] md:h-[90vh] overflow-hidden ${montserrat.className}`}>
      {/* ===========================================================
        BACKGROUND IMAGE STRATEGY
        ===========================================================
      */}
      {/* MOBILE IMAGE: /about-bg-mobile.jpg */}
      {/* Shows only on small screens. Anchored bottom-center to align with model's face. */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src="/about-bg-mobile.jpg" 
          alt="The Daar Concept Mobile Portrait"
          fill
          className="object-cover object-bottom" // Anchors to the face
          priority
        />
      </div>

      {/* DESKTOP IMAGE: /about-bg.jpg */}
      {/* Shows on medium screens and up. */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/about-bg.jpg" 
          alt="The Daar Concept Full Couple"
          fill
          className="object-cover object-right" // Ensures the couple is visible on the right
          priority
        />
      </div>


      {/* ===========================================================
        GRADIENT MASK STRATEGY: LEGIBILITY
        ===========================================================
      */}
      {/* MOBILE (bg-gradient-to-b): Darkens the bottom area where text sits.
        DESKTOP (md:bg-gradient-to-r): The original left-to-right mask you provided.
      */}
      <div className="absolute inset-0 z-[1] 
        bg-gradient-to-b from-black/60 via-black/10 to-black/90 
        md:bg-gradient-to-r md:from-black/60 md:via-black/20 md:to-transparent" 
      />


      {/* ===========================================================
        OVERLAY CONTENT STRATEGY: ALIGNMENT
        ===========================================================
      */}
      {/* MOBILE (justify-end pb-12): Content starts at bottom.
        DESKTOP (md:justify-center md:pb-0): Centered vertically.
      */}
      <div className="absolute inset-0 flex flex-col items-start 
        justify-end pb-12 px-8 
        md:justify-center md:pb-0 md:px-20 lg:px-24 
        text-left z-10"
      >
        <span className="text-[10px] md:text-[12px] font-bold tracking-[0.5em] text-white/50 uppercase mb-4 md:mb-6">
          The Idea
        </span>
        
        <h2 className={`${playfair.className} 
          text-3xl md:text-5xl lg:text-7xl 
          text-white max-w-3xl leading-[1.1] mb-6 md:mb-8`
        }>
          Daar brings the best boutiques to you.
        </h2>

        {/* Removed 'w-20' constraint to let the line extend and breathe in the small mobile space. */}
        <div className="h-[1px] w-full max-w-sm bg-white/30 mb-8 md:mb-10" />

        <div className="max-w-md space-y-4 md:space-y-3">
          
          <p className="text-[12px] md:text-[14px] text-white/70 font-light tracking-wide leading-relaxed">
            
            We bring together the best products from different brands and suppliers, 
            so you don’t have to search everywhere.<br />
            Only selected items make it in, based on quality, design, and relevance.
          </p>

        </div>

        <Link 
          href="/our-idea"
          className="inline-block mt-10 md:mt-12 bg-white text-black px-12 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
        >
          Explore Our Idea
        </Link>
      </div>
    </section>
  );
}