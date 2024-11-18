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

```

    สรุปลำดับการทำงานของ middleware ในกรณีต่างๆ
- เมื่อมี request ที่ตรงกับ path (มี route):
    ไม่มี error   -> ทำงานปกติ

    เกิด error   -> middleware asyncHandler จะจับ error นั้นด้วย Promise.resolve().catch(next) 
    และส่ง error ไปยัง errorHandler 


- เมื่อมี request ที่ไม่ตรงกับ path (ไม่มี route ที่จับ request):
    จะไปเจอกับ middleware notFound และจะส่ง error นั้นด้วย next(error) 
    และส่ง error ไปยัง errorHandler 

ปล. อาจจะต้องดูไฟล์ {
    backend/middleware/errorMiddleware.js,
    backend/middleware/asyncHandler.js
} ประกอบคำอธิบายด้วย

```