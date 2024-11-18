import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import { getProducts, getProductsById } from '../controllers/productController.js';


const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById)

export default router;