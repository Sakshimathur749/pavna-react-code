import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SchoolUpdates() {
  const updates = [
    {
      date: "29 Aug 2024",
      title: "National Sports Day",
      description: "Students celebrated with fitness challenges, promoting sportsmanship in honour of legend Major Dhyan Chand.",
      campus: "Sasni Campus",
      color: "brand-sky",
      image: "https://i.postimg.cc/c4hgrqd6/13.jpg"
    },
    {
      date: "21 Aug 2024",
      title: "Culinary Arts Workshop",
      description: "Introduced students to essential life skills like teamwork and nutrition while exploring diverse global cuisines.",
      campus: "Hathras Campus",
      color: "brand-orange",
      image: "https://i.postimg.cc/SxTN2c5w/Gemini-Generated-Image-2cxp4x2cxp4x2cxp.png"
    },
    {
      date: "15 Aug 2024",
      title: "Independence Day",
      description: "Celebrated this special day with a flag-hoisting ceremony, house-wise march past, and vibrant performances.",
      campus: "Aligarh Campus",
      color: "brand-navy",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 geo-pattern opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="w-full lg:w-1/4">
            <span className="inline-block bg-brand-sky/10 text-brand-sky text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-full mb-4">
              School Updates
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Stay <br />Connected
            </h2>
            <p className="text-gray-500 mb-8">Catch up with the latest school events, activities, and milestones.</p>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="flex space-x-6 overflow-x-auto pb-10 scroll-hide snap-x">
              {updates.map((update, idx) => (
                <div key={idx} className="min-w-[320px] md:min-w-[380px] bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-soft transition-all duration-500 group flex flex-col snap-start">
                  <div className="h-60 overflow-hidden relative p-3 pb-0">
                    <img src={update.image} className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105" alt={update.title} />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`bg-${update.color}/10 text-${update.color} px-3 py-1 rounded-full text-[10px] font-bold uppercase`}>{update.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">{update.title}</h3>
                    <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-grow">
                      {update.description}
                    </p>
                    <div className="mt-auto pt-5 border-t border-gray-100 flex items-center text-brand-black">
                      <div className={`w-2 h-2 bg-${update.color} rounded-full mr-2`}></div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest text-${update.color}`}>{update.campus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3 mt-2">
              <button className="w-12 h-12 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 rounded-full shadow-sm">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-12 h-12 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 rounded-full shadow-sm">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
