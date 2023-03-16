import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import ruphyRoutes from './routes/ruphyRoutes.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/ruphy', ruphyRoutes);

app.get('/', async (req, res)=> {
 res.send('Hello from Ruphy!');
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`Server is running on ${port}`));

    } catch (error) {
        console.log(error);
    }
}

startServer();