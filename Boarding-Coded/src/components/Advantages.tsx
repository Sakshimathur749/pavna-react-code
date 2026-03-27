import React from 'react';
import { Trophy, Globe, Bed, Shield } from 'lucide-react';

export default function Advantages() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange block mb-3">Our Core Pillars</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight">Why Choose Pavna?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-brand-sky/10 text-brand-sky rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-500 shadow-sm">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-brand-navy">Academic Excellence</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">Consistent 100% board results with state & national toppers.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-500 shadow-sm">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-brand-navy">Global Curriculum</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">Dual pathways offering Cambridge International & CBSE.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-brand-yellow/20 text-brand-yellow rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-500 shadow-sm">
              <Bed className="w-8 h-8 text-brand-navy" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-brand-navy">Premium Boarding</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">A home away from home with world-class pastoral care.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-brand-navy/10 text-brand-navy rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-500 shadow-sm">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-3 text-brand-navy">Safe Campus</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">24/7 Security, infirmary support & GPS-enabled transport.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
