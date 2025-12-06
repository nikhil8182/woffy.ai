import React from 'react';
import { Check, X, Minus } from 'lucide-react';

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
  { feature: 'Physical Touch', realPet: true, woffy: false, noPet: false },
  { feature: 'Unconditional Love', realPet: true, woffy: true, noPet: false },
  { feature: 'Privacy Focused', realPet: true, woffy: true, noPet: true },
];

const Comparison = () => {
  const renderValue = (value) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-red-400 mx-auto" />;
    if (value === 'Varies') return <span className="text-sm text-gray-500 font-medium">Varies</span>;
    return value;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            How Woffy Compares
          </h2>
          <p className="text-xl text-gray-500">
            See how Woffy fits into your lifestyle
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/3">Feature</th>
                <th className="p-4 text-center text-sm font-bold text-gray-900 uppercase tracking-wider w-1/5">Real Pet</th>
                <th className="p-4 text-center text-sm font-bold text-red-600 uppercase tracking-wider w-1/5 bg-red-50 rounded-t-xl">Woffy.ai</th>
                <th className="p-4 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/5">No Pet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((row, index) => (
                <tr key={row.feature} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                  <td className="p-4 text-sm font-medium text-gray-900">{row.feature}</td>
                  <td className="p-4 text-center">{renderValue(row.realPet)}</td>
                  <td className="p-4 text-center bg-red-50/30 border-x border-red-100">{renderValue(row.woffy)}</td>
                  <td className="p-4 text-center">{renderValue(row.noPet)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

