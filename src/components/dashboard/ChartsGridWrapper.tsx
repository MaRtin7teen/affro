import React from 'react';

interface ChartsGridWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const ChartsGridWrapper = ({ title, children, className = "" }: ChartsGridWrapperProps) => (
  <div className={`bg-white p-8 rounded-[2rem] shadow-sm ${className}`}>
    <h3 className="text-xl font-bold text-text-main mb-8">{title}</h3>
    {children}
  </div>
);
