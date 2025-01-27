export interface Strategy {
    id: string;
    name: string;
    roi: number;
    cagr: number;
    drawdown: number;
    currentValue: number;
  }
  
  export interface PortfolioData {
    totalValue: number;
    dailyPnL: number;
    strategies: Strategy[];
  }
  
  export interface MarketUpdate {
    id: string;
    title: string;
    description: string;
    timestamp: Date;
  }
  
  export interface PerformanceChartData {
    month: string;
    value: number;
  }