const express = require('express');
const data = require('./data/data.js');
const cors = require('cors');
express.use(cors(
    {
        origin: '*',
    optionsSuccessStatus: 200
    }
));
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;

