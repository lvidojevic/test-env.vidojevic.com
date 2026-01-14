"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down (only hide if scrolled more than 50px)
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-36"
      }`}
    >
      <div className="container rounded-full bg-slate-100 px-8 py-3 flex h-16 items-center justify-between gap-8 shadow-lg">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-black flex-shrink-0">
          LV
        </Link>

        {/* Navigation Links - Centered */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="text-black hover:text-gray-600 transition-colors">Home</Link>
          <Link href="/services" className="text-black hover:text-gray-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="text-black hover:text-gray-600 transition-colors">Portfolio</Link>
          <Link href="/cv" className="text-black hover:text-gray-600 transition-colors">CV</Link>
          <Link href="/about" className="text-black hover:text-gray-600 transition-colors">About</Link>
          <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">Contact</Link>
        </nav>

        {/* Contact CTA Button - Pill Shaped */}
        <Link 
          href="/contact" 
          className="flex-shrink-0 px-6 py-2 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          get in touch
        </Link>
      </div>
    </header>
  );
}
