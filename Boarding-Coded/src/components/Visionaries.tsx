import React from 'react';

export default function Visionaries() {
  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-white to-[#F8F8F8]">
      <div className="container mx-auto px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">Our Leadership</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Guided by Visionary Educator</h2>
          <p className="text-base text-gray-500 font-medium">Meet the Founder and Leader Driving Excellence</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-soft border border-gray-100">
          <div className="w-full md:w-1/3 flex justify-center group">
            <div className="w-64 md:w-72 aspect-[4/5] relative rounded-[2rem] p-2 border-2 border-dashed border-gray-200 group-hover:border-brand-orange transition-colors duration-500 flex-shrink-0">
              <div className="w-full h-full overflow-hidden rounded-[1.5rem] relative">
                <img src="https://i.postimg.cc/wBxpqn3m/Gemini-Generated-Image-i7ddqni7ddqni7dd.png" 
                     className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                     alt="Shri Pawan Jain" />
                <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition duration-500"></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="font-serif text-3xl font-bold text-brand-navy mb-2">Shri Pawan Jain</h3>
            <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-6">Founder, Pavna Group</p>
            <div className="space-y-4 text-sm text-gray-600 font-medium leading-relaxed text-left">
              <p>Shri Pawan Jain, the founder of Pavna Group, began his journey with the establishment of Pavna Industries in 1971, a name that soon became recognized for its trust, quality, and excellence in the automobile sector. He believed in offering strong values and visionary leadership to the students because, for him, education is the most powerful way to serve society and shape the future of the nation.</p>
              <p>In 1998, he entered the field of education by establishing Pavna School (formerly DPS Aligarh), wanting to bring world-class education to the city. His vision is so big and continues to expand with the establishment of Mangalayatan University in 2006, DPS Civil Lines, Aligarh, in 2007, and Pavna School, Hathras, in 2014, bringing quality education to a wider community.</p>
              <p>In 2022, Pavna International School, which is based on the Cambridge Curriculum, was introduced with the goal of international-standard learning in Aligarh. Today, Pavna Group creates its own legacy in education, empowering students with knowledge, values, and skills for a global future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
