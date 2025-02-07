import { logo } from "../../assets";
import Wrapper from "../../components/Wrapper/Wrapper"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { apiClient } from "../../api/axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
interface ChangePasswordPayload {
  email: string;
  oldPassword: string;
  newPassword: string;
}

function ChangePassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const currentUser = useSelector((state: any) => state.auth.currentUser);
  const email = currentUser?.user?.email;

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevState) => !prevState);
  };

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword((prevState) => !prevState);
  };

  const redirectToLogin = () => {
    navigate("/auth");
  };

  // Change password mutation
  const changePasswordMutation = useMutation(
    async (payload: ChangePasswordPayload) => {
      const response = await apiClient.post("/auth/change-password", payload);
      return response.data;
    },
    {
      onSuccess: () => {
        toast.success("Password changed successfully!");
        redirectToLogin();
      },
      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message || "Failed to change password"
        );
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!oldPassword.trim() || !newPassword.trim()) {
      toast.error("All fields are required.");
      return;
    }

    changePasswordMutation.mutate({
      email,
      oldPassword,
      newPassword,
    });
  };
  return (
    <Wrapper>
<div className="w-full md:w-[588px] justify-center items-start gap-8 inline-flex overflow-hidden">
    <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
    <div className="w-[93.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[100px]" src={logo} alt="logo" />
            </div>
        </div>
        <div className="self-stretch px-4 pt-11 pb-12 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[55px] flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-gray-900 text-xl font-bold font-['Mulish']">Change Password</div>
                <div className="self-stretch text-center text-[#6e7080] text-sm font-normal font-['Mulish'] leading-snug">Enter a new password for your account.</div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-10 flex">
                <form onSubmit={handleSubmit} className="self-stretch flex-col justify-start items-start gap-4 flex">
                           <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                                      <div className="w-full relative">
                                      <label
                                          htmlFor="password"
                                          className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug"
                                      >
                                          New Password
                                      </label>
                                      <div className="w-full relative">
                                          {/* Input Field */}
                                          <input
                                          type={showOldPassword ? "text" : "password"}
                                          id="oldPassword"
                                          value={oldPassword}
                                          onChange={(e) => setOldPassword(e.target.value)}
                                          className="text-[#6e7080] text-sm self-stretch h-12 px-5 bg-white rounded border border-[#e1e3ef] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Please Enter new password"
                                          required
                                          />
                                          {/* Icon */}
                                          <div onClick={toggleOldPasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                                          {showOldPassword ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                           <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                                      <div className="w-full relative">
                                      <label
                                          htmlFor="confirmPassword"
                                          className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug"
                                      >
                                          Confirm Password
                                      </label>
                                      <div className="w-full relative">
                                          {/* Input Field */}
                                          <input
                                        type={showNewPassword ? "text" : "password"}
                                          id="newPassword"
                                          value={newPassword}
                                          onChange={(e) => setNewPassword(e.target.value)}
                                          className="text-[#6e7080] text-sm self-stretch h-12 px-5 bg-white rounded border border-[#e1e3ef] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Please Confirm new password again"
                                          required
                                          />
                                          {/* Icon */}
                                          <div onClick={toggleNewPasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                                          {showNewPassword  ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                                          </div>
                                      </div>
                                      </div>
                                  </div>
                                  <div className="w-full flex-col justify-start items-start gap-4 flex">
                    <button 
                        type="submit"
                        disabled={!oldPassword || !newPassword || changePasswordMutation.isLoading}
                        className="self-stretch px-11 py-4 bg-[#e1e3ef] cursor-pointer text-[#6e7080] hover:bg-[#2a77ea] hover:text-white rounded justify-center items-center inline-flex overflow-hidden"
                    >
                        <div className="justify-center items-center gap-2 flex">
                            <div className="text-[#6e7080] hover:text-white text-base font-medium font-['Mulish']">
                            {changePasswordMutation.isLoading
                        ? <Spinner/>
                        : "Change Password"}
                            </div>
                        </div>
                    </button>
                </div>
                </form>

            </div>
        </div>
    </div>
</div>
    </Wrapper>

  )
}

export default ChangePassword
