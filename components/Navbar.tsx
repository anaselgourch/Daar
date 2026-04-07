import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-30 w-30">
            <Image 
              src="/logo_gold.png" 
              alt="Daar Logo" 
              fill 
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Navigation Links - The "Arcade" */}
        <div className="hidden md:flex items-center gap-10">
          {["Explore", "Boutiques", "Curated"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Access Portal (CTA) */}
        <div className="flex items-center gap-6">
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          
          <Link 
            href="/enter" 
            className="relative px-5 py-2 border border-white/20 text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500"
          >
            Enter Mall
            {/* Minimalist gap detail to match your logo's portal theme */}
            <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-black border-l border-b border-white/20"></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;