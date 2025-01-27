const express = require('express');
const Portfolio = require('../models/Portfolio');

const router = express.Router();

router.get('/summary', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ userId: 'user123' });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json({
      totalValue: portfolio.totalValue,
      dailyPnL: portfolio.dailyPnL,
      strategies: portfolio.strategies
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;