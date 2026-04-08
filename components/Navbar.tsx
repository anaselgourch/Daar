import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313] h-16 border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-full flex items-center justify-between relative">
        
        {/* 1. MOBILE ONLY: LEFT MENU ICON */}
        <button className="flex lg:hidden p-2 text-[#CCAA67] hover:bg-white/5 rounded-md transition-colors z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* 2. LOGO: PERFECTLY CENTERED ON MOBILE, LEFT ON DESKTOP */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:order-first z-0">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <div className="relative h-16 w-16 md:h-16 md:w-16">
              <Image 
                src="/logo_gld.png" 
                alt="Daar Logo" 
                fill 
                priority 
                sizes="200px"
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* 3. DESKTOP ONLY: SEARCH BAR (UPPERCASE) */}
        <div className="hidden lg:flex flex-grow max-w-[400px] xl:max-w-[520px] relative items-center mx-4 z-10">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg 
                className="h-4 w-4 text-gray-500 group-focus-within:text-[#CCAA67] transition-colors duration-300" 
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="SEARCH SELLERS OR PRODUCTS..." 
              className="w-full bg-[#1A1A1A] border border-gray-800 text-[9px] tracking-[0.2em] py-2.5 pl-10 pr-4 rounded-l-md focus:outline-none focus:border-[#CCAA67]/50 focus:bg-[#222] transition-all duration-300 ease-in-out text-white placeholder:text-gray-600 font-medium uppercase" 
            />
          </div>
          <button className="bg-[#CCAA67] h-[35px] px-4 rounded-r-md flex items-center justify-center hover:bg-[#b3955a] active:scale-95 transition-all duration-300">
            <svg className="h-4 w-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
        </div>

        {/* 4. DESKTOP ONLY: NAV LINKS */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10 z-10">
          {["Categories", "Offers", "Support"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-300 hover:text-white transition-colors duration-300 font-medium whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* 5. USER ACTIONS */}
        <div className="flex items-center gap-3 md:gap-8 flex-shrink-0 z-10">
          {/* LOGIN ICON - Hidden on mobile, Flex on desktop */}
          <Link 
            href="/login" 
            className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gray-300 hover:text-white transition-colors duration-300 font-medium group"
          >
            <svg 
              className="h-4 w-4 group-hover:text-[#CCAA67] transition-colors duration-300" 
              fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span>Login</span>
          </Link>
          
          {/* ACTION BUTTON - "Account" on mobile, "Sign Up" on desktop */}
          <Link 
            href="/signup" 
            className="px-3 py-1.5 md:px-5 md:py-2 border border-[#CCAA67] text-[#CCAA67] text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium rounded-md hover:bg-[#CCAA67] hover:text-black transition-all duration-500"
          >
            <span className="md:hidden">Account</span>
            <span className="hidden md:block">Sign Up</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;