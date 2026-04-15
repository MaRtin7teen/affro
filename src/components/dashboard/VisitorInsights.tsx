import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { ChartsGridWrapper } from './ChartsGridWrapper';

const visitorData = [
  { name: "Jan", loyal: 150, new: 250, unique: 200 },
  { name: "Feb", loyal: 220, new: 310, unique: 260 },
  { name: "Mar", loyal: 200, new: 280, unique: 240 },
  { name: "Apr", loyal: 250, new: 340, unique: 300 },
  { name: "May", loyal: 180, new: 270, unique: 220 },
  { name: "Jun", loyal: 210, new: 320, unique: 280 },
  { name: "Jul", loyal: 300, new: 360, unique: 340 },
  { name: "Aug", loyal: 260, new: 330, unique: 310 },
];

export const VisitorInsights = ({ className = "" }: { className?: string }) => (
  <ChartsGridWrapper title="Visitor Insights" className={className}>
    <div className="h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={visitorData}
          margin={{ top: 0, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#96A5B8", fontSize: 10 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#96A5B8", fontSize: 10 }}
          />
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" iconType="circle" />
          <Line
            type="basis"
            dataKey="new"
            stroke="#EF4444"
            strokeWidth={3}
            dot={false}
            name="New Customers"
          />
          <Line
            type="basis"
            dataKey="loyal"
            stroke="#A855F7"
            strokeWidth={3}
            dot={false}
            name="Loyal Customers"
          />
          <Line
            type="basis"
            dataKey="unique"
            stroke="#10B981"
            strokeWidth={3}
            dot={false}
            name="Unique Customers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </ChartsGridWrapper>
);
