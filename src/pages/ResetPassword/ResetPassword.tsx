
import Wrapper from '../../components/Wrapper/Wrapper'
import { whiteBrandLogo } from '../../assets'
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useSearchParams, useNavigate } from "react-router-dom";
import { apiClient } from '../../api/axios';
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { Spinner } from 'flowbite-react';
import { useEffect } from 'react';
function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [isVerified, setIsVerified] = useState(false);
  
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const email = searchParams.get("email");
    const token = searchParams.get("token");
  
    const togglePasswordVisibility = () => setShowPassword((prevState) => !prevState);
  
    // Verify reset link mutation
    const verifyResetLink = useMutation(
      async () => {
        const response = await apiClient.post("/auth/verify-reset-password-link", {
          email,
          token,
        });
        return response.data;
      },
      {
        onSuccess: () => {
          toast.success("Reset link verified! You can now reset your password.");
          setIsVerified(true);
        },
        onError: () => {
          toast.error("Invalid or expired reset link.");
          navigate("/auth", { replace: true });
        },
      }
    );
  
    // Reset password mutation
    const resetPasswordMutation = useMutation(
      async () => {
        const response = await apiClient.post("/auth/reset-password", {
          email,
          newPassword,
        });
        return response.data;
      },
      {
        onSuccess: () => {
          toast.success("Password reset successfully! Redirecting to login...");
          navigate("/auth/login", { replace: true });
        },
        onError: () => {
          toast.error("Failed to reset password. Please try again.");
        },
      }
    );
  
    // Verify the reset link when the component mounts
    useEffect(() => {
      if (email && token) {
        verifyResetLink.mutate();
      } else {
        toast.error("Invalid reset link.");
        navigate("/auth", { replace: true });
      }
    }, [email, token, verifyResetLink, navigate]);
  
    // Handle password reset form submission
    const handlePasswordReset = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      resetPasswordMutation.mutate();
    };


  return (
    <Wrapper>
    <div className="w-full md:w-[588px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-[63.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] pb-[2.80px] justify-center items-center inline-flex">
            <div className="w-[51.80px] h-[51.80px] relative flex-col justify-start items-start flex">
                <img className="w-[41.44px] h-[41.44px]" src={whiteBrandLogo} alt="logo" />
            </div>
        </div>
        <div className="self-stretch px-4 pt-11 pb-12 bg-[#181e33] rounded-2xl flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[25px] flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-white text-xl font-normal font-['Mulish']">Reset Password</div>
            </div>
            {isVerified ? (
              <>
                    <form onSubmit={handlePasswordReset} className="self-stretch  flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                            <div className='w-full'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#d8daeb] font-['Mulish'] leading-snug dark:text-white">Email address</label>
                            <input 
                                type="email"
                                value={email ?? ''}
                                readOnly
                                className="text-white text-sm self-stretch h-12 px-5 py-[13px] bg-[#11141c] rounded border border-[#3395ff] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Email address"
                             />
                            </div>
                        </div>
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                        <div className="w-full relative">
                        <label
                            htmlFor="newPassword"
                            className="block mb-2 text-sm font-medium text-[#d8daeb] font-['Mulish'] leading-snug"
                        >
                            New Password
                        </label>
                        <div className="w-full relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="text-white text-sm self-stretch h-12 px-5 bg-[#11141c] rounded border border-[#3395ff] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Password"
                            required
                            />
                          <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                            {showPassword ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                          </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <button className="self-stretch px-11 py-4 bg-[#2a77ea] rounded justify-center items-center inline-flex overflow-hidden">
                    <div className="justify-center items-center gap-2 flex">
                        <div className="text-white text-base font-medium font-['Mulish']">
                            {resetPasswordMutation.isLoading ? <Spinner/> : "Reset Password"}
                        </div>
                    </div>
                </button>
            </form>
              </>
            ) : (
              <>
              <div className='self-stretch flex-col justify-center items-centter gap-8 flex'>
            <Spinner/>
            <div className="text-white">Verifying reset link...</div>
            </div>
              </>
            )}
      
       
        </div>
    </div>
    </Wrapper>

  )
}

export default ResetPassword
