import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ScrollToTopButton from "../components/Scroll";



const Layout = () => {
  return (
    <>
      <Header />
       <Outlet />
       <ScrollToTopButton/>
      <Footer />
    </>
  );
};

export default Layout;
