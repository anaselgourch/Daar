"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const theSignature = localFont({
  src: "../fonts/Thesignature.ttf", 
  variable: "--font-signature",
});

const baseSlides = [
  {
    id: "female",
    subtitle: "Welcome To The Obsession",
    title: "FEMME",
    description: "Some call it vanity, She calls it power.",
    buttonText: "SHOP NOW",
    link: "/shop/female",
    image: "/gender/female-bg.jpg", 
  },
  {
    id: "male",
    subtitle: "Welcome To The Standard",
    title: "HOMME",
    description: "Precision. Presence. Control.",
    buttonText: "SHOP NOW",
    link: "/shop/male",
    image: "/gender/male-bg.png",
  }
];

const slides = [...baseSlides, ...baseSlides, ...baseSlides];

export default function GenderSlider() {
  const [current, setCurrent] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStart = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (current === slides.length - 2 || current === 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(current === 1 ? 3 : 2);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [current]);

  const handleManualNext = () => { setIsAutoPlaying(false); nextSlide(); };
  const handleManualPrev = () => { setIsAutoPlaying(false); prevSlide(); };

  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const distance = touchStart.current - e.changedTouches[0].clientX;
    if (distance > 50) handleManualNext();
    if (distance < -50) handleManualPrev();
    touchStart.current = null;
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 2500); 
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className={`bg-white pb-8 px-6 md:px-16 lg:px-24 relative group ${montserrat.className}`}>
      
      <div className="absolute top-0 left-0 w-full flex justify-center gap-2 z-40">
        {baseSlides.map((_, i) => (
          <div key={i} className={`h-[1.5px] w-12 transition-all duration-500 ${current % 2 === i ? "bg-black" : "bg-gray-200"}`} />
        ))}
      </div>

      <button onClick={handleManualPrev} className="hidden md:flex absolute left-[100px] top-[48%] z-50 bg-[#E7E5E2]/50 backdrop-blur-md w-8 h-8 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 19l-7-7 7-7"/></svg>
      </button>

      <button onClick={handleManualNext} className="hidden md:flex absolute right-[100px] top-[48%] z-50 bg-[#E7E5E2]/50 backdrop-blur-md w-8 h-8 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white cursor-pointer">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 5l7 7-7 7"/></svg>
      </button>

      <div className="relative overflow-hidden pt-10" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div 
          className="flex"
          style={{ 
            transform: `translateX(-${current * 100}%)`,
            transition: isTransitioning ? 'transform 1000ms cubic-bezier(0.77,0,0.175,1)' : 'none'
          }}
        >
          {slides.map((slide, index) => (
            /* CHANGE: Added flex-col-reverse for mobile, md:flex-row for desktop */
            <div key={`${slide.id}-${index}`} className="min-w-full flex flex-col-reverse md:flex-row bg-[#F9F9F9]">
              
              {/* Text Area */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12 md:py-24 text-center">
                <div className="overflow-hidden mb-[-5px] z-10">
                  <p className={`${theSignature.className} text-4xl md:text-8xl text-[#221E1F] transition-all duration-700 ${current === index ? "translate-y-0 opacity-100 animate-reveal" : "translate-y-full opacity-0"}`}>
                    {slide.subtitle}
                  </p>
                </div>
                <div className="overflow-hidden mb-1">
                  <h3 className={`text-6xl md:text-8xl font-bold text-[#221E1F] tracking-tight transition-all duration-700 delay-100 ${current === index ? "translate-y-0 opacity-100 animate-reveal" : "translate-y-full opacity-0"}`}>
                    {slide.title}
                  </h3>
                </div>
                <div className="overflow-hidden mb-8">
                  <p className={`text-gray-600 text-[14px] max-w-[400px] transition-all duration-700 delay-200 ${current === index ? "translate-y-0 opacity-100 animate-reveal" : "translate-y-full opacity-0"}`}>
                    {slide.description}
                  </p>
                </div>
                <Link href={slide.link} className={`bg-black text-white px-12 py-4 text-[11px] font-bold tracking-[0.2em] transition-all duration-700 delay-300 ${current === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  {slide.buttonText}
                </Link>
              </div>

              {/* Image Area */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[650px] overflow-hidden">
                <Image src={slide.image} alt={slide.title} fill className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-105" priority={index === 2} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}