import React from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center text-white pt-32 pb-20 overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 scale-105">
        <source src="https://www.pexels.com/download/video/5198161/" type="video/mp4" />
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Campus Background" className="absolute inset-0 w-full h-full object-cover" />
      </video>

      {/* Rich Navy Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/40 z-10"></div>

      <div className="relative z-20 container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-left pt-10">
            <div className="inline-flex items-center py-2 px-5 border border-brand-yellow/50 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 bg-brand-navy/30 text-brand-yellow backdrop-blur-md shadow-lg">
              <Star className="w-3 h-3 mr-2" /> Admissions Open 2026-27
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-medium mb-6 leading-tight tracking-tight hero-text-shadow">
              Nurturing Future Leaders <br /> Through Holistic Education
            </h1>
            <p className="text-lg md:text-xl font-medium text-brand-yellow mb-10 max-w-lg leading-relaxed hero-text-shadow drop-shadow-md">
              Learn, Discover, Thrive.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#" className="bg-gradient-to-r from-brand-orange to-brand-darkOrange text-white px-9 py-4 rounded-full hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 text-xs uppercase tracking-widest font-bold text-center border border-brand-orange">
                Apply Now
              </a>
              <a href="#" className="bg-white/10 backdrop-blur-sm border border-white/50 text-white px-9 py-4 rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300 transform hover:-translate-y-1 text-xs uppercase tracking-widest font-bold text-center shadow-lg">
                Virtual Tour
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="glass-panel text-brand-black p-6 md:p-8 rounded-[1.5rem] max-w-sm w-full transition-transform duration-500 hover:scale-[1.02]">
              <div className="mb-5 pb-4 border-b border-brand-gray/30">
                <h3 className="font-serif text-xl font-bold text-brand-navy">Enquire Now</h3>
                <p className="text-xs font-medium text-gray-500 mt-1">Request a callback from admissions.</p>
              </div>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input type="text" className="w-full bg-transparent border-b-2 border-brand-gray/40 px-0 py-2 focus:outline-none focus:border-brand-sky text-[13px] font-medium text-brand-black placeholder-gray-400 transition-colors" placeholder="Student Name" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative group">
                    <input type="tel" className="w-full bg-transparent border-b-2 border-brand-gray/40 px-0 py-2 focus:outline-none focus:border-brand-sky text-[13px] font-medium text-brand-black placeholder-gray-400 transition-colors" placeholder="Phone Number" />
                  </div>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-b-2 border-brand-gray/40 px-0 py-2 focus:outline-none focus:border-brand-sky text-[13px] font-medium text-brand-navy cursor-pointer transition-colors">
                      <option>Select Grade</option>
                      <option>KG - 5</option>
                      <option>6 - 10</option>
                      <option>11 - 12</option>
                    </select>
                  </div>
                </div>
                <div className="relative group">
                  <input type="email" className="w-full bg-transparent border-b-2 border-brand-gray/40 px-0 py-2 focus:outline-none focus:border-brand-sky text-[13px] font-medium text-brand-black placeholder-gray-400 transition-colors" placeholder="Email Address" />
                </div>
                <button type="submit" className="w-full bg-brand-navy text-white py-3.5 mt-2 rounded-xl hover:bg-brand-orange transition-colors duration-300 text-[11px] font-bold uppercase tracking-widest shadow-lg hover:shadow-glow">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
