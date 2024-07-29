import express from 'express';
import { connectDB } from './config/db.js';
import cors from 'cors';
import courseRoute from './routes/courseRoute.js';
import userRoute from './routes/userRoute.js';
import 'dotenv/config'
import eventRoute from './routes/eventRoute.js';
import contactRouter from './routes/contactRoute.js';
import pricingController from './routes/pricingRoute.js';
import teamRouter from './routes/teamRoute.js';
import enrollRouter from './routes/enrollmentRoute.js';

const app = express();
const PORT = 4000
//Middle ware 
app.use(cors());
app.use(express.json());
//connect Db
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

//apis endpoints
app.use('/', courseRoute);
app.use('/', userRoute);
app.use('/', eventRoute);
app.use('/', contactRouter);
app.use('/', pricingController);
app.use('/', teamRouter);
app.use('/',enrollRouter)

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})
