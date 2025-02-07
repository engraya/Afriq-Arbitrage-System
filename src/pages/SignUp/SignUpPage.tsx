import Wrapper from "../../components/Wrapper/Wrapper"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { apiClient } from "../../api/axios";
import { Spinner } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setEmailForVerification } from "../../store/reducers/auth";
import { logo } from "../../assets";
function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    // Mutation for register API
    const mutation = useMutation(
      async (data: typeof formData) => {
        const response = await apiClient.post(
          "/auth/register",
          data
        );
        console.log("Registration Response!", response);
        return response.data;
      },
      {
        onSuccess: (data) => {
          toast.success("Registration successful! Please verify your email.");
          dispatch(setEmailForVerification(data.user.email)); // Dispatch the email
          navigate("/auth/verify"); // Redirect to email verification page
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.message || "Something went wrong.";
          toast.error(errorMessage);
        },
      }
    );
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, email, password } = formData;
  
      // Validate form data
      if (!name || !email || !password) {
        toast.error("All fields are required.");
        return;
      }
  
      // Trigger the mutation
      mutation.mutate({ name, email, password });
    };


  return (
    <Wrapper>
<div className="flex-col md:w-[588px] justify-start items-center gap-8 inline-flex">
<div className="w-[93.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[100px]" src={logo} alt="logo" />
            </div>
        </div>
    <div className="self-stretch px-4 pt-6 pb-10 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-6 flex overflow-hidden">
        <div className="self-stretch h-[30px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch text-center text-gray-900 text-lg whitespace-nowrap md:text-2xl font-bold font-['Mulish']">Create your AAS Account</div>
        </div>
        <form onSubmit={handleSubmit} className="self-stretch flex-col justify-start items-start gap-10 flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                    <div className='w-full'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white font-['Mulish'] leading-snug dark:text-white"><div><span className="text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Full Name </span><span className="text-[#3395ff] text-sm font-medium font-['Manrope'] leading-snug">*</span></div></label>
                    <input
                        type="text"
                        id="name"
                        className="text-gray-700 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#6e7080] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                        placeholder="Full Name"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                    </div>
                    <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                        <div className='w-full'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white font-['Mulish'] leading-snug dark:text-white"><div><span className="text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Email address </span><span className="text-[#3395ff] text-sm font-medium font-['Manrope'] leading-snug">*</span></div></label>
                        <input 
                            type="email"
                            id="email" 
                            name="email"
                            className="text-gray-700 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#6e7080] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
           
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
                            {/* Input Field */}
                            <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            className="text-gray-700 text-sm self-stretch h-12 px-5 bg-white rounded border border-[#6e7080]  block w-full dark:bg-gray-700 dark:border-gray-600"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
              
                            />
                            {/* Icon */}
                            <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                            {showPassword ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <button
                        type="submit"
                        className="grow shrink basis-0 h-[52px] cursor-pointer px-11 py-4 bg-[#e1e3ef] hover:bg-[#2a77ea] rounded justify-center items-center flex overflow-hidden group"
                        disabled={mutation.isLoading}
                    >
                        <div className="justify-center items-center gap-2 flex">
                            <div className="text-[#6e7080]  group-hover:text-white text-base font-medium font-['Mulish']">
                            {mutation.isLoading ?  <Spinner/>  : "Create account"}
                            </div>
                        </div>
                    </button>
                </div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-center"><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug">By creating an account, You acknowlege you agree to our </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">User Agreement</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug"> | </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">Privacy Policy</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug"> | </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">Acceptable Use</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug"> </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">Policy</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug">  | </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">Cookie Policy</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug"> | </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">E-Sign Consent</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug"> | </span><span className="text-[#6cabf2] text-sm font-medium font-['Mulish'] leading-snug">Risk Factors</span><span className="text-[#8689aa] text-sm font-medium font-['Mulish'] leading-snug">.</span></div>
                </div>
            </div>
        </form>
    </div>
    <div className="self-stretch justify-center items-center gap-2 inline-flex">
        <div className="text-center text-[#8689aa] text-sm font-normal font-['Mulish'] leading-snug">Already have an account?</div>
        <div className="px-6 py-3 rounded justify-center items-center flex overflow-hidden">
          <Link to="/auth">
          <div className="justify-center items-center gap-2 flex">
                <div className="text-[#3395ff] text-sm font-medium font-['Mulish'] leading-snug">Log in</div>
            </div>
          </Link>
        </div>
    </div>
</div>
    </Wrapper>

  )
}

export default SignUpPage
