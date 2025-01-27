import React, { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../services/apiService';
import { PortfolioData } from '../types/interfaces';
import PortfolioOverview from '../components/PortfolioOverview';
import PerformanceCharts from '../components/PerformanceCharts';
import MarketUpdates from '../components/MarketUpdates';

const Dashboard: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const data = await fetchPortfolioData();
        setPortfolioData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch portfolio data', error);
        setIsLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PortfolioOverview data={portfolioData!} />
          <PerformanceCharts strategies={portfolioData!.strategies} />
        </div>
        <MarketUpdates />
      </div>
    </div>
  );
};

export default Dashboard;