import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler (async (req, res)=>{
    const products = await Product.find({});
    res.status(200).json(products);

}
);

// @desc    Fetch a product
// @route   GET /api/products/:id
// @access  Public
const getProductsById = asyncHandler (async (req, res)=>{
    const id = req.params.id;
    const product = await Product.findById(id); 

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404);
        throw new Error('Resource not found')
    }
}
);

export { getProducts, getProductsById }