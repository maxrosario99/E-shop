import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../pages/_app";
import AddProductForm from "./Products/AddProductForm";
import UpdateProductForm from "./Products/UpdateProductForm";
import { Product, UpdateProduct } from "@/models/products";

const Productstable = () => {
  const products = useContext(ProductsContext);

  const [updateProduct, setUpdateProduct] = useState<UpdateProduct>({
    name: "dummy",
    _id: "-1",
    price: -1,
    id: -1,
  });

  function openAddProductForm() {
    const addFormElement = document.getElementById("add-product-from");
    if (addFormElement !== null) {
      addFormElement.style.display = "block";
    }
  }
  function openUpdateProductForm() {
    const updateFormElement = document.getElementById("update-product-form");
    if (updateFormElement !== null) {
      updateFormElement.style.display = "block";
    }
  }
  function handleSelectedProduct(product: Product) {
    setUpdateProduct({ ...product });
    openUpdateProductForm();
  }

  useEffect(() => {
    console.log(updateProduct);
  }, [updateProduct]);
  return (
    <div>
      <AddProductForm />
      <UpdateProductForm
        product={updateProduct}
        setProduct={setUpdateProduct}
      />
      <button onClick={openAddProductForm}>Add New Product</button>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>id</th>
            <th>price</th>
            <th>_id</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products?.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.id}</td>
                <td>{product.price}</td>
                <td>{product._id}</td>
                <td>
                  <button onClick={() => handleSelectedProduct(product)}>
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Productstable;
