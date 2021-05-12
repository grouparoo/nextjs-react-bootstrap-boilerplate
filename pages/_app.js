import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";
import Layout from "../components/layouts/main";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
