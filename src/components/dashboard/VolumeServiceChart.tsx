import React from 'react';
import { ChartsGridWrapper } from './ChartsGridWrapper';
import { motion } from 'framer-motion';

export const VolumeServiceChart = () => (
  <ChartsGridWrapper title="Volume vs Service Level">
    <div className="flex-1 flex items-end justify-between gap-2 px-1 min-h-[180px]">
      {[20, 50, 30, 80, 40, 60, 45, 90, 55, 75].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative h-full justify-end">
          {/* Volume Bar (Background/Secondary) */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.05 }}
            className="w-full max-w-[12px] bg-[#0095FF]/20 rounded-t-sm group-hover:bg-[#0095FF]/30 transition-colors"
          />
          {/* Service Bar (Foreground/Primary) */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${h * 0.6}%` }}
            transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
            className="absolute bottom-0 w-full max-w-[12px] bg-[#00E096] rounded-t-sm shadow-[0_0_12px_rgba(0,224,150,0.4)] z-10"
          />
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-center gap-6 border-t border-gray-100 dark:border-white/5 pt-6 shrink-0">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#0095FF]/40"></div>
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
