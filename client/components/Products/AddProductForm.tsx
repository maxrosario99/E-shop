import { NewProduct } from "@/models/products";
import React, { FormEvent, FormEventHandler } from "react";
import { AddNewProduct } from "../../pages/api/products";

const AddProductForm = () => {
  function closeAddProductForm() {
    const addFormElement = document.getElementById("add-product-from");
    if (addFormElement !== null) {
      addFormElement.style.display = "none";
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    // console.log(form.elements);

    const newProduct: NewProduct = {
      name: form.elements.name.value,
      id: form.elements.id.value,
      price: form.elements.price.value,
    };
    const response = await AddNewProduct(newProduct);
    console.log(response);
  };
  return (
    <div id="add-product-from">
      <button onClick={closeAddProductForm}>Close</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>id</label>
          <input type="number" name="id" />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddProductForm;
