const mongoose = require('mongoose');

const StrategySchema = new mongoose.Schema({
  name: { type: String, required: true },
  roi: { type: Number, required: true },
  cagr: { type: Number, required: true },
  drawdown: { type: Number, required: true },
  currentValue: { type: Number, required: true }
});

const PortfolioSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  totalValue: { type: Number, required: true },
  dailyPnL: { type: Number, required: true },
  strategies: [StrategySchema]
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);