import React from 'react';
import { BarChart3, FileText, ShoppingCart, UserPlus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
  },
  {
    title: 'Total Order',
    value: '300',
    change: '+5% from yesterday',
    icon: FileText,
    bgColor: 'bg-card-order-bg',
    iconBg: 'bg-stat-orange',
    textColor: 'text-stat-orange',
  },
  {
    title: 'Product Sold',
    value: '5',
    change: '+1.2% from yesterday',
    icon: ShoppingCart,
    bgColor: 'bg-card-sold-bg',
    iconBg: 'bg-stat-green',
    textColor: 'text-stat-green',
  },
  {
    title: 'New Customers',
    value: '8',
    change: '0.5% from yesterday',
    icon: UserPlus,
    bgColor: 'bg-card-customer-bg',
    iconBg: 'bg-stat-purple',
    textColor: 'text-stat-purple',
  },
];

export const StatsGrid = () => {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm mb-8 flex-1">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h2 className="text-xl font-bold text-text-main">Today's Sales</h2>
          <p className="text-sm text-text-muted mt-0.5">Sales Summery</p>
        </div>
        <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-[#151D48] hover:bg-gray-50 transition-colors">
          <FileText className="w-4 h-4" /> Export
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {stats.map((stat) => (
          <div key={stat.title} className={cn("p-6 rounded-[1.5rem] flex flex-col", stat.bgColor)}>
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white", stat.iconBg)}>
              <stat.icon className="w-6 h-6 fill-current" />
            </div>
            <div className="text-2xl font-bold text-[#151D48] mb-2">{stat.value}</div>
            <div className="text-base font-semibold text-[#425166] mb-2">{stat.title}</div>
            <div className={cn("text-xs font-medium", stat.textColor)}>{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
