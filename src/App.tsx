import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { StatsGrid } from "./components/StatsGrid";
import { TopProducts } from "./components/TopProducts";
import { SalesMap } from "./components/SalesMap";
import { VisitorInsights } from "./components/dashboard/VisitorInsights";
import { RevenueChart } from "./components/dashboard/RevenueChart";
import { SatisfactionChart } from "./components/dashboard/SatisfactionChart";
import { TargetRealityChart } from "./components/dashboard/TargetRealityChart";
import { VolumeServiceChart } from "./components/dashboard/VolumeServiceChart";

function App() {
  return (
    <div className="flex min-h-screen bg-bg-main font-inter">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />

        <main className="p-10 space-y-8 overflow-y-auto">
          {/* Top Row: Today's Sales & Visitor Insights */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-[1.8]">
              <StatsGrid />
            </div>
            <div className="flex-1">
              <VisitorInsights className="h-full" />
            </div>
          </div>

          {/* Middle Row: Total Revenue, Customer Satisfaction, Target vs Reality */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <RevenueChart />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <SatisfactionChart />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <TargetRealityChart />
            </div>
          </div>

          {/* Bottom Row: Top Products, Sales Mapping, Volume vs Service */}
          <div className="grid grid-cols-12 gap-8 pb-10">
            <div className="col-span-12 lg:col-span-5">
              <TopProducts />
            </div>
            <div className="col-span-12 lg:col-span-4">
              <SalesMap />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <VolumeServiceChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
