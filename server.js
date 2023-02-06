require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Import Routes
const routeHomeApi = require('./routes/homeApi');
const routePostTransactions = require('./routes/postTransactions');
const routeGetTransactions = require('./routes/getTransactions');
const routeRemoveTransactions = require('./routes/removeTransaction');
const routeAuth = require('./routes/auth');


// Routes
app.use(routeHomeApi);
app.use(routePostTransactions);
app.use(routeGetTransactions);
app.use(routeRemoveTransactions);
app.use(routeAuth);


// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.emit('ready');
        console.log('Connected to MongoDB');
    })
    .catch((error) => console.log(error));


// Server
app.on('ready', () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
        console.log(`http://localhost:${port}`);
    });
})