import React from 'react';
import { ChartsGridWrapper } from './ChartsGridWrapper';

export const VolumeServiceChart = () => (
  <ChartsGridWrapper title="Volume vs Service Level">
    <div className="h-[200px] flex items-end justify-between gap-1.5 px-2">
      {[20, 50, 30, 80, 40, 60, 45, 90, 55, 75].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
          <div
            className="w-full bg-[#0095FF] rounded-sm opacity-20 hover:opacity-40 transition-opacity"
            style={{ height: `${h}%` }}
          ></div>
          <div
            className="w-full bg-[#00E096] rounded-sm"
            style={{ height: `${h / 2}%` }}
          ></div>
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-center gap-6 border-t border-gray-50 pt-6">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#0095FF]"></div>
        <span className="text-[10px] text-text-muted">
          Volume <b className="text-[#151D48]">1,135</b>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#00E096]"></div>
        <span className="text-[10px] text-text-muted">
          Services <b className="text-[#151D48]">635</b>
        </span>
      </div>
    </div>
  </ChartsGridWrapper>
);
