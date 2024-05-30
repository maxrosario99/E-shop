import mongoose from "mongoose"




const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number, 
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
});



const Products = new mongoose.model("Products", ProductsSchema);
const initializeProduct = async () => {
    const hardcodedProduct = {
        name: "Hardcoded Product",
        id: 1,
        price: 200
    };

    const existingProduct = await Products.findOne({ id: hardcodedProduct.id });
    if (!existingProduct) {
        const product = new Products(hardcodedProduct);
        await product.save();
        console.log("Hardcoded product initialized.");
    } else {
        console.log("Hardcoded product already exists.");
    }
};

mongoose.connect('mongodb+srv://maxumum1000:Snowball123!@cluster0.53qjg8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected.");
        initializeProduct();
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });

export default Products;