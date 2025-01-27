import { Strategy} from '../types/interfaces';

export const calculateTotalPerformance = (strategies: Strategy[]): number => {
  return strategies.reduce((total, strategy) => total + strategy.roi, 0) / strategies.length;
};

export const filterStrategiesByPerformance = (
  strategies: Strategy[], 
  minROI: number
): Strategy[] => {
  return strategies.filter(strategy => strategy.roi >= minROI);
};