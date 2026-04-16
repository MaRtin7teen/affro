import React, { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { StatsGrid } from "./components/StatsGrid";
import { TopProducts } from "./components/TopProducts";
import { SalesMap } from "./components/SalesMap";
import { UserTable } from "./components/dashboard/UserTable";
import { VisitorInsights } from "./components/dashboard/VisitorInsights";
import { RevenueChart } from "./components/dashboard/RevenueChart";
import { SatisfactionChart } from "./components/dashboard/SatisfactionChart";
import { TargetRealityChart } from "./components/dashboard/TargetRealityChart";
import { VolumeServiceChart } from "./components/dashboard/VolumeServiceChart";
import { motion, Variants } from "framer-motion";

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  };

  return (
    <div className="flex min-h-screen bg-bg-main dark:bg-dark-bg font-inter transition-colors duration-500">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <motion.main 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          className="p-10 space-y-10 overflow-y-auto"
        >
          {/* Top Row: Today's Sales & Visitor Insights */}
          <div className="grid grid-cols-12 gap-10 min-h-[420px]">
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-8">
              <StatsGrid />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4">
              <VisitorInsights className="h-full" />
            </motion.div>
          </div>

          {/* Middle Row: Total Revenue, Customer Satisfaction, Target vs Reality */}
          <div className="grid grid-cols-12 gap-10 min-h-[450px]">
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-5">
              <RevenueChart />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-3">
              <SatisfactionChart />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4">
              <TargetRealityChart />
            </motion.div>
          </div>

          {/* Bottom Row: Top Products, Sales Mapping, Volume vs Service */}
          <div className="grid grid-cols-12 gap-10 min-h-[500px]">
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-5">
              <TopProducts />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-4">
              <SalesMap />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-3">
              <VolumeServiceChart />
            </motion.div>
          </div>

          {/* New Row: API Integration User Table */}
          <motion.div variants={itemVariants} className="pb-10">
            <UserTable />
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}

export default App;
