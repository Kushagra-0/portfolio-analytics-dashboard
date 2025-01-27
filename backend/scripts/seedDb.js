const mongoose = require('mongoose');
const Portfolio = require('../models/Portfolio');

const seedDatabase = async () => {
  await mongoose.connect("mongodb+srv://kushagrashukladev:HXUs1HPUgvQbl6hQ@cluster0.xyixa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  const portfolioData = {
    userId: 'user123',
    totalValue: 250000,
    dailyPnL: 1500,
    strategies: [
      {
        name: 'Tech Growth',
        roi: 18.5,
        cagr: 22.3,
        drawdown: 7.2,
        currentValue: 100000
      },
      {
        name: 'Dividend Strategy',
        roi: 12.7,
        cagr: 15.6,
        drawdown: 4.1,
        currentValue: 75000
      },
      {
        name: 'Emerging Markets',
        roi: 15.3,
        cagr: 18.9,
        drawdown: 9.5,
        currentValue: 75000
      }
    ]
  };

  await Portfolio.deleteMany({});
  await Portfolio.create(portfolioData);

  console.log('Database seeded successfully');
  mongoose.connection.close();
};

seedDatabase();