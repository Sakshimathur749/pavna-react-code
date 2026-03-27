import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Linkedin, Instagram, Youtube, Menu } from 'lucide-react';

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsItems = [
    "Admissions for Academic Year 2026-27 are now live.",
    "Pavna School ranked #1 in district for innovation.",
    "Don't miss the upcoming Science & Art Fair."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* TIER 1: GLOBAL UTILITY BAR */}
      <div className="bg-[#f58021] text-white text-[11px] font-medium uppercase tracking-widest py-2.5 hidden md:block">
        <div className="container mx-auto px-8 flex justify-between items-center">
          {/* Left: School Update Slider */}
          <div className="flex items-center space-x-3 overflow-hidden flex-grow">
            <span className="bg-white text-[#f58021] px-2 py-0.5 rounded-sm font-bold text-[9px] animate-pulse shadow-sm z-10 flex-shrink-0">News</span>
            <div className="h-5 overflow-hidden relative w-[450px]">
              <div 
                className="flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentIndex * 20}px)` }}
              >
                {newsItems.map((item, index) => (
                  <span key={index} className="tracking-wide h-5 flex items-center whitespace-nowrap">
                    {item} <a href="#" className="font-bold underline hover:text-brand-navy transition-colors ml-1">Read More</a>
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right: Contact & Socials */}
          <div className="flex items-center space-x-8 flex-shrink-0">
            <span className="font-bold tracking-wider flex items-center">
              <Phone className="w-3 h-3 mr-2" />+91 98765 43210
            </span>
            <div className="flex space-x-4 text-xs border-l border-white/30 pl-6">
              <a href="#" className="hover:text-brand-navy transition-transform hover:scale-110 duration-300"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-brand-navy transition-transform hover:scale-110 duration-300"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:text-brand-navy transition-transform hover:scale-110 duration-300"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* TIER 2: PRIMARY MENU */}
      <nav className="bg-transparent">
        <div className="container mx-auto px-8 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <img src="https://i.postimg.cc/bvqjtjRQ/logo.png" alt="Pavna School Logo" className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-xs font-bold tracking-widest uppercase text-brand-navy">
            <div className="group relative cursor-pointer py-4">
              <Link to="/" className="hover:text-brand-orange transition-colors duration-300 border-b-2 border-transparent hover:border-brand-orange pb-1">About</Link>
            </div>
            <Link to="/" className="hover:text-brand-orange transition-colors duration-300 border-b-2 border-transparent hover:border-brand-orange pb-1">Academics</Link>
            <Link to="/boarding" className="hover:text-brand-orange transition-colors duration-300 border-b-2 border-transparent hover:border-brand-orange pb-1">Boarding</Link>
            <Link to="/" className="hover:text-brand-orange transition-colors duration-300 border-b-2 border-transparent hover:border-brand-orange pb-1">Community</Link>
            <Link to="/" className="hover:text-brand-orange transition-colors duration-300 border-b-2 border-transparent hover:border-brand-orange pb-1">News</Link>
            
            {/* CTA Button */}
            <a href="#" className="bg-brand-orange text-white px-7 py-3 rounded-full hover:bg-brand-darkOrange transition-all duration-300 transform hover:-translate-y-0.5 text-[11px] font-bold tracking-widest uppercase shadow-glow">
              Admissions Open
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-brand-navy hover:text-brand-orange transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
