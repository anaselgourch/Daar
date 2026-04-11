import Link from "next/link";
import Image from "next/image";
import React from 'react';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
});

const Navbar = () => {
  return (
    <nav className={`${montserrat.className} sticky top-0 w-full z-[60] bg-white`}>
      <div className="w-full h-14 flex items-center justify-between px-6 md:px-16 lg:px-24">
        <div className="flex items-center gap-14">
          <Link href="/"><Image src="/logo.png" alt="Daar Logo" width={80} height={30} priority /></Link>
          <div className="hidden md:flex items-center gap-10">
            {["Shop", "About", "Membership"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-[14px] tracking-tight text-[#221E1F] font-[520]">{item}</Link>
            ))}
          </div>
        </div>

        <div className="flex-grow md:hidden" />

        {/* RIGHT ICONS: Responsive logic applied */}
        <div className="flex items-center gap-5 md:gap-7 text-[#221E1F]">
          {/* Search: Both */}
          <button><svg className="w-5 h-5 md:w-[22px] md:h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg></button>
          
          {/* User Icon: Desktop Only */}
          <Link href="/account" className="hidden md:block">
            <svg className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
          </Link>
          
          {/* Cart: Both */}
          <button><svg className="w-5 h-5 md:w-[22px] md:h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg></button>
          
          {/* Menu Dash: Mobile Only */}
          <button className="md:hidden"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 9h16M4 15h16" /></svg></button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;