const express = require('express');
const mongoose = require('mongoose');
const dotenv  = require('dotenv');
const cors = require('cors');
const {infoRouter, registerRouter} = require('./routes/routes.js');

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(cors());
app.use('/info', infoRouter)
app.use('/register', registerRouter)

app.get('/', (req, res) => {
    res.send('Welcome to server')
})
const port = process.env.port || 5000;
const mongodb = process.env.mongodb;

// Connect to MongoDB
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


