import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config();
const app = express();

const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.status(200).send("api is running")
})

app.use('/api/products', productRoute);

app.use(notFound);
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`sever is running on ${port}`);
    connectDB();
})