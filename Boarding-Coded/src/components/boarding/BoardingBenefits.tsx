import React from 'react';

export default function BoardingBenefits() {
  const benefits = [
    { value: "2+", label: "World-class curricula: \nCBSE & Cambridge", color: "brand-sky" },
    { value: "24/7", label: "Supervised, safe & \ncaring residential life", color: "brand-orange" },
    { value: "100%", label: "Pure vegetarian, \nnutritious daily meals", color: "brand-yellow" },
    { value: "AC", label: "Triple-sharing rooms \nwith attached bathrooms", color: "brand-navy" }
  ];

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange block mb-3">Lasting Impact</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-6">The Real Benefits of Boarding <br />That Last a Lifetime</h2>
          <p className="text-base text-gray-500 font-medium">Understanding the true benefits of the Pavna school boarding campus goes beyond infrastructure. The transformation that happens when a child learns, grows, and lives in a purposefully designed environment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((b, i) => (
            <div key={i} className={`bg-white rounded-[2rem] p-8 text-center shadow-soft hover:shadow-float transition-all duration-500 group border border-transparent hover:border-${b.color}/20 transform hover:-translate-y-2`}>
              <div className={`w-20 h-20 mx-auto bg-${b.color}/10 text-${b.color} rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition duration-500 shadow-sm`}>
                <span className={`font-serif ${b.value === '24/7' ? 'text-2xl tracking-tighter' : 'text-3xl'} font-bold ${b.value === '100%' ? 'text-brand-navy' : ''}`}>{b.value}</span>
              </div>
              <h3 className="font-serif text-lg font-bold mb-3 text-brand-navy whitespace-pre-line">{b.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
