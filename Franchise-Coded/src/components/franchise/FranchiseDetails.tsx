import React, { useState } from 'react';
import { ChevronDown, Map, Layers, FileText, CheckCircle2 } from 'lucide-react';

export default function FranchiseDetails() {
  const [activeTab, setActiveTab] = useState('space');

  const tabs = [
    { id: 'space', label: 'Space & Requirements', icon: Map },
    { id: 'service', label: 'Service Portfolio', icon: Layers },
    { id: 'operational', label: 'Operational Policies', icon: FileText }
  ];

  return (
    <section id="details" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-sky block mb-3">Complete Franchise Details</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">Everything you need to know about Pavna</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From land requirements and service support to agreement terms and exit policies, a full picture for serious investors and partners.</p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 md:gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full md:w-auto flex items-center justify-between md:justify-start px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-sky hover:text-brand-sky'
              }`}
            >
              <span className="flex items-center">
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </span>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${activeTab === tab.id ? 'rotate-180' : ''}`} />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-soft p-8 md:p-12 border border-gray-100">
          
          {/* Section 1: Space & Requirements */}
          {activeTab === 'space' && (
            <div className="animate-fade-in">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Land & Building Requirements</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Pavna's phased construction approach means you don't build everything on day one. Open with Phase 1 and expand as your school grows — reducing capital risk while maintaining national brand standards.</p>
              
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-12">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10">City Tier</th>
                      <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l border-white/10">Land (min. acres)</th>
                      <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l border-white/10">Phase 1 (min. sq. ft.)</th>
                      <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l border-white/10">Phase 2 (min. sq. ft.)</th>
                      <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l border-white/10">Phase 3 (min. sq. ft.)</th>
                      <th className="p-4 font-bold text-sm uppercase tracking-wider border-b border-white/10 border-l border-white/10">Overall Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 border-b border-gray-200 text-sm font-medium text-brand-navy">Tier 1 Cities</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">2 acres</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">40,000</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">30,000</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">30,000</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm font-bold text-brand-orange">1.0 L sq. ft.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 border-b border-gray-200 text-sm font-medium text-brand-navy">Tier 2 Cities</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">3 acres</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">40,000</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">40,000</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm text-gray-600">40,000</td>
                      <td className="p-4 border-b border-gray-200 border-l border-gray-200 text-sm font-bold text-brand-orange">1.2 L sq. ft.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 text-sm font-medium text-brand-navy">Tier 3 Cities</td>
                      <td className="p-4 border-l border-gray-200 text-sm text-gray-600">4–5 acres</td>
                      <td className="p-4 border-l border-gray-200 text-sm text-gray-600">50,000</td>
                      <td className="p-4 border-l border-gray-200 text-sm text-gray-600">50,000</td>
                      <td className="p-4 border-l border-gray-200 text-sm text-gray-600">50,000</td>
                      <td className="p-4 border-l border-gray-200 text-sm font-bold text-brand-orange">1.5 L sq. ft.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Student & Territory Metrics</h3>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> Max 36 students per class section</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> Metro / A-class cities: 6–8 km catchment radius</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> B-class cities: 10–12 km catchment radius</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> Other cities: within full municipal limits</li>
              </ul>
              
              <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-xl p-6">
                <h4 className="font-bold text-brand-navy mb-2">Right of first refusal:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">If expansion potential exists within your defined catchment, you as the existing investor/promoter have the first right to open an additional Pavna school before any new partner is considered.</p>
              </div>
            </div>
          )}

          {/* Section 2: Service Portfolio */}
          {activeTab === 'service' && (
            <div className="animate-fade-in">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4">What Pavna Provides</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Investment and daily operations are handled by you. Pavna's Central Team provides structured guidance and hands-on support across every pillar of school management.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">1</span> Building & School Setup</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Guidelines on building drawings and compliance</li>
                    <li className="list-disc">Advice on school layout plans, interiors, and exteriors</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">2</span> CBSE Affiliation & Curriculum</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Assistance with NOC from State Government & CBSE affiliation</li>
                    <li className="list-disc">Document preparation and follow-up with CBSE HQ</li>
                    <li className="list-disc">One Pavna One Curriculum (OPOC) implemented across all schools</li>
                    <li className="list-disc">Priority student & staff transfers within the Pavna network</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">3</span> Academic Staff Recruitment</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Support in recruiting principals and teachers</li>
                    <li className="list-disc">Access to Pavna's database of shortlisted candidates</li>
                    <li className="list-disc">Expert-panel interviews at Core School or local city office</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">4</span> Training & Pedagogy</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">March: Induction workshops</li>
                    <li className="list-disc">June: Curriculum-based workshops</li>
                    <li className="list-disc">Winter: Principal & Senior Staff Conclave</li>
                    <li className="list-disc">Remedial workshops during school visits</li>
                    <li className="list-disc">Online subject-wise training and board meetings</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">5</span> Extra- & Co-Curricular Activities</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Personality development via sports and cultural activities</li>
                    <li className="list-disc">Inter-Pavna cultural, sports, and intellectual events</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">6</span> Marketing & Admissions</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Training for admission counsellors on key promotional points and FAQs</li>
                    <li className="list-disc">Strategies to attract and retain students long-term</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">7</span> Orientation & Annual Day</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Guidelines for parent Orientation Day</li>
                    <li className="list-disc">Planning and execution support for Annual Day and celebrations</li>
                    <li className="list-disc">Senior Pavna representative present at key events</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4 flex items-center"><span className="w-6 h-6 rounded-full bg-brand-sky/20 text-brand-sky flex items-center justify-center text-xs mr-3">8</span> Other Support & Standardisation</h4>
                  <ul className="space-y-2 text-sm text-gray-600 ml-9">
                    <li className="list-disc">Suggestive vendor list for procurement</li>
                    <li className="list-disc">Day-to-day operational guidance as needed</li>
                    <li className="list-disc">ERP system training and support</li>
                    <li className="list-disc">Textbooks, stationery, and uniforms</li>
                    <li className="list-disc">Comprehensive operations handbook for school setup and running</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Operational Policies */}
          {activeTab === 'operational' && (
            <div className="animate-fade-in">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Time Frame for School Setup</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-brand-navy mb-2 text-lg">Commitments</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The allotted time frame for setting up the school must be strictly honoured. This is a binding commitment from the date of LOI signing.</p>
                </div>
                
                <div className="pl-6 border-l-2 border-brand-orange">
                  <h4 className="font-bold text-brand-navy mb-2">Month 0-24</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">The Investor/Promoter must commence school operations within 24 months from the date of LOI / Agreement signing.</p>
                </div>

                <div className="pl-6 border-l-2 border-brand-sky">
                  <h4 className="font-bold text-brand-navy mb-2">Extension (if needed)</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">In special circumstances, the period may be extended by an additional 12 months with mutual written consent from both parties.</p>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-2">Non-compliance</h4>
                  <p className="text-red-700 text-sm leading-relaxed mb-4">Failure to commence within 24 or 36 months will render the LOI/Agreement void and cancelled. The engagement fee paid will be forfeited.</p>
                  <p className="text-red-800 text-sm font-bold">Important: The engagement fee is non-refundable if the school does not open within the agreed window. Begin regulatory approvals — especially CBSE documentation — as early as possible in your timeline.</p>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4">Student Strength & Capacity</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-brand-sky mr-2 flex-shrink-0 mt-0.5" /> Maximum 36 students per class section is the network standard.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-brand-sky mr-2 flex-shrink-0 mt-0.5" /> Overall student capacity is determined by your plot size and total school building capacity.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-brand-navy mb-4">Territory & Right of Refusal</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-brand-sky mr-2 flex-shrink-0 mt-0.5" /> Catchment zones are 6–8 km for metro, 10–12 km for B-class, and full municipal limits for other cities.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-brand-sky mr-2 flex-shrink-0 mt-0.5" /> You have the first right of refusal for any expansion within your protected zone.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Agreement & Exit */}
          {activeTab === 'agreement' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Agreement Renewal Cycle</h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> Pavna aims for perpetual collaboration with all aegis schools.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> Agreement is reviewed every 5 years based on school performance and compliance with agreement terms.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-sky mr-3 flex-shrink-0 mt-0.5" /> Pavna will provide reasonable time to cure any violations before renewal decisions are made.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Compensation Clause</h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0 mt-0.5" /> If the Investor/Promoter exits early or cancels the agreement voluntarily, a three-year educational service fee is payable to Pavna under the specified conditions of the agreement.</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-brand-orange mr-3 flex-shrink-0 mt-0.5" /> This clause protects the integrity of the network and Pavna's long-term investment in your school's setup and support.</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-6">Conditions for Cancellation or Non-Renewal</h3>
              <p className="text-gray-600 mb-6">The agreement may be cancelled or not renewed under the following circumstances:</p>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8">
                <ul className="divide-y divide-gray-100">
                  <li className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">1</span>
                    <span className="text-sm text-gray-700 mt-0.5">Misrepresentation or misleading information regarding revenue or educational service fee amounts</span>
                  </li>
                  <li className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">2</span>
                    <span className="text-sm text-gray-700 mt-0.5">Engagement in illegal activities violating Central, State, or Local laws and bylaws</span>
                  </li>
                  <li className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">3</span>
                    <span className="text-sm text-gray-700 mt-0.5">Non-payment of educational service fee on time as per the agreed schedule</span>
                  </li>
                  <li className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">4</span>
                    <span className="text-sm text-gray-700 mt-0.5">Other violations not cured or no remedial action taken within the notice period provided by Pavna</span>
                  </li>
                  <li className="p-4 flex items-start hover:bg-gray-50 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">5</span>
                    <span className="text-sm text-gray-700 mt-0.5">Investor/Promoter voluntarily exits or cancels the agreement before the review term expires</span>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-sky/10 border border-brand-sky/20 rounded-xl p-6 flex items-start">
                <CheckCircle2 className="w-6 h-6 text-brand-sky mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">In good standing?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">Partners who maintain compliance, pay service fees on time, and deliver quality education can expect every 5-year renewal to be a natural continuation — not a renegotiation from scratch.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
