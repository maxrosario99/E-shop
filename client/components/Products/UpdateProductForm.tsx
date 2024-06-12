import { UpdateProduct } from "@/models/products";
import React, { FormEvent } from "react";
import { UpdateItem } from "../../pages/api/products";

type Props = {
  product: UpdateProduct;

  setProduct: any;
};

const UpdateProductForm = ({ product, setProduct }: Props) => {
  function closeUpdateForm() {
    const updateFormElement = document.getElementById("update-product-form");
    if (updateFormElement !== null) {
      updateFormElement.style.display = "none";
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await UpdateItem(product);
    console.log(response);
    closeUpdateForm();
  };
  return (
    <div id="update-product-form">
      <button onClick={closeUpdateForm}>Close</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            placeholder={product.name}
            type="text"
            name="name"
          />
        </div>
        <div>
          <label>id</label>
          <input
            onChange={(e) => setProduct({ ...product, id: e.target.value })}
            placeholder={product.id.toString()}
            type="number"
            name="id"
          />
        </div>
        <div>
          <label>Price</label>
          <input
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            placeholder={product.price.toString()}
            type="number"
            name="price"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
