require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));