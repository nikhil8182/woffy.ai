import React from 'react';
import { Check, X } from 'lucide-react';

const comparisonData = [
  { feature: 'Emotional Companionship', realPet: true, woffy: true, noPet: false },
  { feature: 'No Allergies', realPet: false, woffy: true, noPet: true },
  { feature: '24/7 Availability', realPet: false, woffy: true, noPet: false },
  { feature: 'Zero Maintenance', realPet: false, woffy: true, noPet: true },
  { feature: 'Learns Your Habits', realPet: 'Varies', woffy: true, noPet: false },
  { feature: 'Travel Friendly', realPet: false, woffy: true, noPet: true },
  { feature: 'Affordable', realPet: 'Varies', woffy: true, noPet: true },
  { feature: 'Interactive Play', realPet: true, woffy: true, noPet: false },
  { feature: 'No Housing Restrictions', realPet: false, woffy: true, noPet: true },
  { feature: 'Privacy Focused', realPet: true, woffy: true, noPet: true },
];

const Comparison = () => {
  const renderValue = (value) => {
    if (value === true) return <div className="w-8 h-8 mx-auto bg-green-100 rounded-full flex items-center justify-center"><Check className="w-5 h-5 text-green-600" /></div>;
    if (value === false) return <div className="w-8 h-8 mx-auto bg-red-100 rounded-full flex items-center justify-center"><X className="w-5 h-5 text-red-500" /></div>;
    if (value === 'Varies') return <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">Varies</span>;
    return value;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-indigo tracking-wider uppercase mb-2">Compare</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">
            How Woffy Fits Into Your Life
          </h3>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="glass-card rounded-3xl overflow-hidden shadow-2xl border-0 ring-1 ring-slate-200/50">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left text-sm font-bold text-slate-500 uppercase tracking-wider w-1/3 bg-slate-50/50">Feature</th>
                  <th className="p-6 text-center text-sm font-bold text-slate-900 uppercase tracking-wider w-1/5 bg-slate-50/50">Real Pet</th>
                  <th className="p-6 text-center text-sm font-bold text-white uppercase tracking-wider w-1/5 bg-gradient-to-r from-brand-rose to-brand-indigo relative">
                    Woffy.ai
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
                  </th>
                  <th className="p-6 text-center text-sm font-bold text-slate-500 uppercase tracking-wider w-1/5 bg-slate-50/50">No Pet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, index) => (
                  <tr key={row.feature} className={`hover:bg-slate-50/80 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                    <td className="p-5 text-sm font-semibold text-slate-700 pl-8">{row.feature}</td>
                    <td className="p-5 text-center opacity-80">{renderValue(row.realPet)}</td>
                    <td className="p-5 text-center bg-brand-rose/5 font-medium border-x border-brand-rose/10 shadow-inner">
                      {renderValue(row.woffy)}
                    </td>
                    <td className="p-5 text-center opacity-60">{renderValue(row.noPet)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

