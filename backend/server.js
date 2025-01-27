const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolioRoutes');
const marketRoutes = require('./routes/marketRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/market', marketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});