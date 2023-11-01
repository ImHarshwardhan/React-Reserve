import connectDb from './utils/connectDB.mjs';
import express from 'express';
import productRouter from './routes/productRouter.mjs';
import cors from 'cors';
import Product from './models/product.mjs';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());
app.use('/products', productRouter);
app.use('/add-product', productRouter);
app.get('/product', async (req, res) => {
    try {
        const id = req.query._id;
        const data = await Product.findById(id);

        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
