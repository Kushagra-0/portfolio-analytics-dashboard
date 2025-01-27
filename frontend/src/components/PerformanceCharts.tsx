import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  CartesianGrid
} from 'recharts';
import { BarChart2 } from 'lucide-react';
import { Strategy } from '../types/interfaces';

const PerformanceCharts: React.FC<{ strategies: Strategy[] }> = ({ strategies }) => {
  const chartData = strategies.map(strategy => ({
    name: strategy.name,
    roi: strategy.roi,
    cagr: strategy.cagr,
    drawdown: strategy.drawdown
  }));

  const getColorByPerformance = (value: number) => {
    if (value > 15) return '#10B981'; // Green for high performance
    if (value > 10) return '#F59E0B'; // Yellow for moderate
    return '#EF4444'; // Red for low performance
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:scale-105">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Strategy Performance Metrics</h2>
        <BarChart2 className="text-blue-500" />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip 
            formatter={(value, name) => [
              `${value}%`, 
              name === 'roi' ? 'ROI' : 
              name === 'cagr' ? 'CAGR' : 
              'Drawdown'
            ]}
            contentStyle={{ 
              backgroundColor: '#f3f4f6', 
              borderRadius: '0.75rem' 
            }} 
          />
          <Legend 
            formatter={(value) => 
              value === 'roi' ? 'Return on Investment' : 
              value === 'cagr' ? 'Compound Annual Growth' : 
              'Drawdown'
            }
          />
          <Line 
            type="monotone" 
            dataKey="roi" 
            stroke={getColorByPerformance(chartData[0].roi)}
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="cagr" 
            stroke={getColorByPerformance(chartData[0].cagr)}
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="drawdown" 
            stroke="#6366F1"
            strokeWidth={3}
            strokeDasharray="5 5"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        {strategies.map((strategy) => (
          <div 
            key={strategy.name} 
            className="bg-gray-100 p-3 rounded-lg shadow-sm"
          >
            <h3 className="font-semibold text-gray-700">{strategy.name}</h3>
            <div className="flex justify-between mt-2">
              <div className="text-sm">
                <span className="text-gray-500">ROI</span>
                <p className="font-bold">{strategy.roi}%</p>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">CAGR</span>
                <p className="font-bold">{strategy.cagr}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceCharts;