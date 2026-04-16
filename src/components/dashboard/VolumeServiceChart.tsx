import React from 'react';
import { ChartsGridWrapper } from './ChartsGridWrapper';
import { motion } from 'framer-motion';

export const VolumeServiceChart = () => (
  <ChartsGridWrapper title="Volume vs Service Level">
    <div className="h-[200px] flex items-end justify-between gap-1.5 px-2">
      {[20, 50, 30, 80, 40, 60, 45, 90, 55, 75].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className="w-full bg-[#0095FF] rounded-sm opacity-20 hover:opacity-40 transition-opacity"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h / 2}%` }}
            transition={{ duration: 1, delay: i * 0.05 + 0.5 }}
            className="w-full bg-[#00E096] rounded-sm shadow-[0_0_10px_rgba(0,224,150,0.3)]"
          />
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-center gap-6 border-t border-gray-50 dark:border-white/5 pt-8">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0095FF] shadow-[0_0_8px_rgba(0,149,255,0.4)]"></div>
        <span className="text-[11px] text-text-muted dark:text-dark-muted font-bold uppercase tracking-wider">
          Volume <b className="text-[#151D48] dark:text-dark-text ml-1">1,135</b>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00E096] shadow-[0_0_8px_rgba(0,224,150,0.4)]"></div>
        <span className="text-[11px] text-text-muted dark:text-dark-muted font-bold uppercase tracking-wider">
          Services <b className="text-[#151D48] dark:text-dark-text ml-1">635</b>
        </span>
      </div>
    </div>
  </ChartsGridWrapper>
);
