import axios from 'axios';
import { PortfolioData, MarketUpdate } from '../types/interfaces';

const API_BASE_URL = 'https://portfolio-analytics-dashboard-production.up.railway.app/api';

export const fetchPortfolioData = async (): Promise<PortfolioData> => {
  const response = await axios.get(`${API_BASE_URL}/portfolio/summary`);
  return response.data;
};

export const fetchMarketUpdates = async (): Promise<MarketUpdate[]> => {
  const response = await axios.get(`${API_BASE_URL}/market/updates`);
  return response.data;
};