import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom"
import ProfileModal from "../Modals/ProfileModal";


type Props = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
};
export default function Header({ setShowSideBar, showSideBar }: Props) {
  const location = useLocation();
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  const [openModal, setOpenModal] = React.useState(false);


   // Map route paths to their corresponding names
   const routeNames: Record<string, string> = {
    "/dashboard": "Dashboard",
  };

  // Get the name of the current route or default to "Back"
  const currentRouteName = routeNames[location.pathname] || "Back";


  return (
    <nav className="w-full lg:w-[calc(100%-13.5rem)] fixed top-0 z-40 p-4 bg-[#f4f5f9]">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo and Greeting */}
        <div className="hidden md:flex flex-col ml-16">
          <div className="text-center">
            <span className="text-[#07070a] text-xl font-medium font-['Mulish']">
              {currentRouteName === "Back" ? "Welcome back," : currentRouteName}
            </span>
            {currentRouteName === "Back" && (
              <span className="text-[#c1c5e0] text-xl font-medium font-['Mulish']">
                {" "}
              </span>
            )}
            <span className="text-[#3395ff] text-xl font-medium font-['Mulish']">
              {currentRouteName === "Back" ? currentUser?.user?.name : ""}
            </span>
          </div>
          </div>
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle for Mobile */}
      <div className="sm:hidden ustify-center items-center gap-2 inline-flex">
      <div onClick={() => setShowSideBar(!showSideBar)} className="h-10 p-2 bg-gray-50 rounded justify-center cursor-pointer items-center gap-2 inline-flex overflow-hidden">
          <div className="w-6 h-6 relative overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 12H3" stroke="#C1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 6H3" stroke="#C1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 18H3" stroke="#C1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
          </div>
      </div>
      <div className="text-center whitespace-nowrap">
              <span className="text-[#07070a] text-md font-medium font-['Mulish']">
                {currentRouteName === "Back" ? "Welcome back," : currentRouteName}
              </span>
              {currentRouteName === "Back" && (
                <span className="text-[#c1c5e0] text-md font-medium font-['Mulish']">
                  {" "}
                </span>
              )}
              <span className="text-[#3395ff] text-md font-medium font-['Mulish']">
                {currentRouteName === "Back" ? currentUser?.user?.name : ""}
              </span>
            </div>
      </div>
          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* Notification Icon */}
            <div className="h-10 p-0.5 justify-center items-center gap-2 inline-flex relative">


            </div>
            <div onClick={() => setOpenModal(true)} className="h-10 p-2 cursor-pointer justify-center items-center gap-1 inline-flex">
            <div className="flex cursor-pointer md:order-2">
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold"
                    style={{ width: '40px', height: '40px' }}
                  >
                    {currentUser.user?.name?.charAt(0).toUpperCase()}
                  </div>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{currentUser.user?.name}</span>
                  <span className="block truncate text-sm font-medium">{currentUser.user.email}</span>
                </Dropdown.Header>
                <Link to="/dashboard">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
                <Link to="/settings">
                <Dropdown.Item>Settings</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </div>

          </div>
          </div>
        </div>
      </div>
      {openModal && (
        <ProfileModal
          onClose={() => setOpenModal(false)}
        />
      )}
    </nav>
  );
}
