const express = require('express');

const router = express.Router();

const marketUpdates = [
  {
    id: '1',
    title: 'Tech Sector Growth',
    description: 'Tech stocks showing strong performance this quarter',
    timestamp: new Date()
  },
  {
    id: '2',
    title: 'Renewable Energy Trends',
    description: 'Increasing investment in green energy technologies',
    timestamp: new Date()
  }
];

router.get('/updates', (req, res) => {
  res.json(marketUpdates);
});

module.exports = router;