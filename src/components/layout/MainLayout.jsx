import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BG from "../../assets/topo.png";

const MainLayout = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-top bg-fixed relative bg-gradient-to-br from-blue-900 to-blue-700 dark:bg-black bg-[#ffffff00]" style={{backgroundImage: `url(${BG})`}}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
