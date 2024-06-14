import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../_app";
import { Product } from "@/models/products";
import Image from "next/image";

const ProductPage = () => {
  const { products } = useContext(ProductsContext);

  const [currentProducts, setCurrentProduct] = useState<Product | null>();
  const router = useRouter();
  const prodId = router.query;
  console.log(products);
  useEffect(() => {
    const prodId = router.query;
    const myProducts = products as Product[];

    if (myProducts !== undefined) {
      const foundItem = myProducts.find(
        (product) => product.id.toString() === prodId.id
      );

      if (foundItem !== undefined) {
        setCurrentProduct(foundItem);
      } else {
        setCurrentProduct(null);
      }
    }
  }, [products]);
  return (
    <div id="single-product-container">
      <div className="product-info-container">
        <h1 id="product-name">{currentProducts?.name}</h1>
      </div>
      <div id="product-img-container">
        <Image
          width={500}
          height={500}
          src="https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"
          alt="Image 1"
        />
      </div>
      <div className="product-price">{currentProducts?.price}</div>
    </div>
  );
};

export default ProductPage;
