import React from 'react';

export default function LeadersAndGuests() {
  const guests = [
    { name: "Dr. A.P.J. Abdul Kalam", title: "Former President", image: "https://i.postimg.cc/Cx9qWy7Y/A-P-J-Abdul-Kalam-in-2008.jpg" },
    { name: "Sudha Murthy", title: "Author & Philanthropist", image: "https://i.postimg.cc/YCtr0dS1/0-Dr5X4k-OZHar3nnkf.png" },
    { name: "Kapil Dev", title: "Cricketing Legend", image: "https://i.postimg.cc/fR7shmjk/download.webp" },
    { name: "Indra Nooyi", title: "Business Executive", image: "https://i.postimg.cc/fTmyJ3jg/Nooyi-Indra.webp" }
  ];

  return (
    <section className="py-24 bg-[#F8F8F8] border-b border-gray-200">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">Visionaries & Visitors</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight">Leadership & Luminaries</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-[2rem] shadow-soft group hover:-translate-y-2 transition duration-500 border border-transparent hover:border-brand-sky/20">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-full border-[6px] border-brand-sky/10 mb-6 md:mb-0 md:mr-8 shadow-inner">
              <img src="https://i.postimg.cc/tRcWhjHt/IMG.jpg" className="w-full h-full object-cover transition duration-700 group-hover:scale-150" alt="Chairman" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-1">Swapnil jain</h3>
              <span className="inline-block bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Chairman</span>
              <p className="text-sm text-gray-500 font-medium leading-relaxed italic border-l-2 border-brand-orange pl-4 ml-4 md:ml-0 md:pl-4">"Our mission is to create a sanctuary of learning where tradition meets innovation."</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-[2rem] shadow-soft group hover:-translate-y-2 transition duration-500 border border-transparent hover:border-brand-sky/20">
            <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-full border-[6px] border-brand-sky/10 mb-6 md:mb-0 md:mr-8 shadow-inner">
              <img src="https://i.postimg.cc/GpRpkM2S/IMG.jpg" className="w-full h-full object-cover transition duration-700 group-hover:scale-150" alt="Principal" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-1">Aarti Sahani</h3>
              <span className="inline-block bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Principal</span>
              <p className="text-sm text-gray-500 font-medium leading-relaxed italic border-l-2 border-brand-orange pl-4 ml-4 md:ml-0 md:pl-4">"We nurture not just scholars, but compassionate leaders ready for the global stage."</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-lightGray/40 pt-16">
          <div className="flex justify-between items-end mb-10">
            <h3 className="font-serif text-3xl font-bold text-brand-navy">Distinguished Guests</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guests.map((guest, idx) => (
              <div key={idx} className="group relative overflow-hidden h-72 bg-brand-navy rounded-3xl shadow-md">
                <img src={guest.image} className="w-full h-full object-cover transition duration-1000 group-hover:scale-110 group-hover:opacity-80" alt={guest.name} />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-white font-serif text-base font-bold block mb-1">{guest.name}</span>
                  <span className="text-[9px] text-brand-yellow uppercase tracking-widest">{guest.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
