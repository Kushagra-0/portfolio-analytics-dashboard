const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolioRoutes');
const marketRoutes = require('./routes/marketRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://kushagrashukladev:HXUs1HPUgvQbl6hQ@cluster0.xyixa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/market', marketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});