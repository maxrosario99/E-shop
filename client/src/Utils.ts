import { useEffect, useState } from "react";
import { GetProducts } from "../pages/api/products";
import { Product } from "./models/products";

export function useGetProducts () {


    const  [products, setProducts] = useState<Product[]>() 

    useEffect(() => {


        const fetchProducts = async () => {
          try {
            const response = await GetProducts();
            console.log(response.data)
            setProducts(response.data);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
        fetchProducts()
    
}, [])
return(products)
}