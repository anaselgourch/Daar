"use client";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const categories = [
  { name: "CLOTHES", image: "/categories/clothes.jpg", link: "/shop/clothes" },
  { name: "PERFUME", image: "/categories/perfume.jpg", link: "/shop/perfume" },
  { name: "WATCHES", image: "/categories/watches.jpg", link: "/shop/watches" },
  { name: "ACCESSORIES", image: "/categories/accessories.png", link: "/shop/accessories" },
  { name: "MAKEUP", image: "/categories/makeup.png", link: "/shop/makeup" },
  { name: "JEWELRY", image: "/categories/jewelry.jpg", link: "/shop/jewelry" },
];

export default function CategoryGrid() {
  return (
    <section className={`bg-white py-5 px-6 md:px-16 lg:px-24 pb-6 ${montserrat.className}`}>
      {/* 2 columns on mobile, 3 on tablet, 6 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={category.link}
            className="group flex flex-col items-center space-y-4"
          >
            {/* Image Container with specific luxury rounding */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-[#F9F9F9]">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Typography matches the clean luxury aesthetic */}
            <h4 className="text-[10px] md:text-[12px] font-semibold tracking-[0.2em] text-[#221E1F] text-center">
              {category.name}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
}