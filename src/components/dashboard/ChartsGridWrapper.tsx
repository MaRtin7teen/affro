import React from 'react';
import { motion } from 'framer-motion';

interface ChartsGridWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartsGridWrapper = ({ title, children, className = "" }: ChartsGridWrapperProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bg-white dark:bg-dark-sidebar p-8 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark border border-transparent dark:border-white/5 transition-colors duration-500 ${className}`}
  >
    <h3 className="text-2xl font-bold text-text-main dark:text-dark-text mb-8 tracking-tight">{title}</h3>
    <div className="relative">
      {children}
    </div>
  </motion.div>
);
