"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import GenderSlider from "@/components/GenderSlider";
import CategoryGrid from "@/components/CategoryGrid";
import BrandEditorial from "@/components/BrandEditorial"; 
import DaarRecommends from "@/components/DaarRecommends";
import TrustBar from "@/components/TrustBar";
import { supplierProducts } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* STICKY HEADER UNIT 
          Combining TrustBar and Navbar so they stay at the top during scroll.
          This ensures "Cash on Delivery" is always visible.
      */}
      <div className="sticky top-0 z-50">
        <TrustBar />
        <Navbar />
      </div>
      
      {/* 1. HERO SECTION 
          Cinematic entry point for the brand.
      */}
      <Hero />

      {/* 2. BEST SELLERS 
          Immediate product engagement.
      */}
      <div className="mt-4 md:mt-0">
        <BestSellers products={supplierProducts} />
      </div>

      {/* 3. GENDER SLIDER 
          High-level navigation for Femme and Homme.
      */}
      <GenderSlider />

      {/* 4. CATEGORY GRID 
          Visual breakdown of product types.
      */}
      <CategoryGrid />

      {/* 5. BRAND EDITORIAL (The "About" Story) 
          Uses about-bg.jpg for Desktop and about-bg-mobile.jpg for Phone.
          Desktop: Text centered vertically.
          Phone: Text anchored bottom-left.
      */}
      <BrandEditorial />

      {/* 6. DAAR RECOMMENDS (The "Taste" Section) 
          Editorially curated selection to show platform authority.
      */}
      <DaarRecommends />

      {/* FOOTER 
          Final site links and brand sign-off.
      */}
      <footer className="py-16 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-8">
          <div className="text-2xl font-bold tracking-tighter">Daar.</div>
          
          <nav className="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </nav>

          <div className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
            © 2026 Daar. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}