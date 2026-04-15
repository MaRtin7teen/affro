import React from 'react';

export const SalesMap = () => {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm flex-1">
      <h3 className="text-xl font-bold text-text-main mb-8">Sales Mapping by Country</h3>
      <div className="relative flex items-center justify-center h-[200px] bg-[#f8faff] rounded-2xl overflow-hidden p-4">
        {/* Semi-realistic mock world map using simplified paths or an image */}
        <img 
           src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
           alt="World Map" 
           className="w-full h-full object-contain opacity-20 grayscale"
        />
        
        {/* Highlighted regions as absolute positioned elements or SVG overlays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center px-10">
           {/* US Marker */}
           <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-[#FFCF00] rounded-full shadow-lg border-2 border-white animate-pulse"></div>
           {/* Europe Marker */}
           <div className="absolute top-[25%] left-[45%] w-3 h-3 bg-[#0095FF] rounded-full shadow-lg border-2 border-white"></div>
           {/* Asia Marker */}
           <div className="absolute top-[35%] left-[70%] w-4 h-4 bg-[#00E096] rounded-full shadow-lg border-2 border-white"></div>
           {/* Brazil Marker */}
           <div className="absolute top-[65%] left-[30%] w-3 h-3 bg-[#FF5B5B] rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-4">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFCF00]"></div>
            <span className="text-xs font-semibold text-text-muted">North America</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0095FF]"></div>
            <span className="text-xs font-semibold text-text-muted">Europe</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00E096]"></div>
            <span className="text-xs font-semibold text-text-muted">Asia</span>
         </div>
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF5B5B]"></div>
            <span className="text-xs font-semibold text-text-muted">Latin America</span>
         </div>
      </div>
    </div>
  );
};
