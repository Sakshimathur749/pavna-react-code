import React from 'react';
import { Presentation, BookOpen, Users, GraduationCap, Landmark } from 'lucide-react';

export default function MetricsMarquee() {
  const metrics = [
    { icon: Presentation, value: "250+", label: "Educators", color: "text-brand-orange" },
    { icon: BookOpen, value: "3000+", label: "Learners Base", color: "text-brand-sky" },
    { icon: Users, value: "2000+", label: "Happy Parents", color: "text-brand-yellow" },
    { icon: GraduationCap, value: "6000+", label: "Alumni Base", color: "text-brand-orange" },
    { icon: Landmark, value: "27+", label: "Years Legacy", color: "text-brand-sky" }
  ];

  return (
    <section className="bg-brand-navy border-b border-brand-navy overflow-hidden relative z-30 marquee-hover py-5 shadow-soft">
      <div className="absolute inset-0 banner-pattern opacity-10 pointer-events-none"></div>
      {/* Gradient fades for smooth entry/exit */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-max animate-marquee items-center relative z-0">
        {/* Group 1 */}
        <div className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12">
          {metrics.map((metric, idx) => (
            <div key={`g1-${idx}`} className="flex items-center space-x-4 group cursor-default">
              <metric.icon className={`w-8 h-8 ${metric.color} group-hover:scale-110 transition-transform`} />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white leading-none">{metric.value}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${metric.color}`}>{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Group 2 (Exact Duplicate for seamless infinite loop) */}
        <div className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12">
          {metrics.map((metric, idx) => (
            <div key={`g2-${idx}`} className="flex items-center space-x-4 group cursor-default">
              <metric.icon className={`w-8 h-8 ${metric.color} group-hover:scale-110 transition-transform`} />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white leading-none">{metric.value}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest ${metric.color}`}>{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
