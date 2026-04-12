import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import GenderSlider from "@/components/GenderSlider";
import CategoryGrid from "@/components/CategoryGrid";
import BrandEditorial from "@/components/BrandEditorial"; // Import the new section
import { supplierProducts } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <div className="mt-4 md:mt-0">
        <BestSellers products={supplierProducts} />
      </div>

      <GenderSlider />

      <CategoryGrid />

      {/* The Brand Editorial Section */}
      <BrandEditorial />

      {/* Footer would follow here */}
    </main>
  );
}