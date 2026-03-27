import React from 'react';

export default function FranchiseAbout() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-sky/5 rounded-l-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">About Pavna</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-8">
            Education with Passion
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Pavna combines education with passion by helping students learn, training teachers, and supporting entrepreneurs who share its vision. With a strong team handling curriculum, audits, and training, every Pavna center offers consistent quality like a national brand while maintaining a friendly, local feel.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you are an experienced entrepreneur or a first-time operator, Pavna's top proven model gives you the tools to grow with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
