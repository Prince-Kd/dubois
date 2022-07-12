import Layout from "../components/layout";
import { useEffect } from "react";
import "../styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
