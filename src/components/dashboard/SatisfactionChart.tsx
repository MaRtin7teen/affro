import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChartsGridWrapper } from './ChartsGridWrapper';

const satisfactionData = [
  { name: "1", thisMonth: 4000, lastMonth: 2400 },
  { name: "2", thisMonth: 3000, lastMonth: 1398 },
  { name: "3", thisMonth: 5000, lastMonth: 3800 },
  { name: "4", thisMonth: 2780, lastMonth: 3908 },
  { name: "5", thisMonth: 4890, lastMonth: 4800 },
];

export const SatisfactionChart = () => (
  <ChartsGridWrapper title="Customer Satisfaction">
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={satisfactionData}>
          <defs>
            <linearGradient id="colorSat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0095FF" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#0095FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="thisMonth"
            stroke="#0095FF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorSat)"
          />
          <Area
            type="monotone"
            dataKey="lastMonth"
            stroke="#05CD99"
            strokeWidth={3}
            fill="transparent"
            strokeDasharray="5 5"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-8 flex justify-between items-center text-center">
      <div>
        <div className="flex items-center gap-1 justify-center mb-1">
          <div className="w-2 h-2 rounded-full bg-[#0095FF]"></div>
          <p className="text-xs text-text-muted">Last Month</p>
        </div>
        <p className="text-sm font-bold text-text-main">$3,004</p>
      </div>
      <div className="w-px h-8 bg-gray-100"></div>
      <div>
        <div className="flex items-center gap-1 justify-center mb-1">
          <div className="w-2 h-2 rounded-full bg-[#05CD99]"></div>
          <p className="text-xs text-text-muted">This Month</p>
        </div>
        <p className="text-sm font-bold text-text-main">$4,504</p>
      </div>
    </div>
  </ChartsGridWrapper>
);
