import React from "react";
import {
  LayoutDashboard,
  BarChart2,
  ShoppingCart,
  ShoppingBag,
  PieChart,
  MessageSquare,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BarChart2, label: "Leaderboard" },
  { icon: ShoppingCart, label: "Order" },
  { icon: ShoppingBag, label: "Products" },
  { icon: PieChart, label: "Sales Report" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Sign Out" },
];

export const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white dark:bg-dark-sidebar flex flex-col p-6 sticky top-0 border-r border-gray-100 dark:border-white/5 transition-colors duration-500">
      {/* Brand */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <motion.div
          whileHover={{ rotate: 15 }}
          className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"
        >
          <Zap className="text-white w-6 h-6 fill-current" />
        </motion.div>
        <span className="text-2xl font-bold text-text-main dark:text-dark-text tracking-tight">
          Aforro
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ x: 5 }}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden",
              item.active
                ? "bg-primary text-white shadow-xl shadow-primary/25"
                : "text-text-muted dark:text-dark-muted hover:bg-gray-50 dark:hover:bg-white/5 hover:text-text-main dark:hover:text-dark-text",
            )}
          >
            {item.active && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-primary -z-10"
              />
            )}
            <item.icon
              className={cn(
                "w-6 h-6",
                item.active
                  ? "text-white"
                  : "text-text-muted dark:text-dark-muted group-hover:text-text-main dark:group-hover:text-dark-text",
              )}
            />
            <span className="font-semibold text-base leading-none tracking-tight">
              {item.label}
            </span>
          </motion.button>
        ))}
      </nav>

      {/* Pro Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-auto"
      >
        <div className="bg-gradient-to-br from-[#5d5fef] to-[#3f41b5] rounded-3xl p-6 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <div className="w-24 h-24 bg-white rounded-full -mr-12 -mt-12" />
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
            <Zap className="text-white w-6 h-6 fill-current" />
          </div>
          <h3 className="text-xl font-bold mb-2">Aforrro Pro</h3>
          <p className="text-white/70 text-sm mb-5 leading-snug">
            Get access to all features on tetumbas
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-primary py-3 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all"
          >
            Get Pro
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
