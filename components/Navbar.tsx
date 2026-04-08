import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313] h-16">
      <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center gap-8">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className="relative h-20 w-20">
            <Image 
              src="/logo_gld.png" 
              alt="Daar Logo" 
              fill 
              priority 
              sizes="192px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Search Bar Area */}
        <div className="flex-grow max-w-2xl relative flex items-center">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search sellers or products..." 
              // Applied style to input placeholder and text
              className="w-full bg-[#1A1A1A] border border-gray-800 text-[10px] uppercase tracking-[0.2em] py-2 pl-10 pr-4 rounded-l-md focus:outline-none focus:border-[#CCAA67] transition-colors text-white placeholder:text-gray-600 font-medium"
            />
          </div>
          <button className="bg-[#CCAA67] h-[35px] px-4 rounded-r-md flex items-center justify-center hover:bg-[#b3955a] transition-colors">
            <svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Categories", "Offers", "Support"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-8 flex-shrink-0">
          <Link href="/login" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-300 hover:text-white transition-colors font-medium">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Login</span>
          </Link>
          
          <Link 
            href="/signup" 
            className="px-5 py-2 border border-[#CCAA67] text-[#CCAA67] text-[10px] uppercase tracking-[0.3em] font-medium rounded-md hover:bg-[#CCAA67] hover:text-black transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;