import React from "react";
import { Search, ChevronDown, Bell } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white dark:bg-dark-bg/50 backdrop-blur-xl border-b border-gray-50 dark:border-white/5 sticky top-0 z-50 transition-colors duration-500">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-3xl font-bold text-text-main dark:text-dark-text tracking-tight"
      >
        Dashboard
      </motion.h1>

      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative w-96 hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-[#F9FAFB] dark:bg-dark-sidebar border-none rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-muted dark:text-dark-muted shadow-sm"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 lg:gap-10">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 border border-gray-100 dark:border-white/10">
              <img
                src="https://flagcdn.com/us.svg"
                alt="US Flag"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-bold text-[#151D48] dark:text-dark-text flex items-center gap-1 group-hover:text-primary transition-colors">
              Eng (US) <ChevronDown className="w-4 h-4" />
            </span>
          </div>

          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2.5 bg-[#FFF4DE] dark:bg-orange-500/10 rounded-xl text-[#FFA412] hover:shadow-lg transition-all"
          >
            <Bell className="w-6 h-6 fill-current" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#FF5B5B] border-2 border-white dark:border-dark-bg rounded-full"></span>
          </motion.button>

          {/* User Profile */}
          <div className="flex items-center gap-4 border-l border-gray-100 dark:border-white/5 pl-6 lg:pl-10">
            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-dark-sidebar overflow-hidden shadow-inner border border-gray-200 dark:border-white/10">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?backgroundType=gradientLinear,solid&backgroundColor=5d5fee&seed=Ryker"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold text-[#151D48] dark:text-dark-text leading-tight text-right">
                Affro
              </span>
              <span className="text-sm text-text-muted dark:text-dark-muted text-right font-medium">
                Admin
              </span>
            </div>
            <ChevronDown className="w-4 h-4 text-text-muted dark:text-dark-muted cursor-pointer hidden sm:block hover:text-primary transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};
