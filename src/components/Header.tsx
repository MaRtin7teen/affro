import React from 'react';
import { Search, ChevronDown, Bell } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white border-b border-gray-50">
      <h1 className="text-3xl font-bold text-text-main">Dashboard</h1>

      <div className="flex items-center gap-10">
        {/* Search Bar */}
        <div className="relative w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-[#F9FAFB] border-none rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-text-muted"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          {/* Language Selector */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <img 
                src="https://flagcdn.com/us.svg" 
                alt="US Flag" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-[#151D48] flex items-center gap-1 group-hover:text-primary transition-colors">
              Eng (US) <ChevronDown className="w-4 h-4" />
            </span>
          </div>

          {/* Notifications */}
          <button className="relative p-2.5 bg-[#FFF4DE] rounded-xl text-[#FFA412] hover:bg-orange-100 transition-colors">
            <Bell className="w-6 h-6 fill-current" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#FF5B5B] border-2 border-white rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Musfiq" 
                alt="User Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#151D48] leading-tight text-right">Musfiq</span>
              <span className="text-sm text-text-muted text-right">Admin</span>
            </div>
            <ChevronDown className="w-4 h-4 text-text-muted cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};
