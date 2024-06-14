import Image from "next/image";
import { Inter } from "next/font/google";
import { ProductsContext } from "./_app";
import { useContext } from "react";
import ProductCard from "../components/Products/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { products } = useContext(ProductsContext);
  const productCardList = products?.map((product) => {
    return <ProductCard product={product} />;
  });
  console.log(products);
  return <div id="homepage-products">{productCardList}</div>;
}
