import { useNavigate } from "react-router-dom"
import { brandIcon } from '../../assets'
function VerifyEmailModal() {

    const navigate = useNavigate()

    const redirectToLogin = () => {
      navigate("/auth/login")
    }
  
  return (
    <div className="flex-col justify-start items-center gap-8 inline-flex">
    <div className="w-[63.14px] h-14 pl-[5.60px] pr-[5.74px] pt-[1.40px] pb-[2.80px] justify-center items-center inline-flex">
        <div className="w-full max-w-[51.80px] h-[51.80px] relative flex-col justify-start items-start flex">
            <img className="w-[41.44px] h-[41.44px]" src={brandIcon} alt="logo" />
        </div>
    </div>
    <div className="self-stretch px-12 pt-11 pb-12 bg-[#181e33] rounded-2xl flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch h-[77px] flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[77px] flex-col justify-start items-center gap-2 flex">
                <div className="text-center text-white text-xl font-normal font-['Mulish']">Verify Email</div>
                <div className="self-stretch text-center text-[#c1c5e0] text-sm font-normal font-['Mulish'] leading-snug">Check your email netivop234@daypey.com and click on the verification link to complete registration!</div>
            </div>
        </div>
        <div className="self-stretch flex-col mt-4 justify-start items-start gap-4 flex">
            <button onClick={redirectToLogin} className="self-stretch px-11 py-4 rounded border border-[#2a77ea] hover:bg-[#c1c5e0]  justify-center items-center inline-flex overflow-hidden">
                <div className="justify-center items-center gap-2 flex">
                    <div className="text-[#2a77ea]  text-base font-medium font-['Mulish']">Back to Login</div>
                </div>
            </button>
        </div>
    </div>
</div>
  )
}

export default VerifyEmailModal
