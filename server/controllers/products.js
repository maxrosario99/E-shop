import Products from "../models/products.js";
import mongodb from "mongodb";
var ObjectID = mongodb.ObjectId;

export const initializeProducts = async () => {
  const hardcodedProducts = [
    {
      name: "Macbook 2012 ",
      id: 1,
      price: 100,
    },
    {
      name: "Macbook 2020",
      id: 2,
      price: 200,
    },
    {
      name: "Ipad 2020",
      id: 3,
      price: 300,
    },
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

export const GetProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    console.log(products);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const UpdateProduct = async (req, res) => {
  try {
    const updateProduct = req.body;
    console.log(updateProduct);
    let updatedProduct = await Products.findOneAndUpdate(
      { _id: updateProduct._id },
      {
        name: updateProduct.name,
        id: updateProduct.id,
        price: updateProduct.price,
      },
      { new: true }
    );
    console.log(updatedProduct);
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const AddNewProduct = async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    res.status(200).json("Successful");
  } catch (error) {
    res.status(500).json({ error: "internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    console.log("function hit");

    const deletedProduct = req.body;
    console.log(`Deleting product with id: ${deleteProduct}`);
    await Products.deleteOne({ _id: deletedProduct._id });
    console.log(`Product ${deleteProduct} deleted.`);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
