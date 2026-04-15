import React from 'react';
import { 
  LayoutDashboard, 
  BarChart2, 
  ShoppingCart, 
  ShoppingBag, 
  PieChart, 
  MessageSquare, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart2, label: 'Leaderboard' },
  { icon: ShoppingCart, label: 'order' },
  { icon: ShoppingBag, label: 'Products' },
  { icon: PieChart, label: 'Sales Report' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Settings, label: 'Settings' },
  { icon: LogOut, label: 'Sign Out' },
];

export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white flex flex-col p-6 sticky top-0 border-r border-gray-100">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <Zap className="text-white w-6 h-6 fill-current" />
        </div>
        <span className="text-2xl font-bold text-text-main">Dabang</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group",
              item.active 
                ? "bg-primary text-white shadow-lg shadow-primary/25" 
                : "text-text-muted hover:bg-gray-50 hover:text-text-main"
            )}
          >
            <item.icon className={cn(
              "w-6 h-6",
              item.active ? "text-white" : "text-text-muted group-hover:text-text-main"
            )} />
            <span className="font-medium text-lg leading-none">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Pro Card */}
      <div className="mt-auto">
        <div className="bg-gradient-to-br from-[#5d5fef] to-[#3f41b5] rounded-3xl p-6 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
             {/* Small accent graphic */}
             <div className="w-16 h-16 bg-white rounded-full -mr-8 -mt-8" />
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <h3 className="text-xl font-bold mb-2">Dabang Pro</h3>
          <p className="text-white/70 text-sm mb-5 leading-snug">
            Get access to all features on tetumbas
          </p>
          <button className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
            Get Pro
          </button>
        </div>
      </div>
    </div>
  );
};
