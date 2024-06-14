import userRoutes from "./routes/user.js";
import productsRoutes from "./routes/product.js";
import mongoose from "mongoose";
import { initializeProducts } from "../server/controllers/products.js";
import cors from "cors";
import express from "express";
import session from "express-session";
import MongoDBStore from "connect-mongodb-session";
const mongoStore = MongoDBStore(session);

const store = new mongoStore({
  collection: "userSessions",
  uri: "mongodb+srv://maxumum1000:Snowball123!@cluster0.53qjg8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  expires: 600000,
});

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    name: "shop-cookie",
    store: store,
    cookie: {
      maxAge: 600000,
      httpOnly: true,
      sameSite: false,
      secure: false,
    },
    resave: false,
    saveUninitialized: false,
    secret: "1234jkdsafj",
  })
);

app.use("/user", userRoutes);
app.use("/products", productsRoutes);

const port = 3001;

const connect = mongoose.connect(
  "mongodb+srv://maxumum1000:Snowball123!@cluster0.53qjg8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

connect
  .then(() => {
    initializeProducts();
    app.listen(port, () => console.log(`Server running on Port: ${port}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
