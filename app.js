const express = require('express');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const horoscopeRoutes = require('./routes/horoscopeRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/horoscope', horoscopeRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});