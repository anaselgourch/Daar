"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

export default function DaarRecommends() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="py-10 px-6 md:px-20 lg:px-24 bg-white">
      
      {/* HEADER */}
      <div className="mb-10">
        <span className="text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase">
          Daar Recommend
        </span>
        <h2 className={`${playfair.className} text-4xl md:text-7xl mt-3 text-[#221E1F]`}>
          Our Current Taste.
        </h2>
      </div>

      {/* GRID: Desktop 700px height / Mobile Auto height */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:h-[700px]">

        {/* 1. FEATURED VIDEO: MAISON | HALIMA 
            Mobile height capped at 600px for better UX flow
        */}
        <div 
          onClick={() => handleNavigation('/collection/maison-halima')}
          className="relative h-[600px] md:h-full md:row-span-2 rounded-[2rem] overflow-hidden bg-gray-900 cursor-pointer group"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="/videos/portrait.mp4"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/7 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 mb-1">Featured</p>
            <h3 className="text-2xl md:text-3xl font-medium">MAISON | HALIMA</h3>
          </div>
        </div>

        {/* 2. ACCESSORIES: BELDI LEATHER BAGS */}
        <div 
          onClick={() => handleNavigation('/shop/accessories')}
          className="relative h-[400px] md:h-auto rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer group"
        >
          <Image
            src="/img/detail-1.jpg"
            alt="Beldi Leather Bags"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] uppercase tracking-widest opacity-70">Accessories</p>
            <h4 className="text-lg font-medium">Beldi Leather Bags</h4>
          </div>
        </div>

        {/* 3. JEWELLERY: AMAZIGH SILVER */}
        <div 
          onClick={() => handleNavigation('/shop/jewellery')}
          className="relative h-[400px] md:h-auto rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer group"
        >
          <Image
            src="/img/detail-2.jpg"
            alt="Amazigh Silver"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-[10px] uppercase tracking-widest opacity-70">Jewellery</p>
            <h4 className="text-lg font-medium">Amazigh Silver</h4>
          </div>
        </div>

        {/* 4. THE STORE: FOUNDRY — FÈS COLLECTIVE */}
        <div 
          onClick={() => handleNavigation('/editorial/foundry-fes')}
          className="relative h-[500px] md:h-auto md:col-span-2 rounded-[2rem] overflow-hidden bg-gray-900 cursor-pointer group"
        >
          <Image
            src="/img/detail-3.jpg"
            alt="Foundry Fès Collective"
            fill
            className="object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">The Store</p>
              <h4 className="text-2xl md:text-3xl text-white font-medium mb-2">
                Foundry — Fès Collective
              </h4>
              <p className="text-white/60 text-sm mb-6 max-w-md">
                A curated selection of contemporary Moroccan designers and local artisans.
              </p>
              <button className="bg-white text-black text-[10px] font-bold tracking-widest uppercase px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                Discover More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}