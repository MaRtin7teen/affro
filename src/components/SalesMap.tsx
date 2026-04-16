import React from 'react';
import { motion } from 'framer-motion';

export const SalesMap = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-dark-sidebar p-8 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark flex-1 transition-colors duration-500 border border-transparent dark:border-white/5 h-full flex flex-col"
    >
      <h3 className="text-2xl font-bold text-text-main dark:text-dark-text mb-8 tracking-tight shrink-0">Sales Mapping by Country</h3>
      
      <div className="relative flex-1 bg-[#f8faff] dark:bg-dark-bg/50 rounded-3xl overflow-hidden border border-gray-50 dark:border-white/5 shadow-inner">
        {/* Aspect ratio container for map and pins */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-full h-full max-w-[600px] max-h-[300px] aspect-[2/1]">
            <img 
               src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
               alt="World Map" 
               className="w-full h-full object-contain opacity-20 dark:opacity-10 grayscale invert dark:invert-0"
            />
            
            {/* US Marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: 'spring' }}
              style={{ top: '28%', left: '18%' }}
              className="absolute w-5 h-5 bg-[#FFCF00] rounded-full shadow-[0_0_15px_rgba(255,207,0,0.6)] border-2 border-white dark:border-dark-bg animate-pulse"
            />
            {/* Europe Marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, type: 'spring' }}
              style={{ top: '22%', left: '46%' }}
              className="absolute w-4 h-4 bg-[#0095FF] rounded-full shadow-[0_0_15px_rgba(0,149,255,0.6)] border-2 border-white dark:border-dark-bg"
            />
            {/* Asia Marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, type: 'spring' }}
              style={{ top: '32%', left: '72%' }}
              className="absolute w-5 h-5 bg-[#00E096] rounded-full shadow-[0_0_15px_rgba(0,224,150,0.6)] border-2 border-white dark:border-dark-bg"
            />
            {/* Brazil Marker */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, type: 'spring' }}
              style={{ top: '65%', left: '32%' }}
              className="absolute w-4 h-4 bg-[#FF5B5B] rounded-full shadow-[0_0_15px_rgba(255,91,91,0.6)] border-2 border-white dark:border-dark-bg"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 justify-center shrink-0">
         <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFCF00] shadow-[0_0_8px_rgba(255,207,0,0.5)]"></div>
            <span className="text-[11px] font-bold text-text-muted dark:text-dark-muted uppercase tracking-widest">North America</span>
         </div>
         <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0095FF] shadow-[0_0_8px_rgba(0,149,255,0.5)]"></div>
            <span className="text-[11px] font-bold text-text-muted dark:text-dark-muted uppercase tracking-widest">Europe</span>
         </div>
         <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00E096] shadow-[0_0_8px_rgba(0,224,150,0.5)]"></div>
            <span className="text-[11px] font-bold text-text-muted dark:text-dark-muted uppercase tracking-widest">Asia</span>
         </div>
         <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5B5B] shadow-[0_0_8px_rgba(255,91,91,0.5)]"></div>
            <span className="text-[11px] font-bold text-text-muted dark:text-dark-muted uppercase tracking-widest">Latin America</span>
         </div>
      </div>
    </motion.div>
  );
};
