import "../styles/globals.css";
import Layout from "../components/Header/Layout";
import reduxStore from "../Redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
