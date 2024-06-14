import React, { useEffect, useState } from "react";
import UpdateProductForm from "../components/Products/UpdateProductForm";
import { DeleteProduct } from "./api/products";

export interface Product {
  _id: string;
  id: number;
  name: string;
  price: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/products/getProducts"
        );
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSetSelected = (product: Product) => {
    setSelectedProduct(product);
    openModal();
  };
  const handleDeleteProduct = async (productToDelete: Product) => {
    try {
      const response = await DeleteProduct(productToDelete);
      console.log(response);
      if (response.status === 200) {
        setProducts(
          products.filter((product) => product._id !== productToDelete._id)
        );
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openModal = () => {
    const formElement = document.getElementById(
      "update-product-form-container"
    );
    if (formElement !== null) {
      formElement.style.display = "block";
    }
  };

  const closeModal = () => {
    const formElement = document.getElementById(
      "update-product-form-container"
    );
    if (formElement !== null) {
      formElement.style.display = "none";
    }
  };

  return (
    <div>
      <UpdateProductForm
        products={products}
        setProducts={setProducts}
        product={selectedProduct}
        closeModal={closeModal}
      />
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name}: ${product.price.toFixed(2)}
            <button onClick={() => handleSetSelected(product)}>Update</button>
            <button onClick={() => handleDeleteProduct(product)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
