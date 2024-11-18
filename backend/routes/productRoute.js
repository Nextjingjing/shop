import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import { getProducts, getProductsById } from '../controllers/productController.js';


const router = express.Router();

router.get('/', asyncHandler(async (req, res)=>{
    getProducts();
})
);

router.get('/:id', asyncHandler( async(req, res) => {
    getProductsById();
})
);

export default router;