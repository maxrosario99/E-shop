import userRoutes from "./routes/user.js"
import mongoose from  "mongoose" 
import productsRouter from '../server/controllers/products.js';

import cors from "cors"
import express  from "express"


import bcrypt  from"bcrypt"
const app = express()

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

app.use(express.static("public"))

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use("/user", userRoutes)

app.get("/hello", async (req, res) => {
    console.log("hello")
    res.send("hello")
})
// app.use("/products", productRoutes)

app.use('/api', productsRouter);


const port= 3001;

const connect = mongoose.connect("mongodb+srv://maxumum1000:Snowball123!@cluster0.53qjg8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

connect.then(() => {
    app.listen(port, () => (
        console.log(`Server running on Port: ${port}`)
    ))})
.catch((error)=> {
    console.log(error.message)
});