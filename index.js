const express = require('express');
const data = require('./data.js');

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

