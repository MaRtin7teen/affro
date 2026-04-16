import React from 'react';
import { BarChart3, FileText, ShoppingCart, UserPlus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const stats = [
  {
    title: 'Total Sales',
    value: '$1k',
    change: '+8% from yesterday',
    icon: BarChart3,
    bgColor: 'bg-card-sales-bg',
    iconBg: 'bg-stat-pink',
    textColor: 'text-stat-pink',
    darkBg: 'dark:bg-[#FA5A7D]/10',
  },
  {
    title: 'Total Order',
    value: '300',
    change: '+5% from yesterday',
    icon: FileText,
    bgColor: 'bg-card-order-bg',
    iconBg: 'bg-stat-orange',
    textColor: 'text-stat-orange',
    darkBg: 'dark:bg-[#FF947A]/10',
  },
  {
    title: 'Product Sold',
    value: '5',
    change: '+1.2% from yesterday',
    icon: ShoppingCart,
    bgColor: 'bg-card-sold-bg',
    iconBg: 'bg-stat-green',
    textColor: 'text-stat-green',
    darkBg: 'dark:bg-[#3CD856]/10',
  },
  {
    title: 'New Customers',
    value: '8',
    change: '0.5% from yesterday',
    icon: UserPlus,
    bgColor: 'bg-card-customer-bg',
    iconBg: 'bg-stat-purple',
    textColor: 'text-stat-purple',
    darkBg: 'dark:bg-[#BF83FF]/10',
  },
];

export const StatsGrid = () => {
  return (
    <div className="bg-white dark:bg-dark-sidebar p-8 rounded-[2.5rem] shadow-premium dark:shadow-premium-dark mb-8 flex-1 transition-colors duration-500 border border-transparent dark:border-white/5">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h2 className="text-2xl font-bold text-text-main dark:text-dark-text tracking-tight">Today's Sales</h2>
          <p className="text-sm text-text-muted dark:text-dark-muted font-medium mt-1">Sales Summary</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 border border-gray-100 dark:border-white/10 px-5 py-2.5 rounded-2xl text-sm font-bold text-text-main dark:text-dark-text hover:bg-gray-50 dark:hover:bg-white/5 transition-all shadow-sm"
        >
          <FileText className="w-4 h-4 text-primary" /> Export
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.title}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={cn(
              "p-6 rounded-[2rem] flex flex-col transition-all duration-300 border border-transparent dark:border-white/5", 
              stat.bgColor,
              stat.darkBg
            )}
          >
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white shadow-lg", stat.iconBg)}>
              <stat.icon className="w-6 h-6 fill-current" />
            </div>
            <div className="text-3xl font-extrabold text-[#151D48] dark:text-dark-text mb-2 tracking-tight">{stat.value}</div>
            <div className="text-lg font-bold text-[#425166] dark:text-dark-muted mb-2">{stat.title}</div>
            <div className={cn("text-xs font-bold tracking-wide uppercase", stat.textColor)}>{stat.change}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
