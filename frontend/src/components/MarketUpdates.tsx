import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { fetchMarketUpdates } from '../services/apiService';
import { MarketUpdate } from '../types/interfaces';

const MarketUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<MarketUpdate[]>([]);

  useEffect(() => {
    const loadMarketUpdates = async () => {
      try {
        const marketUpdates = await fetchMarketUpdates();
        setUpdates(marketUpdates);
      } catch (error) {
        console.error('Failed to fetch market updates', error);
      }
    };

    loadMarketUpdates();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Market Updates</h2>
        <AlertCircle className="text-yellow-500" />
      </div>
      <div className="space-y-6">
        {updates.map(update => (
          <div key={update.id} className="border-b pb-4 last:border-b-0">
            <h3 className="font-semibold text-gray-700 mb-1">{update.title}</h3>
            <p className="text-gray-500 text-sm">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketUpdates;
