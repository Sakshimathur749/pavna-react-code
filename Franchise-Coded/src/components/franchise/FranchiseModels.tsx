import React from 'react';
import { Building2, Handshake, Key } from 'lucide-react';

export default function FranchiseModels() {
  const models = [
    {
      icon: Building2,
      title: "Convention Franchise Model",
      badge: "Most popular",
      description: "Own and operate a fully branded Pavna center. You have to invest in land, infrastructure, and equipment while Pavna's LLP handles curriculum, audits, and training: a true comprehensive growth partnership."
    },
    {
      icon: Handshake,
      title: "Partnership Model",
      badge: null,
      description: "A collaborative arrangement in which ownership responsibilities are shared. Best for operators who want Pavna's brand power with a more flexible, efficient structure. It can evolve into a full franchise after 5 years."
    },
    {
      icon: Key,
      title: "Lease Model",
      badge: null,
      description: "Pavna leases a ready-to-work space to run operations. A low-barrier entry point that lets you participate in the ecosystem while building towards deeper ownership over time."
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-yellow block mb-3">Partnership Pathways</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">Three ways to partner with us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Choose the model that best fits your investment capacity and operational goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {models.map((model, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors relative">
              {model.badge && (
                <div className="absolute -top-3 right-6 bg-brand-yellow text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {model.badge}
                </div>
              )}
              <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange mb-6">
                <model.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{model.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold mb-8 text-center text-brand-yellow">Ownership at a Glance</h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-orange text-white">
                  <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10">Ownership Structure</th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l">Franchise Model</th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l">Partnership Model</th>
                </tr>
              </thead>
              <tbody className="bg-white/5">
                <tr>
                  <td className="p-4 border-b border-white/10 text-sm font-medium">Land, Infrastructure and Equipment</td>
                  <td className="p-4 border-b border-white/10 border-l border-white/10 text-sm text-gray-300">by Franchise Owner</td>
                  <td className="p-4 border-b border-white/10 border-l border-white/10 text-sm text-gray-300">by Franchise Owner</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-white/10 text-sm font-medium">Operations and Execution</td>
                  <td className="p-4 border-b border-white/10 border-l border-white/10 text-sm text-gray-300">by Franchise Owner</td>
                  <td className="p-4 border-b border-white/10 border-l border-white/10 text-sm text-gray-300">by Pavna Central Team (LLP)</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium">Curriculum, Audit and Training Support</td>
                  <td className="p-4 border-l border-white/10 text-sm text-gray-300">by Pavna Central Team (LLP)</td>
                  <td className="p-4 border-l border-white/10 text-sm text-gray-300">by Pavna Central Team (LLP)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
