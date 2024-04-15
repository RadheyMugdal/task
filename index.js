import express from 'express'
import data from './data/data.js'
import cors from 'cors'
const app = express();
app.use(cors(
    {
        origin: '*',
    optionsSuccessStatus: 200
    }
));


app.use(express.json());

app.get('/', (req, res) => {
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
s

