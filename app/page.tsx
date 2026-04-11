import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import { supplierProducts } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* The main navigation bar */}
      <Navbar />

      {/* Hero Section 
          - Mobile Height: 500px 
          - Tablet/Small Screen: 606px 
          - Large Desktop: 750px
      */}
      <Hero />

      {/* Features Section 
          - Fetches data from /src/data/products.ts
          - Automatically sorts "NEW" products to the front
          - Supports horizontal scroll with centered mobile cards
      */}
      <div className="mt-4 md:mt-0">
        <BestSellers products={supplierProducts} />
      </div>

      {/* Additional sections like a Footer would go here */}
    </main>
  );
}