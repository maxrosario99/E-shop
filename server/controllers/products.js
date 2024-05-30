import express from 'express';
import mongoose from 'mongoose';
import Products from '../models/products.js';

const router = express.Router();

mongoose.connect('mongodb+srv://maxumum1000:Snowball123!@cluster0.53qjg8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("MongoDB connected.");
    initializeProducts();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

const initializeProducts = async () => {
    const hardcodedProducts = [
        {
            name: "Macbook 2012 ",
            id: 1,
            price: 100
        },
        {
            name: "Macbook 2020",
            id: 2,
            price: 200
        },
        {
            name: "Ipad 2020",
            id: 3,
            price: 300
        }
    ];

    for (const productData of hardcodedProducts) {
        const existingProduct = await Products.findOne({ id: productData.id });
        if (!existingProduct) {
            const product = new Products(productData);
            await product.save();
            console.log(`Product ${productData.id} initialized.`);
        } else {
            existingProduct.name = productData.name;
            existingProduct.price = productData.price;
            await existingProduct.save();
            console.log(`Product ${productData.id} updated.`);
        }
    }
};

router.get('/products', async (req, res) => {
  try {
    const products = await Products.find({}, 'name price');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
