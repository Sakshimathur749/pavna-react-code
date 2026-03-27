import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "What curriculums does Pavna School offer?",
      answer: "Pavna School offers dual academic pathways to cater to diverse learning needs. Students can choose between the Central Board of Secondary Education (CBSE) for a robust national curriculum or the Cambridge Assessment International Education (CAIE) for a global perspective."
    },
    {
      question: "Is boarding mandatory for all students?",
      answer: "While we pride ourselves on our world-class residential facilities, boarding is not mandatory for all grades. We offer Day Boarding (8 AM - 5 PM), Weekly Boarding (Mon-Fri), and Full Boarding options to provide flexibility for families."
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "To ensure personalized attention and mentorship, we maintain a strict student-teacher ratio of 1:12 across all grades. In our Early Years program, this ratio is even lower at 1:8 to support developmental needs."
    },
    {
      question: "How does the admission process work?",
      answer: "The process begins with an online enquiry or campus tour booking. Following this, there is an interaction/assessment session depending on the grade applied for. Once selected, parents can complete the documentation and fee payment to secure the seat."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange block mb-3">Clear Doubts</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none bg-white group-open:bg-brand-sky/5 transition-colors">
                <span className="font-serif text-lg font-bold text-brand-navy">{faq.question}</span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-open:bg-brand-sky/20 transition-all duration-300 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4 text-brand-sky" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2 text-sm text-gray-600 font-normal leading-relaxed group-open:bg-brand-sky/5">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-5 font-normal">Still have questions?</p>
          <a href="#" className="inline-block text-[11px] font-bold uppercase tracking-widest text-brand-navy bg-white border border-gray-200 px-6 py-3 rounded-full hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">Visit Admission Center</a>
        </div>
      </div>
    </section>
  );
}
