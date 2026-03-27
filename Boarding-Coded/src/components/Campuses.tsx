import React from 'react';
import { Leaf, Monitor, Globe, ArrowRight, Calendar, GraduationCap, Award, University, Building, Trophy } from 'lucide-react';

export default function Campuses() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F8F8] to-white border-y border-brand-lightGray/30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Discover, Decide, Thrive</h2>
          <p className="text-lg text-gray-500 font-medium">Explore Our Campuses.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Card 1: Sasni Campus */}
          <div className="bg-white rounded-[2rem] p-3 shadow-soft hover:shadow-float transition-all duration-500 group flex flex-col">
            <div className="w-full h-48 overflow-hidden rounded-[1.5rem] relative mb-6">
              <img src="https://i.postimg.cc/Qd6wjC7k/BG3.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Sasni Campus" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-sm">Sasni</span>
              </div>
            </div>
            <div className="px-5 pb-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                <span className="font-bold text-lg text-brand-navy block mb-2 leading-tight">Pavna School <br/><span className="text-brand-orange text-sm">(Cambridge International)</span></span> 
                Explore a future-ready campus designed to nurture young minds in Sasni.
              </p>
              <div className="flex flex-col space-y-3 mb-8 flex-grow">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky flex-shrink-0 group-hover:bg-brand-sky group-hover:text-white transition-colors"><Leaf className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">16-acre green, pollution-free campus</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky flex-shrink-0 group-hover:bg-brand-sky group-hover:text-white transition-colors"><Monitor className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">Apple Distinguished School (ADS)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky flex-shrink-0 group-hover:bg-brand-sky group-hover:text-white transition-colors"><Globe className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">Cambridge curriculum</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-brand-lightGray/40 pt-5 mt-auto">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wide flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse mr-2"></span> Open</span>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-lightGray flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all transform group-hover:-rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Hathras Campus */}
          <div className="bg-white rounded-[2rem] p-3 shadow-soft hover:shadow-float transition-all duration-500 group flex flex-col">
            <div className="w-full h-48 overflow-hidden rounded-[1.5rem] relative mb-6">
              <img src="https://i.postimg.cc/Kcg9CQQ8/BG.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Hathras Campus" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-sm">Hathras</span>
              </div>
            </div>
            <div className="px-5 pb-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                <span className="font-bold text-lg text-brand-navy block mb-2 leading-tight">Pavna School <br/><span className="text-brand-sky text-sm">(CBSE)</span></span> 
                Discover a vibrant learning environment at our spacious Hathras campus.
              </p>
              <div className="flex flex-col space-y-3 mb-8 flex-grow">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><Calendar className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">Established 2014</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><GraduationCap className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">Nursery to XII</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><Leaf className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">14-acre green campus</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><Award className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">ISO certified</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors"><University className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">CBSE Affiliated</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-brand-lightGray/40 pt-5 mt-auto">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wide flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse mr-2"></span> Open</span>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-lightGray flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all transform group-hover:-rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Aligarh Campus */}
          <div className="bg-white rounded-[2rem] p-3 shadow-soft hover:shadow-float transition-all duration-500 group flex flex-col">
            <div className="w-full h-48 overflow-hidden rounded-[1.5rem] relative mb-6">
              <img src="https://i.postimg.cc/mk0Kf51X/BG2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt="Aligarh Campus" />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-sm">Aligarh</span>
              </div>
            </div>
            <div className="px-5 pb-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                <span className="font-bold text-lg text-brand-navy block mb-2 leading-tight">Pavna School <br/><span className="text-brand-sky text-sm">(CBSE)</span></span> 
                Experience quality education at our well-established Aligarh campus.
              </p>
              <div className="flex flex-col space-y-3 mb-8 flex-grow">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow flex-shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors"><Building className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">Founded 1998</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow flex-shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors"><Trophy className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">2x British Council’s International Dimensions in Schools (ISA) winner</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow flex-shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors"><Award className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">ISO Certified</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow flex-shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors"><University className="w-3.5 h-3.5" /></div>
                  <span className="text-[10px] font-bold text-brand-navy uppercase tracking-wide leading-snug pt-2">CBSE Affiliated</span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-brand-lightGray/40 pt-5 mt-auto">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wide flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse mr-2"></span> Open</span>
                <a href="#" className="w-10 h-10 rounded-full border border-brand-lightGray flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all transform group-hover:-rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
