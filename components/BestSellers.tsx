"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
});

export default function BestSellers({ products }: { products: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // LOGIC: Alternating New -> Best Seller
  const organizeProducts = () => {
    const news = products.filter(p => p.tag === "NEW");
    const bestSellers = products.filter(p => p.tag === "BEST SELLER");
    const others = products.filter(p => p.tag !== "NEW" && p.tag !== "BEST SELLER");
    
    const ordered: any[] = [];
    for (let i = 0; i < 2; i++) {
      if (news[i]) ordered.push(news[i]);
      if (bestSellers[i]) ordered.push(bestSellers[i]);
    }
    return [...ordered, ...news.slice(2), ...bestSellers.slice(2), ...others];
  };

  const sortedProducts = organizeProducts();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.product-card') as HTMLElement;
      const cardWidth = card?.clientWidth || 320;
      const gap = 16; 
      const scrollAmount = cardWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-8 px-6 md:px-16 lg:px-24 relative">
      <div className="flex justify-between items-end pb-2 mb-4">
        <h2 className="text-[18px] font-bold uppercase tracking-widest text-[#221E1F]">Best Sellers</h2>
        <Link href="/shop" className="text-[13px] tracking-tight text-[#221E1F] font-[500] underline">
          Shop All
        </Link>
      </div>

      {/* The group class is now on the container holding both the cards and arrows. 
          The arrows use 'group-hover:opacity-100' to trigger when ANY card inside is hovered.
      */}
      <div className="relative group">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-[-25px] top-[40%] z-30 bg-[#E7E5E2] backdrop-blur-md w-8 h-8 rounded-full items-center justify-center shadow-sm cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-[#221E1F]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-[-25px] top-[40%] z-30 bg-[#E7E5E2] backdrop-blur-md w-8 h-8 rounded-full items-center justify-center shadow-sm cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-[#221E1F]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 5l7 7-7 7"/></svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card min-w-[85%] md:min-w-[320px] lg:min-w-[24%] snap-center md:snap-start flex flex-col mx-auto cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] bg-[#F3F3F3] overflow-hidden mb-[-4px]">
        {product.tag && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 z-10">
            <span className="text-[8px] font-bold tracking-widest text-black uppercase">{product.tag}</span>
          </div>
        )}
        
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className={`object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {product.hoverImage && (
          <Image 
            src={product.hoverImage} 
            alt={`${product.name} hover`} 
            fill 
            className={`object-cover transition-opacity duration-700 ease-in-out absolute inset-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
      </div>

      <div className="mt-4 flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-[13px] font-bold uppercase tracking-tight text-[#221E1F]">{product.name}</h3>
        <p className="text-[12px] text-gray-500 mt-0.5 line-clamp-1">{product.description}</p>
        
        <button className="mt-4 w-full border border-black py-2.5 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
          <span className="text-[12px] font-[550]  tracking-[0.2em]">
            ADD • {product.price}
            {product.originalPrice && (
              <span className="ml-2 line-through opacity-50 font-normal">{product.originalPrice}</span>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}