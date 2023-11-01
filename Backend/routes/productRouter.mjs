import express from 'express';
import Product from '../models/product.mjs';
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    console.log("In Products Route");
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

productRouter.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
    const newProduct = new Product(data);
    await newProduct
        .save()
        .then((savedProduct) => {
            console.log('Product saved:', savedProduct);
            res.status(200).json("Product added successfully!"); // Fixed this line
        })
        .catch((error) => {
            console.error('Error saving product:', error);
            res.status(500).json({ error: 'Internal server error' });
        });
});

export default productRouter;
