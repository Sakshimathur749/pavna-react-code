import React from 'react';
import { ShieldCheck, BookOpen, Users, TrendingUp } from 'lucide-react';

export default function FranchiseWhy() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Brand credibility",
      description: "Operate under a trusted national name from day one."
    },
    {
      icon: BookOpen,
      title: "Proven curriculum",
      description: "Pavna's LLP continuously develops and audits all learning content."
    },
    {
      icon: Users,
      title: "Training support",
      description: "Ongoing educator training so quality never slips."
    },
    {
      icon: TrendingUp,
      title: "Growth pathway",
      description: "Move between models as your capacity and ambition scale."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-brand-orange/5 rounded-r-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">The Pavna Advantage</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Why choose the Franchise Model?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Partnering with Pavna gives you the tools, support, and recognition to succeed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-brand-sky/10 rounded-full flex items-center justify-center text-brand-sky mb-6 group-hover:bg-brand-sky group-hover:text-white transition-colors">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
