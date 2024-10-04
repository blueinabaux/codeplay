import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";

// import UserContextProvider from "../context/UserContextProvider";

const Layout = () => {
  return (
      <div className="layout relative bg-[#17212D] min-h-[100vh]  w-[100vw] flex flex-col justify-center items-center overflow-x-hidden">
        <Navbar />
          <Outlet />
        {/* <Footer/> */}
      </div>
  );
};

export default Layout;
