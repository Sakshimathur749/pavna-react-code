import React, { useState } from 'react';
import { Globe, TreePine, Snowflake, Monitor, Activity, Palette, Gamepad2, Utensils, ArrowRight } from 'lucide-react';

export default function BoardingFacilities() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, icon: Globe, label: "CBSE & Cambridge Curriculum" },
    { id: 2, icon: TreePine, label: "Nestled in Nature" },
    { id: 3, icon: Snowflake, label: "AC Rooms with Attached Baths" },
    { id: 4, icon: Monitor, label: "Apple-Enabled Classrooms" },
    { id: 5, icon: Activity, label: "State-of-the-Art Sports" },
    { id: 6, icon: Palette, label: "Holistic Co-Curricular" },
    { id: 7, icon: Gamepad2, label: "Entertainment Zone" },
    { id: 8, icon: Utensils, label: "Pure Vegetarian Dining" },
  ];

  const content = [
    {
      id: 1,
      title: "CBSE & Cambridge Curriculum",
      description: "Our dual-curriculum model offers the best of both worlds: the rigor of CBSE for India-focused pathways and the global recognition of Cambridge for internationally ambitious students. Both foster critical thinking and lifelong learning.",
      image: "https://i.postimg.cc/bwRppwnb/image.png"
    },
    {
      id: 2,
      title: "Premium Boarding Facilities Nestled in Nature",
      description: "Set in a serene, green campus away from city noise, our boarding facilities provide children with the calm and space they need to focus, reflect, and recharge a true home away from home.",
      image: "https://i.postimg.cc/X7Sg0j3t/Aligarh-Campus.png"
    },
    {
      id: 3,
      title: "AC Rooms with Attached Bathrooms",
      description: "Our triple-sharing air-conditioned rooms are designed for comfort, cleanliness, and camaraderie. Each room has an attached bathroom and is maintained to the highest hygiene standards year-round.",
      image: "https://i.postimg.cc/wByzJcPw/2O0A1136.jpg"
    },
    {
      id: 4,
      title: "Apple-Enabled Technology in Classrooms",
      description: "We bring the future of education to every classroom through Apple-enabled technology. Digital learning tools are seamlessly integrated to make every lesson interactive, engaging, and future-ready.",
      image: "https://i.postimg.cc/Njx9SYfK/image.png"
    },
    {
      id: 5,
      title: "State-of-the-Art Sports Facilities",
      description: "From cricket and football to indoor games and athletics, our world-class sports infrastructure ensures every child gets the opportunity to discover and nurture their athletic potential.",
      image: "https://i.postimg.cc/5N4MpMT2/image.png"
    },
    {
      id: 6,
      title: "Holistic Co-Curricular Exposure",
      description: "Art & craft, classical dance, drama, music, debate, and more — our rich co-curricular calendar ensures students graduate not just academically qualified but creatively alive and emotionally mature.",
      image: "https://i.postimg.cc/W3GQ697F/image.png"
    },
    {
      id: 7,
      title: "Entertainment Zone for Recreation",
      description: "A dedicated recreation and entertainment zone gives students healthy downtime — table tennis, board games, lounge areas, and more. Balance between study and play is fundamental to wellbeing.",
      image: "https://i.postimg.cc/XJLsYt8Q/2O0A1172.jpg"
    },
    {
      id: 8,
      title: "Pure Vegetarian Dining",
      description: "Our in-house kitchen serves freshly prepared, pure vegetarian meals three times a day — nutritionally balanced menus curated to support growing minds and bodies with wholesome, hygienic food.",
      image: "https://i.postimg.cc/HnJb1NPC/veg-dining.png"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative border-y border-gray-100">
      <div className="absolute left-0 top-0 w-1/3 h-full bg-brand-orange/5 rounded-r-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">What We Offer</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">World-Class Facilities, <br />Rooted in Purpose</h2>
          <p className="text-base text-gray-500 font-medium max-w-2xl">Every feature of our boarding campus is designed with one aim: to give your child the best possible foundation for life.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Tabs Menu */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scroll-hide snap-x">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <div 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`snap-start min-w-[280px] lg:min-w-0 cursor-pointer rounded-xl p-3.5 flex justify-between items-center transition-all duration-300 ${isActive ? 'bg-brand-orange/5 border-2 border-brand-orange shadow-md' : 'bg-white border border-gray-100 hover:border-brand-sky shadow-sm hover:shadow-md'}`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isActive ? 'bg-brand-orange text-white shadow-sm' : 'bg-brand-sky/10 text-brand-sky'}`}>
                      <tab.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-widest leading-snug transition-colors ${isActive ? 'text-brand-navy' : 'text-gray-600'}`}>
                      {tab.label}
                    </span>
                  </div>
                  <div className={`w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white flex-shrink-0 ${isActive ? 'flex' : 'hidden'}`}>
                    <ArrowRight className="w-2.5 h-2.5 -rotate-45" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="w-full lg:w-2/3 bg-white border border-gray-50 rounded-[2.5rem] shadow-soft p-8 md:p-12 relative overflow-hidden min-h-[500px]">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

            {content.map((item) => (
              <div key={item.id} className={`tab-content h-full fade-in ${activeTab === item.id ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-full items-center">
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed mb-6">{item.description}</p>
                  </div>
                  <div className="md:col-span-5 w-full h-[300px] md:h-[400px] group rounded-[2rem] overflow-hidden shadow-lg relative">
                    <img src={item.image} className="w-full h-full object-cover transition duration-1000 group-hover:scale-110" alt={item.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
