const express = require('express');
const data = require('./data.js');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
