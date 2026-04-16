import React from 'react';
import { motion } from 'framer-motion';

export const SalesMap = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-dark-sidebar p-8 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark flex-1 transition-colors duration-500 border border-transparent dark:border-white/5"
    >
      <h3 className="text-2xl font-bold text-text-main dark:text-dark-text mb-8 tracking-tight">Sales Mapping by Country</h3>
      <div className="relative flex items-center justify-center h-[200px] bg-[#f8faff] dark:bg-dark-bg/50 rounded-3xl overflow-hidden p-4 border border-gray-50 dark:border-white/5 shadow-inner">
        {/* Semi-realistic mock world map using simplified paths or an image */}
        <img 
           src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
           alt="World Map" 
           className="w-full h-full object-contain opacity-20 dark:opacity-10 grayscale invert dark:invert-0"
        />
        
        {/* Highlighted regions as absolute positioned elements or SVG overlays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center px-10">
           {/* US Marker */}
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1, type: 'spring' }}
             className="absolute top-[30%] left-[20%] w-5 h-5 bg-[#FFCF00] rounded-full shadow-[0_0_15px_rgba(255,207,0,0.6)] border-2 border-white dark:border-dark-bg animate-pulse"
           />
           {/* Europe Marker */}
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.2, type: 'spring' }}
             className="absolute top-[25%] left-[45%] w-4 h-4 bg-[#0095FF] rounded-full shadow-[0_0_15px_rgba(0,149,255,0.6)] border-2 border-white dark:border-dark-bg"
           />
           {/* Asia Marker */}
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.4, type: 'spring' }}
             className="absolute top-[35%] left-[70%] w-5 h-5 bg-[#00E096] rounded-full shadow-[0_0_15px_rgba(0,224,150,0.6)] border-2 border-white dark:border-dark-bg"
           />
           {/* Brazil Marker */}
           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 1.6, type: 'spring' }}
             className="absolute top-[65%] left-[30%] w-4 h-4 bg-[#FF5B5B] rounded-full shadow-[0_0_15px_rgba(255,91,91,0.6)] border-2 border-white dark:border-dark-bg"
           />
        </div>
      </div>
      
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
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
