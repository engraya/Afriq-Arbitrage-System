import Wrapper from "../../components/Wrapper/Wrapper"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { logo } from "../../assets";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { apiClient } from "../../api/axios";
import { Spinner } from "flowbite-react";




function VerifyEmailPage() {

    const [showCode, setShowCode] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      code: "",
    });
    const navigate = useNavigate();

  
    const togglePasswordVisibility = () => {
      setShowCode((prevState) => !prevState);
    };

  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
    };
  
    // Mutation for verifying the email and code
    const mutation = useMutation(
      async (data: typeof formData) => {
        const response = await apiClient.post("/verify-email", data);
        return response.data;
      },
      {
        onSuccess: (_data) => {
          toast.success("Email verified successfully! Redirecting to login...");
          navigate("/auth/login"); // Redirect to login after successful verification
        },
        onError: (error: any) => {
          const errorMessage =
            error.response?.data?.message || "Invalid code. Please try again.";
          toast.error(errorMessage);
        },
      }
    );
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, code } = formData;
  
      // Validate form data
      if (!email || !code) {
        toast.error("Email and code are required.");
        return;
      }
  
      // Trigger the mutation
      mutation.mutate({ email, code });
    };


  return (
    <Wrapper>
      <div className="w-full md:w-[588px] flex-col justify-start items-center gap-8 inline-flex">
      <div className="w-[93.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[100px]" src={logo} alt="logo" />
            </div>
        </div>
             <div className="self-stretch px-4 pt-11 pb-12 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-8 flex">
                 <div className="self-stretch h-[25px] flex-col justify-start items-center gap-2 flex">
                     <div className="text-center text-gray-900 text-lg font-bold font-['Mulish']">Verify your account to Login</div>
                 </div>
                 <form onSubmit={handleSubmit} className="self-stretch flex-col justify-start items-start gap-8 flex">
                     <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                         <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                             <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                                 <div className='w-full'>
                                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug dark:text-white">Email address</label>
                                 <input 
                                     type="email"
                                     id="email"
                                     value={formData.email}
                                     onChange={handleChange}
                                     className="text-white text-sm self-stretch h-12 px-5 py-[13px] bg-[#11141c] rounded border border-[#3395ff] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                                     placeholder="Email address"
                                     required
                                  />
                                 </div>
                             </div>
                             <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                             <div className="w-full relative">
                             <label
                                 htmlFor="code"
                                 className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug"
                             >
                                Code
                             </label>
                             <div className="w-full relative">
                                 {/* Input Field */}
                                 <input
                                 type={showCode ? "text" : "password"}
                                 id="code"
                                 value={formData.code}
                                 onChange={handleChange}
                                 className="text-white text-sm self-stretch h-12 px-5 bg-[#11141c] rounded border border-[#3395ff] focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                 placeholder="Code"
                                 required
                                 />
                                 {/* Icon */}
                                 <div onClick={togglePasswordVisibility} className="absolute inset-y-0 right-4 flex items-center cursor-pointer">
                                 {showCode ? <FaRegEye size={18} color='#C1C5E0'/> : <FaRegEyeSlash size={18} color='#C1C5E0'/>}
                                 </div>
                             </div>
                             </div>
                             </div>
                         </div>
                     </div>
                     <button  className="self-stretch px-11 py-4 bg-[#e1e3ef] hover:bg-[#2a77ea] rounded justify-center items-center inline-flex overflow-hidden">
                         <div className="justify-center items-center gap-2 flex">
                             <div className="text-[#6e7080] hover:text-white  text-base font-medium font-['Mulish']">
                             {mutation.isLoading ?  <Spinner/>  : "Verify"}
                             </div>
                         </div>
                     </button>
                 </form>
             </div>
         </div>
    </Wrapper>

  )
}

export default VerifyEmailPage
