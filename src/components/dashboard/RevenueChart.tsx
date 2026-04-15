import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { ChartsGridWrapper } from './ChartsGridWrapper';

const revenueData = [
  { day: "Mon", online: 15, offline: 10 },
  { day: "Tue", online: 12, offline: 18 },
  { day: "Wed", online: 18, offline: 12 },
  { day: "Thu", online: 22, offline: 15 },
  { day: "Fri", online: 14, offline: 12 },
  { day: "Sat", online: 21, offline: 16 },
  { day: "Sun", online: 19, offline: 11 },
];

export const RevenueChart = () => (
  <ChartsGridWrapper title="Total Revenue">
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={revenueData}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#96A5B8", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#96A5B8", fontSize: 12 }}
          />
          <Tooltip cursor={{ fill: "#f3f4f6" }} />
          <Legend verticalAlign="bottom" align="center" iconType="circle" />
          <Bar
            dataKey="online"
            fill="#0095FF"
            radius={[4, 4, 0, 0]}
            barSize={12}
            name="Online Sales"
          />
          <Bar
            dataKey="offline"
            fill="#00E096"
            radius={[4, 4, 0, 0]}
            barSize={12}
            name="Offline Sales"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </ChartsGridWrapper>
);
