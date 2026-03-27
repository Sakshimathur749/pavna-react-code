import React from 'react';
import { Quote, Building } from 'lucide-react';

export default function BoardingTruth() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-sky/5 rounded-l-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">Setting The Record Straight</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-8 leading-tight">The Truth About <br />Boarding Schools Today</h2>
            
            <div className="space-y-6 text-sm md:text-base text-gray-600 font-normal leading-relaxed">
              <p>There are many myths about boarding schools, often surrounded by half-truths, such as the idea that they're cold, disconnected, or only available to children whose parents are unavailable, as well as various misconceptions. The truth about boarding schools, especially modern ones like Pavna, is something far more rewarding.</p>
              <p>Today's boarding school environment is different from the traditional ones. It is warm, well-structured, and deeply intentional, where children develop new skills, independence, time management, and resilience, and build deep social bonds, qualities that no part-time schooling can achieve.</p>
              <p>Research reflects that boarding students outperform their peers in academic discipline, emotional intelligence, and long-term career readiness. At Pavna School Boarding Campus, we have built a space where a child doesn't just study; they discover who they are, what they love, and how to pursue it with integrity.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-brand-yellow rounded-[2.5rem] opacity-20 blur-lg"></div>
            <div className="bg-brand-navy rounded-[2.5rem] p-10 md:p-14 text-white relative shadow-float overflow-hidden group">
              {/* Decorative bg */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[50px] pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
              
              <Quote className="w-12 h-12 text-brand-orange/40 absolute top-8 left-8" />
              <p className="font-serif text-2xl md:text-3xl font-medium leading-snug mb-10 relative z-10 pt-8 italic text-white/90">
                "A great boarding school doesn't take your child away from home. It gives them a second home, one that prepares them for the world."
              </p>
              
              <div className="flex items-center relative z-10 border-t border-white/20 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center mr-4 shadow-lg">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Pavna School Philosophy</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-sky">Core Belief</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
