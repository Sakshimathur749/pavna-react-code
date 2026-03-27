import React, { useState } from 'react';
import { BookOpen, University, Globe, Monitor, Palette, Activity, Sprout, Presentation, ArrowRight } from 'lucide-react';

export default function LearningPath() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, icon: BookOpen, label: "CBSE & Cambridge" },
    { id: 2, icon: University, label: "CBSE curriculum" },
    { id: 3, icon: Globe, label: "Cambridge curriculum" },
    { id: 4, icon: Monitor, label: "Apple-Enabled Technology" },
    { id: 5, icon: Palette, label: "Co-Curricular Exposure" },
    { id: 6, icon: Activity, label: "State-of-the-Art Sports" },
    { id: 7, icon: Sprout, label: "Holistic Development" },
    { id: 8, icon: Presentation, label: "Teaching Faculty" },
  ];

  const content = [
    {
      id: 1,
      tags: [{ text: "Cambridge", color: "sky" }, { text: "CBSE", color: "orange" }],
      title: "CBSE & Cambridge Curriculum",
      description: "Pavna believes every child deserves to get access to the top academic environment. With this goal, we offer a dual curriculum of CBSE and Cambridge, placing Pavna among the top international boarding schools in Uttar Pradesh, offering students and their families the option that best aligns with their goals.",
      image: "https://i.postimg.cc/cJDv7VzZ/image-2733.png"
    },
    {
      id: 2,
      tags: [{ text: "Aligarh", color: "sky" }, { text: "Hathras", color: "orange" }],
      title: "CBSE curriculum",
      description: "The CBSE curriculum does not prioritize rote learning, as it builds deep clarity of concept, offers practical exposure, further develops analytical thinking, and prepares students for national competitive examinations like JEE and NEET. It emphasizes structured logical reasoning, and strong foundational learning skills from an early age that make a strong foundation for the future.",
      image: "https://i.postimg.cc/fRP4xCv1/image-2733.png"
    },
    {
      id: 3,
      tags: [{ text: "Sasni", color: "sky" }],
      title: "Cambridge curriculum",
      description: "The Cambridge curriculum, recognized globally, offers a developing environment and introduces an international perspective right within the classroom. Students engage with curricula that enhance their communication skills and develop independent research and critical evaluation.",
      image: "https://i.postimg.cc/Y0DRJnjL/Frame-2147225493.png"
    },
    {
      id: 4,
      tags: [{ text: "Cambridge", color: "sky" }, { text: "Sasni", color: "orange" }],
      title: "Apple-Enabled Technology",
      description: "We are one of the top residential schools, where every classroom is fully Apple-enabled. We provide iPads from Apple-certified teachers and use advanced digital tools to build an environment more engaging and interactive for the students. Instead of rote learning, students get to learn new skills such as creative thinking and communication skills that help them for the future.",
      image: "https://i.postimg.cc/13hwf1xX/ac3b09ea-3809-4c08-a599-76b73faa20e7.jpg"
    },
    {
      id: 5,
      tags: [{ text: "Cambridge", color: "sky" }, { text: "Sasni", color: "sky" }, { text: "CBSE", color: "orange" }, { text: "Aligarh", color: "orange" }, { text: "Hathras", color: "orange" }],
      title: "Holistic Co-Curricular Exposure",
      description: "We offer education that goes beyond textbooks, as students get opportunities to take part in co-curricular activities. All these activities help in developing new interest and building confidence in public speaking or expressing their thoughts through art. Such experiences can greatly shape the growth and future of the student.",
      image: "https://i.postimg.cc/8kxtB38K/7c49c1bb-366a-4412-9b59-1bf0d18f0315.jpg"
    },
    {
      id: 6,
      tags: [{ text: "Cambridge", color: "sky" }, { text: "Sasni", color: "sky" }, { text: "CBSE", color: "orange" }, { text: "Aligarh", color: "orange" }, { text: "Hathras", color: "orange" }],
      title: "State-of-the-Art Sports Facilities",
      description: "At Pavna, students have access to cricket and football fields, a swimming pool, basketball and tennis courts, and an indoor gym. We have skilled faculties that offer students proper coaching. Whether your child is a serious athlete or a beginner who is interested in sports, they will get the landscape and training space to do their best.",
      image: "https://i.postimg.cc/wxNhHjPm/0555b1a4-e282-412b-9344-16c49f1b5652.jpg"
    },
    {
      id: 7,
      tags: [{ text: "Cambridge", color: "sky" }, { text: "Sasni", color: "sky" }, { text: "CBSE", color: "orange" }, { text: "Aligarh", color: "orange" }, { text: "Hathras", color: "orange" }],
      title: "Holistic Development Approach",
      description: "Grades are important to get into better institutes and for future success, but at the same time, life skills are also needed. Students should learn how to handle failure, teamwork, and operations with honesty. Our approach prioritizes the overall development of students, including emotional intelligence, life skills, and responsibility toward the community.",
      image: "https://i.postimg.cc/s2Z2Sv5t/4b7ddb7a-0169-4e96-be3c-fbef2658ec32.jpg"
    },
    {
      id: 8,
      tags: [{ text: "Cambridge", color: "sky" }, { text: "Sasni", color: "sky" }, { text: "CBSE", color: "orange" }, { text: "Aligarh", color: "orange" }, { text: "Hathras", color: "orange" }],
      title: "Experience-Driven Teaching Faculty",
      description: "Teachers play an important role in the lives of students. Our teachers are the heart of Pavna. They are Cambridge and CBSE certified, trained at top global institutions and industries, and passionate about teaching, making the Pavna School ahead of others. We include a small class size so that every student gets personal attention so no one feels ignored or left behind.",
      image: "https://i.postimg.cc/bwZYcsVD/97075b2b-4f0b-4435-994b-dea85ea2e3c2.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-sky/5 rounded-l-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Offering Global-Standard Learning</h2>
          <p className="text-base text-gray-500 font-medium">A quick insight into our students' learning path</p>
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
                  className={`snap-start min-w-[260px] lg:min-w-0 cursor-pointer rounded-xl p-3.5 flex justify-between items-center transition-all duration-300 ${isActive ? 'bg-brand-orange/5 border-2 border-brand-orange shadow-md' : 'bg-white border border-gray-100 hover:border-brand-sky shadow-sm hover:shadow-md'}`}
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
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-sky/5 rounded-full blur-3xl pointer-events-none"></div>

            {content.map((item) => (
              <div key={item.id} className={`tab-content h-full fade-in ${activeTab === item.id ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 h-full items-center">
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className={`bg-brand-${tag.color}/10 text-brand-${tag.color} text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full`}>
                          {tag.text}
                        </span>
                      ))}
                    </div>
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
