import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
dotenv.config();
const app = express();

const port = process.env.PORT;

app.get('/', (req,res)=>{
    res.status(200).send("api is running")
})

app.get('/api/products', (req, res)=>{
    res.status(200).json(products);
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p._id == id); 

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).send("not found");
    }
});

app.listen(port, ()=>{
    console.log(`sever is running on ${port}`);
    connectDB();
})