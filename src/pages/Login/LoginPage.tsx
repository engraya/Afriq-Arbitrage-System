import Wrapper from '../../components/Wrapper/Wrapper'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useMutation } from "react-query";
import { toast } from 'react-toastify';
import { apiClient } from '../../api/axios';
import { useDispatch } from "react-redux";
import { loginUser } from '../../store/reducers/auth';
import { Spinner } from 'flowbite-react';
import { logo } from '../../assets';
function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const redirectToResetPassword = () => {
      navigate("/auth/request-reset-password");
    };
    
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    // Mutation for login API
    const mutation = useMutation(
      async (data: typeof formData) => {
        const response = await apiClient.post(
          "/auth/login",
          data
        );
        return response.data;
      },
      {
        onSuccess: (data) => {
          toast.success('Login successful!!...', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
          dispatch(loginUser(data));
          navigate("/"); 
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.message;
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
          navigate("/");
        },
      }
    );
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, password } = formData;
  
      // Validate form data
      if (!email || !password) {
        toast.error("Email and password are required.");
        return;
      }
  
      // Trigger the mutation
      mutation.mutate({ email, password });
    };
  return (
    <Wrapper>
    <div className="w-full md:w-[588px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="w-[93.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[100px]" src={logo} alt="logo" />
            </div>
        </div>
        <div className="self-stretch h-[521px] px-4 pt-11 pb-12 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[25px] flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-[#07070a] text-xl font-bold font-['Mulish']">Sign in to your account</div>
            </div>
            <form  onSubmit={handleSubmit} className="self-stretch h-[372px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-72 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[220px] flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                            <div className='w-full'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug dark:text-white">Email address</label>
                            <input 
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="text-gray-700 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#6e7080] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Email address"
                                required
                             />
                            </div>
                        </div>
                        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                        <div className="w-full relative">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug"
                        >
                            Password
                        </label>
                        <div className="w-full relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="text-gray-700 text-sm self-stretch h-12 px-5 bg-white rounded border border-[#6e7080] block w-full dark:bg-gray-700 dark:border-gray-600"
                            placeholder="Password"
                            required
                            />
                          <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                            {showPassword ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                          </div>
                        </div>
                        </div>
                        </div>
                        <div className="justify-start items-center gap-2 inline-flex">
                        <div className="flex items-center">
                            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 border border-[#2a77ea] rounded "/>
                            <label htmlFor="default-checkbox" className="ms-2 text-[#07070a] text-sm  font-['Mulish'] leading-snug font-medium dark:text-gray-300">Remember me on this device</label>
                        </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-2 inline-flex">
                        <div className="text-center text-[#6e7080] text-sm font-normal font-['Mulish'] leading-snug">Forgot Password?</div>
                        <div className="px-6 py-3 rounded justify-center items-center flex overflow-hidden">
                            <div onClick={redirectToResetPassword} className="justify-center cursor-pointer items-center gap-2 flex">
                                <div className="text-[#62aafc] text-sm font-medium font-['Mulish'] leading-snug">Reset it here</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                  disabled={mutation.isLoading}
                  className="self-stretch px-11 py-4 bg-[#e1e3ef] hover:bg-[#137af0] rounded justify-center cursor-pointer items-center inline-flex overflow-hidden group"
                >
                  <div className="justify-center items-center gap-2 flex">
                    <div className="text-[#6e7080] group-hover:text-white text-base font-medium font-['Mulish']">
                      {mutation.isLoading ? <Spinner /> : "Log in"}
                    </div>
                  </div>
              </button>

            </form>
        </div>
        <div className="justify-center items-center gap-2 inline-flex">
            <div className="text-center text-[#202b3c] text-sm font-normal font-['Mulish'] leading-snug">Don’t have an account?</div>
            <div className="px-6 py-3 rounded justify-center cursor-pointer items-center flex overflow-hidden">
              <div onClick={() => navigate("/auth/sign-up")} className="justify-center items-center gap-2 flex">
                    <div className="text-[#3395ff] text-sm font-medium font-['Mulish'] leading-snug">Create account</div>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>

  )
}

export default LoginPage
