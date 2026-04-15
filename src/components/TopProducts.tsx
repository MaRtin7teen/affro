import React from 'react';

const products = [
  { id: '01', name: 'Home Decor Range', popularity: 45, color: 'bg-[#0095FF]' },
  { id: '02', name: 'Disney Princess Pink Bag 18\'', popularity: 29, color: 'bg-[#00E096]' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, color: 'bg-[#C5A8FF]' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, color: 'bg-[#FFCF00]' },
];

export const TopProducts = () => {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm flex-1">
      <h3 className="text-xl font-bold text-text-main mb-8">Top Products</h3>
      <table className="w-full">
        <thead className="text-left border-b border-gray-50 uppercase text-xs font-semibold text-text-muted">
          <tr>
            <th className="pb-4 font-medium">#</th>
            <th className="pb-4 font-medium">Name</th>
            <th className="pb-4 font-medium">Popularity</th>
            <th className="pb-4 font-medium text-right">Sales</th>
          </tr>
        </thead>
        <tbody className="text-sm font-medium">
          {products.map((product) => (
            <tr key={product.id} className="group">
              <td className="py-5 text-text-muted">{product.id}</td>
              <td className="py-5 text-[#151D48]">{product.name}</td>
              <td className="py-5 pr-10">
                <div className="w-full bg-[#F4F5F7] h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${product.color}`}
                    style={{ width: `${product.popularity * 2}%` }}
                  ></div>
                </div>
              </td>
              <td className="py-5 text-right">
                <div className={`inline-block px-3 py-1 rounded-lg border text-xs font-bold ${getBorderColor(product.color)} ${getTextColor(product.color)}`}>
                  {product.popularity}%
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getBorderColor = (color: string) => {
  if (color.includes('#0095FF')) return 'border-[#0095FF]';
  if (color.includes('#00E096')) return 'border-[#00E096]';
  if (color.includes('#C5A8FF')) return 'border-[#C5A8FF]';
  if (color.includes('#FFCF00')) return 'border-[#FFCF00]';
  return 'border-gray-200';
};

const getTextColor = (color: string) => {
  if (color.includes('#0095FF')) return 'text-[#0095FF]';
  if (color.includes('#00E096')) return 'text-[#00E096]';
  if (color.includes('#C5A8FF')) return 'text-[#C5A8FF]';
  if (color.includes('#FFCF00')) return 'text-[#FFCF00]';
  return 'text-gray-600';
};
