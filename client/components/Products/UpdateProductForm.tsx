import React, { MouseEventHandler, useState } from 'react'
import { Product } from '../../pages/Products'
import { UpdateProductName } from '../../pages/api/products'

type props = {
  closeModal: any//MouseEventHandler<HTMLButtonElement>,
  product: Product | undefined
  setProducts: any;
  products: any
}



const UpdateProductForm = ({ closeModal, product, products, setProducts } : props) => {
  const [newName, setNewName] = useState<string>("")

  const handleUpdateProduct = async (e: any) => {
    e.preventDefault()
    if (newName === "") return
    const updateProduct = {
      _id: product?._id,
      name: newName
    }
    const response = await UpdateProductName(updateProduct);
    console.log(response);

    if (response.data !== null) {
      const copyProducts = [...products];

      const index = copyProducts.findIndex((curr) => curr._id === response.data?._id);

      copyProducts[index] = response.data;

      setProducts(copyProducts);
      setNewName("");
      closeModal();
    }
  }
  
  return (
    <div id='update-product-form-container'>
      <button onClick={closeModal}>Close</button>
      <form>
        <label>Id:</label>
        <p>{product?._id}</p>
        <br/>
        <label>Price:</label>
        <p>$ {product?.price}</p>
        <br/>
        <label>Name</label>
        <input onChange={(e) => setNewName(e.target.value)} placeholder={product?.name} />
        <br/>
        <button onClick={(e) => handleUpdateProduct(e)}>save</button>
      </form>
    </div>
  )
}

export default UpdateProductForm