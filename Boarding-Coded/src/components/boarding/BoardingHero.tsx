import React from 'react';

export default function BoardingHero() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[75vh] flex items-center text-white pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="assets/Pavna Boarding Campus.webp"
          alt="Pavna Boarding Campus"
          className="absolute inset-0 w-full h-full object-cover object-[8%_center] md:object-center"
        />
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
            Where Character Is Built <br /> Alongside Academics
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 mb-10 max-w-2xl leading-relaxed hero-text-shadow drop-shadow-md">
            Pavna School Boarding Campus offers a nurturing, structured, and inspiring environment — giving every child the freedom to grow, learn, and thrive far beyond the ordinary classroom.
          </p>
        </div>
      </div>
    </section>
  );
}
