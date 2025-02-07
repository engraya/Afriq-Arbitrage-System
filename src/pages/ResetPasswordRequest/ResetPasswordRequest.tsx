import Wrapper from "../../components/Wrapper/Wrapper"
import { logo } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { apiClient } from "../../api/axios";
import { Spinner } from "flowbite-react";


function ResetPasswordRequest() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
  
    const redirectToLogin = () => {
      navigate("/auth/login");
    };
  
    const redirectToSignUp = () => {
      navigate("/auth/sign-up");
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    // Mutation for sending reset password email
    const mutation = useMutation(
      async (data: { email: string }) => {
        const response = await apiClient.post("/auth/reset-password-link", data);
        return response.data;
      },
      {
        onSuccess: (_data) => {
          toast.success("Reset link sent! Check your email.");
          navigate("/auth/change-password"); // Redirect to change-password page
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
  
      // Validate email
      if (!email) {
        toast.error("Email is required.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
  
      // Trigger the mutation
      mutation.mutate({ email });
    };
  
  return (
    <Wrapper>
<div className="flex-col justify-start items-center gap-8 inline-flex">
<div className="w-[93.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
            <div className="relative flex-col justify-start items-start flex">
                <img className="w-[100px]" src={logo} alt="logo" />
            </div>
        </div>
    <div className="self-stretch px-8 pt-11 pb-12 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch h-[55px] flex-col justify-start items-center gap-2 flex">
            <div className="text-center  text-gray-900 text-lg  font-bold font-['Mulish']">Reset password</div>
            <div className="self-stretch text-center text-[#8689aa] text-sm font-normal font-['Mulish'] leading-snug">Enter your registered email to reset your password.</div>
        </div>
        <form onSubmit={handleSubmit} className="self-stretch h-[230px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[146px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                            <div className='w-full'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#202b3c] font-['Mulish'] leading-snug dark:text-white">Email address</label>
                            <input 
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleChange}
                                className="text-white text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#e1e3ef] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Email address"
                                required
                            />
                            </div>
                        </div>
                </div>
                <div className="w-full self-stretch justify-between items-center inline-flex">
                    <div className="text-center text-[#8689aa] text-sm font-normal font-['Mulish'] leading-snug">Remembered Password?</div>
                    <div className="px-3 py-3 rounded justify-center items-center flex overflow-hidden">
                        <div onClick={redirectToLogin} className="justify-center cursor-pointer items-center gap-2 flex">
                            <div className="text-[#6cabf2]   text-sm font-medium font-['Mulish'] leading-snug">Log in</div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" className="self-stretch px-11 py-4 bg-[#e1e3ef]  hover:bg-[#2a77ea] cursor-pointer rounded justify-center items-center inline-flex overflow-hidden">
                <div className="justify-center items-center gap-2 flex">
                    <div className="text-[#6e7080] hover:text-white text-base font-medium font-['Mulish']">
                    {mutation.isLoading ? <Spinner/> : "Send reset link"}
                    </div>
                </div>
            </button>
        </form>
    </div>
    <div className="justify-center items-center gap-2 inline-flex">
        <div className="text-center text-[#8689aa] text-sm font-normal font-['Mulish'] leading-snug">Don’t have an account?</div>
        <div className="px-6 py-3 rounded justify-center items-center flex overflow-hidden">
            <div onClick={redirectToSignUp} className="justify-center cursor-pointer items-center gap-2 flex">
                <div className="text-[#3395ff] text-sm font-medium font-['Mulish'] leading-snug">Create account</div>
            </div>
        </div>
    </div>
</div>
    </Wrapper>

  )
}

export default ResetPasswordRequest
