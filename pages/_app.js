import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../components/Header/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
