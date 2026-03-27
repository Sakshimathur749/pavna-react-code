import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: "15",
      month: "Nov",
      title: "Annual Sports Day",
      time: "9:00 AM",
      location: "Main Stadium",
      color: "brand-sky"
    },
    {
      date: "30",
      month: "Nov",
      title: "Admissions Deadline",
      time: "11:59 PM",
      location: "Online Submission",
      color: "brand-orange"
    },
    {
      date: "05",
      month: "Dec",
      title: "Science & Art Fair",
      time: "10:00 AM",
      location: "Auditorium",
      color: "brand-yellow"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-gradient-to-b from-[#F8F8F8] to-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center border border-brand-lightGray/30 shadow-soft">
            <span className="text-brand-sky font-bold uppercase tracking-widest text-[11px] mb-6">Today</span>
            <span className="text-[5rem] font-serif font-bold text-brand-orange leading-none drop-shadow-sm">26</span>
            <span className="text-xl font-bold text-brand-navy mt-4 mb-8">October 2025</span>
            <a href="#" className="text-xs font-bold uppercase tracking-widest border border-brand-navy text-brand-navy px-6 py-2.5 rounded-full hover:bg-brand-navy hover:text-white transition-all duration-300">Full Calendar</a>
          </div>
          
          <div className="lg:col-span-2 pl-0 lg:pl-10 flex flex-col justify-center">
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-brand-navy">Upcoming Events</h3>
            
            {events.map((event, idx) => (
              <div key={idx} className="group bg-white border border-gray-100 rounded-2xl p-5 mb-4 flex items-center hover:shadow-soft transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                <div className={`text-center min-w-[70px] mr-6 bg-${event.color}/10 rounded-xl p-3`}>
                  <div className={`text-2xl font-serif font-bold text-${event.color} group-hover:text-brand-navy transition-colors`}>{event.date}</div>
                  <div className={`text-[10px] font-bold uppercase tracking-widest text-${event.color} group-hover:text-brand-navy transition-colors`}>{event.month}</div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-serif text-xl font-bold text-brand-navy mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-500 font-medium flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" /> {event.time} &nbsp;&bull;&nbsp; {event.location}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
