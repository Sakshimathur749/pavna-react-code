import React from 'react';

export default function LifeAtPavna() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">Campus Life</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-6">Beyond Textbooks</h2>
          <p className="text-base text-gray-500 font-normal leading-relaxed">Education happens everywhere. From the robotics lab to the football field, every corner is a learning space.</p>
        </div>
      </div>
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[650px]">
        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-brand-navy rounded-3xl shadow-soft">
          <img src="https://i.postimg.cc/3NPLGyXt/16.jpg" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" alt="Sports" />
          <div className="absolute bottom-10 left-10 text-white z-10">
            <h4 className="font-serif text-3xl font-bold mb-2 shadow-black drop-shadow-md">Sports & Athletics</h4>
            <p className="text-[12px] font-bold uppercase tracking-widest text-brand-yellow">Building character</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent"></div>
        </div>
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-brand-navy rounded-3xl shadow-soft">
          <img src="https://i.postimg.cc/nrQ2nHyz/11.jpg" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" alt="Robotics" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="text-white text-[11px] font-bold uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full backdrop-blur-md">Robotics</span>
          </div>
        </div>
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-brand-navy rounded-3xl shadow-soft">
          <img src="https://i.postimg.cc/9XG1gfYS/2.jpg" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" alt="Classroom" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
          <div className="absolute bottom-6 left-6 z-10">
            <span className="text-white text-[11px] font-bold uppercase tracking-widest border border-white/50 px-4 py-2 rounded-full backdrop-blur-md">Academics</span>
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-brand-navy rounded-3xl shadow-soft">
          <img src="https://i.postimg.cc/BncYv618/9c432a1a-f998-486f-89b1-558e9db748d2.jpg" className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" alt="Arts" />
          <div className="absolute bottom-8 left-8 text-white z-10">
            <h4 className="font-serif text-2xl font-bold mb-1 shadow-black drop-shadow-md">Arts & Culture</h4>
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-yellow">Expressing Creativity</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
