import React from 'react';
import { TrendingUp } from 'lucide-react';
import { PortfolioData } from '../types/interfaces';

const PortfolioOverview: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Portfolio Overview</h2>
        <TrendingUp className="text-blue-500" />
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Portfolio Value</p>
          <div className="flex items-center">
            <p className="text-2xl font-bold text-gray-900">
              ${data.totalValue.toLocaleString()}
            </p>
            <span className="ml-2 text-green-500 text-sm flex items-center">
              +5.2% 
            </span>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Daily P&L</p>
          <div className="flex items-center">
            <p className={`text-xl font-bold ${data.dailyPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${data.dailyPnL.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;