import React, { useState } from 'react';
import { Heart, Utensils, Home, ChevronLeft, ChevronRight } from 'lucide-react';

export default function BoardingWhy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "https://i.postimg.cc/VL7t7mGL/Dorm-Room.png",
    "https://i.postimg.cc/FKhQ7Xv3/Cafeteria.png",
    "https://i.postimg.cc/DwTzdDFT/Study-Area.png",
    "https://i.postimg.cc/3Rp6BLYq/2O0A1216.jpg"
  ];

  const maxIndex = images.length - 2;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Faint Background Watermark */}
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-brand-navy">
          <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 90 C27.9 90 10 72.1 10 50 C10 27.9 27.9 10 50 10 C72.1 10 90 27.9 90 50 C90 72.1 72.1 90 50 90 Z" />
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold text-brand-navy tracking-tight mb-12 leading-[1.1]">
              A Home Away<br />From Home
            </h2>

            <div className="space-y-10">
              {/* Feature 1 */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy shrink-0 border border-gray-100 shadow-sm">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Pastoral Care</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Dedicated house parents ensuring emotional well-being and academic support around the clock.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 relative">
                {/* Dotted line connecting to image */}
                <div className="hidden lg:block absolute top-6 left-12 w-[150%] border-t border-dashed border-brand-sky -z-10"></div>
                
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy shrink-0 border border-gray-100 shadow-sm relative z-10">
                  <Utensils className="w-5 h-5" />
                </div>
                <div className="relative z-10 bg-white/90 backdrop-blur-sm pr-4 py-1">
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Nutritional Advantage</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Organic, balanced meals with specialized nutritional options available.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy shrink-0 border border-gray-100 shadow-sm">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-2">Smart Living</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Modern dormitories with air purification and biometric access control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="lg:col-span-7 relative mt-12 lg:mt-0">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden group">
              <div 
                className="flex h-full transition-transform duration-500 ease-in-out gap-4"
                style={{ transform: `translateX(calc(-${currentIndex} * (50% + 0.5rem)))` }}
              >
                {images.map((src, idx) => (
                  <div key={idx} className="w-[calc(50%-0.5rem)] h-full flex-shrink-0 rounded-2xl overflow-hidden">
                    <img 
                      src={src} 
                      alt={`Boarding facility ${idx + 1}`} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end gap-3 mt-6">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-gray-50 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-white hover:bg-brand-navy/90 transition-colors shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
