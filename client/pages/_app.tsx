import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../components/Navbar/styles.css";
import { AuthProvider } from "../components/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </AuthProvider>
  );
}
