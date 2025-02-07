import { Outlet } from "react-router";
import Header from "../Header/Header";
import { useState } from "react";
import SideNav from "../SideNav/SideNav";
import Footer from "../Footer/Footer";
function Main() {
  const [showSideBar, setShowSideBar] = useState(false);


  return (
    <div className="flex">
      <SideNav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="relative w-full lg:ml-56">
      <div
        className={`${
          showSideBar &&
          "absolute bg-opacity-30 w-full h-full z-40"
        }`}
        onClick={() => setShowSideBar(false)}
          ></div>
        <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar}/>
        <Outlet />
        <div className="flex justify-center items-center mx-auto">
        <Footer/>
        </div>

      </div>
    </div>
  );
}

export default Main;