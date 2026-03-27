import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const images = [
    { src: "https://i.postimg.cc/RVXFc1fn/64152da5-2979-463f-9a3f-77755787e760.jpg", label: "Architecture" },
    { src: "https://i.postimg.cc/y8jb6dwt/956b0b1e-7273-4928-a264-80f3230deb27.jpg", label: "Hostel Life" },
    { src: "https://i.postimg.cc/fbpnZydJ/a5471e8a-dc17-4eed-9c16-4a9d1460c31a.jpg", label: "Art Studio" },
    { src: "https://i.postimg.cc/nrvt3xM5/4503164b-4603-480c-9339-861b86924725.jpg", label: "Library" }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="container mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-end relative z-10">
        <div className="mb-6 md:mb-0">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-2">Visual Tour</span>
          <h2 className="font-serif text-4xl font-bold text-white tracking-tight">Captured Moments</h2>
        </div>
        <div className="flex space-x-4">
          <button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 rounded-full">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all duration-300 rounded-full">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex space-x-6 px-8 overflow-x-auto scroll-hide pb-10 relative z-10">
        {images.map((img, idx) => (
          <div key={idx} className="min-w-[300px] md:min-w-[400px] h-[350px] relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl">
            <img src={img.src} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={img.label} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy bg-white px-4 py-2 rounded-full shadow-lg">{img.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
