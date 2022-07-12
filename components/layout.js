import NavBar from "./navBar";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
      <>
        <NavBar />
         <main>{children}</main>
        <Footer />
      </>
    )
  }