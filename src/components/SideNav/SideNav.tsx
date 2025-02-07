import React from "react";
import { Flowbite } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { logoutUser } from "../../store/reducers/auth";
import { useDispatch } from "react-redux";
import LogoutModal from "../Modals/LogoutModal";
import { useState } from "react";
import { logo } from "../../assets";

const customTheme = {
  button: {
    color: {
      light:
        "flex justify-between relative !w-full text-[#6882B6] bg-transparent focus:!outline-none focus:!ring-0 !p-0 !m-0",
    },
  },
  dropdown: {
    arrowIcon: "absolute right-0 h-4 w-4",
  },
};

type Props = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SideNav({ showSideBar }: Props) {

  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const handlelogout = () => {
    dispatch(logoutUser());
  };


  // Helper to determine active link styling
  const isActive = (path: string) => location.pathname === path ? "bg-[#e1e3ef] text-gray-900 font-bold text-lg rounded border-l-4 border-[#2a77ea]" : "text-[#8689aa]";

  return (
    <>
        <Flowbite theme={{ theme: customTheme }}>
      <>
      <div
        className={`flex flex-col justify-between fixed top-0 left-0 z-50 h-full overflow-y-auto bg-[#f4f5f9] transition-transform ${
          showSideBar ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="py-4 px-4">
          <Link to="/" className="flex justify-start gap-1 w-[151px] h-[53px] ">
            <div className="flex justify-start w-[150px]">
              <div className="flex justify-center items-center w-full h-full">
                <img height={100} width={100} src={logo} alt="logo" />
              </div>
            </div>
          </Link>
          <ul className="space-y-2 mt-16">
            <li>
              <Link to="/">
                <div className={`w-[248px] h-10 px-4 py-2.5 justify-start items-end inline-flex overflow-hidden ${isActive("/")}`}>
                <div className="justify-center items-center gap-2 flex">
                    <div className="w-5 h-5 p-[1.67px] justify-center items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78268 0.666504H5.59935C6.77435 0.666504 7.71602 1.62484 7.71602 2.80067V5.6415C7.71602 6.82484 6.77435 7.77484 5.59935 7.77484H2.78268C1.61602 7.77484 0.666016 6.82484 0.666016 5.6415V2.80067C0.666016 1.62484 1.61602 0.666504 2.78268 0.666504ZM2.78268 10.2246H5.59935C6.77435 10.2246 7.71602 11.1754 7.71602 12.3588V15.1996C7.71602 16.3746 6.77435 17.3329 5.59935 17.3329H2.78268C1.61602 17.3329 0.666016 16.3746 0.666016 15.1996V12.3588C0.666016 11.1754 1.61602 10.2246 2.78268 10.2246ZM15.2161 0.666504H12.3994C11.2244 0.666504 10.2828 1.62484 10.2828 2.80067V5.6415C10.2828 6.82484 11.2244 7.77484 12.3994 7.77484H15.2161C16.3828 7.77484 17.3328 6.82484 17.3328 5.6415V2.80067C17.3328 1.62484 16.3828 0.666504 15.2161 0.666504ZM12.3994 10.2246H15.2161C16.3828 10.2246 17.3328 11.1754 17.3328 12.3588V15.1996C17.3328 16.3746 16.3828 17.3329 15.2161 17.3329H12.3994C11.2244 17.3329 10.2828 16.3746 10.2828 15.1996V12.3588C10.2828 11.1754 11.2244 10.2246 12.3994 10.2246Z"
                  fill={location.pathname === '/' ? '#07070a' : '#8689AA'}
                   />
                </svg>
                    </div>
                    <div className="text-center text-base font-bold font-['Mulish'] leading-relaxed">Dashboard</div>
                </div>
            </div>
              </Link>
            </li>
            <div className="h-[2px] w-full bg-gray-200 items-start gap-2 inline-flex" />
          </ul>
          <div className="">
            <ul>
            <li>
            <div  onClick={() => setOpenModal(true)} className="w-[248px] cursor-pointer h-10 px-4 py-2.5 justify-start items-end inline-flex overflow-hidden">
                <div className="justify-center items-center gap-2 flex">
                    <div className="w-5 h-5 p-[1.67px] justify-center items-center flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.4034 9.41481C12.768 9.41481 13.0563 9.69814 13.0563 10.0565C13.0563 10.4065 12.768 10.6981 12.4034 10.6981H7.31618V14.6815C7.31618 16.7231 9.00344 18.3898 11.0892 18.3898H15.2183C17.2956 18.3898 18.9828 16.7315 18.9828 14.6898V5.43148C18.9828 3.38148 17.2871 1.72314 15.2098 1.72314H11.0722C9.00344 1.72314 7.31618 3.38148 7.31618 5.42314V9.41481H12.4034Z" fill="#8689AA"/>
                      <path d="M4.29102 7.17331L1.85768 9.59831C1.73268 9.72331 1.66602 9.88165 1.66602 10.0566C1.66602 10.2233 1.73268 10.39 1.85768 10.5066L4.29102 12.9316C4.41601 13.0566 4.58268 13.1233 4.74102 13.1233C4.90768 13.1233 5.07435 13.0566 5.19935 12.9316C5.44935 12.6816 5.44935 12.2733 5.19935 12.0233L3.86601 10.6983L7.31618 10.6981V9.41481L3.86601 9.41498L5.19935 8.08998C5.44935 7.83998 5.44935 7.43165 5.19935 7.18165C4.94935 6.92331 4.54102 6.92331 4.29102 7.17331Z" fill="#8689AA"/>
                    </svg>
                    </div>
                    <div className="text-center text-[#8689aa] text-base font-normal font-['Mulish'] leading-relaxed">Logout</div>
                </div>
            </div>
            </li>
            </ul>
            </div>
        </div>
      </div>
      
      </>
   
    </Flowbite>
          {/* Logout Modal */}
          {openModal && (
        <LogoutModal
          onClose={() => setOpenModal(false)}
          onConfirm={handlelogout}
        />
      )}
    </>

  );
}

export default SideNav;
