import { Product } from "@/models/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <Link href={`/Product/${product.id}`}>
        <Image
          width={500}
          height={500}
          src="https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"
          alt="Image 1"
        />
      </Link>
      <div>
        <p>{product.name}</p>
        <div>{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
