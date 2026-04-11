"use client";

import Image from "next/image";

export default function Features() {
  return (
    <section className="relative bg-white py-24 px-8 md:px-16 lg:px-24">
      <div className="w-full">
        {/* EXPLORE ALL CATEGORIES SECTION */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black">
              Explore All Categories
            </h2>
            <button className="text-[9px] uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
              See All (12+ Categories)
            </button>
          </div>
          
          {/* Scrollable Category Row */}
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {["Skin Care", "Makeup", "Hair Care", "Fragrances", "Watches", "Accessories", "Footwear"].map((cat) => (
              <div key={cat} className="min-w-[120px] group cursor-pointer">
                <div className="aspect-square bg-gray-50 rounded-sm mb-3 flex items-center justify-center border border-gray-100 group-hover:border-[#CCAA67] transition-all duration-500">
                  {/* Placeholder for Icons */}
                  <div className="w-8 h-8 opacity-20 bg-black"></div>
                </div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-center font-bold">{cat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DISCOVER PREMIER BOUTIQUES SECTION */}
        <div>
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mb-10">
            Discover Premier Boutiques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {["Zina Beauty", "Tech Haven", "Platinum Watches", "Artisan Workshop", "Gourmet Kitchen", "Urban Style"].map((boutique) => (
              <div key={boutique} className="relative group cursor-pointer overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-700">
                {/* Image Placeholder */}
                <div className="h-[280px] bg-gray-200 relative">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                {/* Boutique Info */}
                <div className="bg-black text-white p-4 text-center">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold mb-3">{boutique}</p>
                  <button className="w-full py-2 bg-[#CCAA67]/10 border border-[#CCAA67]/30 text-[#CCAA67] text-[8px] uppercase tracking-[0.2em] group-hover:bg-[#CCAA67] group-hover:text-black transition-all duration-500">
                    Visit Boutique
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}