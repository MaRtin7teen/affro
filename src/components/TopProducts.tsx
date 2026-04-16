import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: '01', name: 'Home Decor Range', popularity: 45, color: 'bg-[#0095FF]', shadow: 'shadow-[#0095FF]/20' },
  { id: '02', name: 'Disney Princess Pink Bag 18\'', popularity: 29, color: 'bg-[#00E096]', shadow: 'shadow-[#00E096]/20' },
  { id: '03', name: 'Bathroom Essentials', popularity: 18, color: 'bg-[#C5A8FF]', shadow: 'shadow-[#C5A8FF]/20' },
  { id: '04', name: 'Apple Smartwatches', popularity: 25, color: 'bg-[#FFCF00]', shadow: 'shadow-[#FFCF00]/20' },
];

export const TopProducts = () => {
  return (
    <div className="bg-white dark:bg-dark-sidebar p-8 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark flex-1 transition-colors duration-500 border border-transparent dark:border-white/5">
      <h3 className="text-2xl font-bold text-text-main dark:text-dark-text mb-8 tracking-tight">Top Products</h3>
      <table className="w-full">
        <thead className="text-left border-b border-gray-50 dark:border-white/5 uppercase text-xs font-bold text-text-muted dark:text-dark-muted tracking-wider">
          <tr>
            <th className="pb-6 px-2 font-bold">#</th>
            <th className="pb-6 px-2 font-bold">Name</th>
            <th className="pb-6 px-2 font-bold">Popularity</th>
            <th className="pb-6 px-2 font-bold text-right">Sales</th>
          </tr>
        </thead>
        <tbody className="text-sm font-semibold">
          {products.map((product, index) => (
            <motion.tr 
              key={product.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group border-b border-gray-50/50 dark:border-white/5 last:border-0"
            >
              <td className="py-6 px-2 text-text-muted dark:text-dark-muted font-bold">{product.id}</td>
              <td className="py-6 px-2 text-[#151D48] dark:text-dark-text">{product.name}</td>
              <td className="py-6 px-2 pr-10">
                <div className="w-full bg-[#F4F5F7] dark:bg-white/5 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${product.popularity * 2}%` }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${product.color} ${product.shadow} shadow-lg`}
                  />
                </div>
              </td>
              <td className="py-6 px-2 text-right">
                <div className={`inline-block px-4 py-1.5 rounded-xl border-2 font-black text-[10px] uppercase tracking-widest ${getBorderColor(product.color)} ${getTextColor(product.color)} bg-white dark:bg-transparent shadow-sm`}>
                  {product.popularity}%
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getBorderColor = (color: string) => {
  if (color.includes('#0095FF')) return 'border-[#0095FF]/30';
  if (color.includes('#00E096')) return 'border-[#00E096]/30';
  if (color.includes('#C5A8FF')) return 'border-[#C5A8FF]/30';
  if (color.includes('#FFCF00')) return 'border-[#FFCF00]/30';
  return 'border-gray-200';
};

const getTextColor = (color: string) => {
  if (color.includes('#0095FF')) return 'text-[#0095FF]';
  if (color.includes('#00E096')) return 'text-[#00E096]';
  if (color.includes('#C5A8FF')) return 'text-[#C5A8FF]';
  if (color.includes('#FFCF00')) return 'text-[#FFCF00]';
  return 'text-gray-600';
};
