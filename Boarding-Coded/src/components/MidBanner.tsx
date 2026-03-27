import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function MidBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="relative rounded-[2.5rem] shadow-2xl flex items-center min-h-[380px] md:min-h-[420px] group mt-8">
          
          {/* Background Wrapper */}
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden z-0">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" alt="Students learning" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/20 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-10"></div>
            
            <div className="absolute top-10 left-10 w-24 h-24 bg-brand-sky/30 rounded-full blur-[50px] z-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-brand-orange/30 rounded-full blur-[60px] z-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Cutout PNG Image Container */}
          <div className="hidden md:flex absolute bottom-0 right-0 lg:right-10 w-1/2 h-[120%] lg:h-[130%] z-20 pointer-events-none justify-end items-end">
            <img src="https://i.postimg.cc/d1M2KLSZ/Whats-App-Image-2026-02-26-at-3-40-10-PM-1.png" 
                 alt="Student Cutout" 
                 className="w-auto h-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] transform transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-x-2" />
          </div>

          {/* Content */}
          <div className="relative z-20 p-8 md:p-12 lg:p-16 w-full md:w-3/5 lg:w-1/2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 border border-brand-sky/30 rounded-full text-[9px] font-bold uppercase tracking-widest text-brand-sky mb-6 bg-brand-sky/10 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sky animate-pulse"></span>
              <span>Inspiring Students to Learn, Grow and Lead</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-md">
              Discover the Future of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">Learning at Pavna</span>
            </h2>
            
            <div className="space-y-2 mb-8 border-l-2 border-brand-orange pl-5 py-1">
              <p className="text-white text-sm md:text-base font-bold tracking-wide">Academic Excellence &nbsp;&bull;&nbsp; Leadership Skills</p>
              <p className="text-gray-300 text-xs md:text-sm font-medium">Understanding the path of learning at Pavna.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="group/dl inline-flex items-center justify-center bg-brand-yellow text-brand-navy pl-6 pr-2.5 py-2.5 rounded-full hover:bg-white transition-all duration-300 text-[10px] font-bold uppercase tracking-widest shadow-[0_10px_30px_-10px_rgba(255,202,5,0.6)] hover:shadow-xl transform hover:-translate-y-1">
                <span>Download Brochure</span> 
                <span className="w-8 h-8 ml-4 bg-brand-navy/10 rounded-full flex items-center justify-center group-hover/dl:bg-brand-navy group-hover/dl:text-white transition-colors duration-300">
                  <ArrowDown className="w-3.5 h-3.5 transform group-hover/dl:translate-y-0.5 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
