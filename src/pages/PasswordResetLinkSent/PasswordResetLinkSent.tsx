import PagesWrapper from '../../components/PagesWrapper'
import { useNavigate } from "react-router-dom"
import { logo } from '../../assets';
function PasswordResetLinkSent() {
    const navigate = useNavigate();

    const redirectToVerify = () => {
      navigate("/auth/verify-email")
    }

  return (
    <PagesWrapper>
    <div className="flex-col md:w-[588px] -mt-48 justify-center mx-auto items-center gap-8 inline-flex min-h-screen">
    <div className="w-[93.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] justify-center items-center inline-flex">
      <div className="relative flex-col justify-start items-start flex">
          <img className="w-[100px]" src={logo} alt="logo" />
      </div>
  </div>
<div className="self-stretch px-12 pt-11 pb-10 bg-[#f4f5f9] rounded-2xl flex-col justify-start items-start gap-8 flex">
  <div className="self-stretch h-[77px] flex-col justify-start items-center gap-8 flex">
      <div className="self-stretch h-[77px] flex-col justify-start items-center gap-2 flex">
          <div className="text-center text-[#07070a] text-xl font-bold font-['Mulish']">Password reset link sent</div>
          <div className="text-center"><span className="text-[#6e7080] text-sm font-normal font-['Mulish'] leading-snug">A password reset link has been sent to </span><span className="text-[#747ced] text-sm font-normal font-['Mulish'] underline leading-snug">netivop234@daypey.com</span><span className="text-[#6e7080] text-sm font-normal font-['Mulish'] leading-snug">, please click on the link attached to verify your account. If email can’t be found, please make sure to check the spam folder of your email application </span></div>
      </div>
  </div>
  <div className="self-stretch flex justify-center items-center mt-4 gap-4">
      <button onClick={redirectToVerify} className="self-stretch px-11 cursor-pointer py-4 rounded border border-[#137af0] hover:bg-[#c1c5e0]  justify-center items-center inline-flex overflow-hidden">
          <div className="justify-center items-center gap-2 flex">
              <div className="text-[#137af0] text-base font-medium font-['Mulish']">Resend Link</div>
          </div>
      </button>
      <button onClick={redirectToVerify} className="self-stretch px-11 cursor-pointer bg-[#137af0] py-4 rounded border border-[#137af0] hover:bg-[#c1c5e0]  justify-center items-center inline-flex overflow-hidden">
          <div className="justify-center items-center gap-2 flex">
              <div className="text-white text-base font-medium font-['Mulish']">Done</div>
          </div>
      </button>
  </div>
</div>
</div>
</PagesWrapper>
  )
}

export default PasswordResetLinkSent