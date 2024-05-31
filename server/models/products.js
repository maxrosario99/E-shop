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

export default Products;