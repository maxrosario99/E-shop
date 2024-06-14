import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../pages/Product/styles.css";
import "../components/Navbar/styles.css";
import "../components/Products/styles.css";
import { AuthProvider } from "../components/AuthContext";
import { Product } from "@/models/products";
import { createContext } from "react";
import { useGetProducts } from "@/Utils";

export const ProductsContext = createContext<any>(undefined);

export default function App({ Component, pageProps }: AppProps) {
  const [products, setProducts] = useGetProducts();
  return (
    <AuthProvider>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ProductsContext.Provider>
    </AuthProvider>
  );
}
