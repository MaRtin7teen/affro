import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
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

export const TargetRealityChart = () => {
  const isDark = document.documentElement.classList.contains('dark');

  return (
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
              tick={{ fill: "#96A5B8", fontSize: 10, fontWeight: 600 }}
            />
            <Tooltip 
              cursor={{ fill: isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6' }}
              contentStyle={{ 
                backgroundColor: isDark ? '#1E1F26' : '#fff',
                borderColor: isDark ? 'rgba(255,255,255,0.1)' : '#eee',
                borderRadius: '12px'
              }}
            />
            <Bar
              dataKey="reality"
              fill="#4AB58E"
              radius={[3, 3, 0, 0]}
              barSize={12}
              animationDuration={1500}
            />
            <Bar
              dataKey="target"
              fill="#FFCF00"
              radius={[3, 3, 0, 0]}
              barSize={12}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2FFF3] dark:bg-[#4AB58E]/10 flex items-center justify-center">
              <div className="w-5 h-5 bg-[#4AB58E] rounded-md shadow-sm"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#151D48] dark:text-dark-text">Reality Sales</p>
              <p className="text-[10px] text-text-muted dark:text-dark-muted font-bold">Global</p>
            </div>
          </div>
          <p className="text-sm font-bold text-[#27AE60] tracking-tight">8.823</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF4DE] dark:bg-[#FFCF00]/10 flex items-center justify-center">
              <div className="w-5 h-5 bg-[#FFCF00] rounded-md shadow-sm"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-[#151D48] dark:text-dark-text">Target Sales</p>
              <p className="text-[10px] text-text-muted dark:text-dark-muted font-bold">Commercial</p>
            </div>
          </div>
          <p className="text-sm font-bold text-[#FFA412] tracking-tight">12.122</p>
        </div>
      </div>
    </ChartsGridWrapper>
  );
};
