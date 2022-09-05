import Layout from "../components/layout";
import { useEffect } from "react";
import "../styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "quill/dist/quill.core.css";
// import "rsuite/dist/rsuite.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ..


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  );
}

export default MyApp;
