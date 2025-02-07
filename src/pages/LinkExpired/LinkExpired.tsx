import PagesWrapper from '../../components/PagesWrapper'
import { useNavigate } from "react-router-dom"
import { logo } from '../../assets'


function LinkExpired() {
    const navigate = useNavigate();

    const redirectToVerify = () => {
      navigate("/auth/login")
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
          <div className="text-center text-[#07070a] text-xl font-bold font-['Mulish']">Verify Email</div>
          <div className="text-center text-[#6e7080] text-sm font-normal font-['Mulish'] leading-snug">This link has expired. Please check your inbox for the most recent link.</div>
      </div>
  </div>
  <div className="self-stretch flex-col justify-start items-start gap-4 flex">
      <button onClick={redirectToVerify} className="self-stretch px-11 cursor-pointer py-4 rounded border border-[#137af0] hover:bg-[#c1c5e0]  justify-center items-center inline-flex overflow-hidden">
          <div className="justify-center items-center gap-2 flex">
              <div className="text-[#137af0] text-base font-medium font-['Mulish']">Back to Login</div>
          </div>
      </button>
  </div>
</div>
</div>
</PagesWrapper>
  )
}

export default LinkExpired