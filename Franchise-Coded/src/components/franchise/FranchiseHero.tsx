import React from 'react';

export default function FranchiseHero() {
  return (
    <section className="relative min-h-[75vh] flex items-center text-white pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://i.postimg.cc/50P6gyRm/Chat-GPT-Image-Feb-24-2026-02-51-27-PM-jpg.jpg" alt="Pavna Franchise" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(32, 26, 91, 0.95) 0%, rgba(32, 26, 91, 0.80) 50%, rgba(32, 26, 91, 0.30) 100%)',
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-8">
        <div className="max-w-3xl text-left pt-10">
          <h1 className="font-serif text-4xl md:text-6xl font-medium mb-6 leading-tight tracking-tight hero-text-shadow">
            Build Something <br /> Meaningful with Pavna
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 mb-10 max-w-2xl leading-relaxed hero-text-shadow drop-shadow-md">
            Pavna is more than an institution; it is rooted in purpose-driven education and has spent years building a curriculum framework, operational playbook, and a support ecosystem that partners can thrive in from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
