import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../components/Header/Layout";
import { Provider } from "react-redux";
import store from "../components/Store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
