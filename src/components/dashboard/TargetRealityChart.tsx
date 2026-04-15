import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { ChartsGridWrapper } from './ChartsGridWrapper';

const targetData = [
  { name: "Jan", reality: 8, target: 12 },
  { name: "Feb", reality: 10, target: 15 },
  { name: "Mar", reality: 12, target: 18 },
  { name: "Apr", reality: 11, target: 14 },
  { name: "May", reality: 15, target: 20 },
  { name: "Jun", reality: 18, target: 24 },
  { name: "Jul", reality: 14, target: 19 },
];

export const TargetRealityChart = () => (
  <ChartsGridWrapper title="Target vs Reality">
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={targetData}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#96A5B8", fontSize: 10 }}
          />
          <Bar
            dataKey="reality"
            fill="#4AB58E"
            radius={[3, 3, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="target"
            fill="#FFCF00"
            radius={[3, 3, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="mt-6 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E2FFF3] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#4AB58E] rounded-sm"></div>
          </div>
          <div>
            <p className="text-xs font-bold text-[#151D48]">Reality Sales</p>
            <p className="text-[10px] text-text-muted">Global</p>
          </div>
        </div>
        <p className="text-xs font-bold text-[#27AE60]">8.823</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FFF4DE] flex items-center justify-center">
            <div className="w-4 h-4 bg-[#FFCF00] rounded-sm"></div>
          </div>
          <div>
            <p className="text-xs font-bold text-[#151D48]">Target Sales</p>
            <p className="text-[10px] text-text-muted">Commercial</p>
          </div>
        </div>
        <p className="text-xs font-bold text-[#FFA412]">12.122</p>
      </div>
    </div>
  </ChartsGridWrapper>
);
