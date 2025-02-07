
type LogoutModalProps = {
    onClose: () => void;
    onConfirm: () => void;
  };

function LogoutModal({ onClose, onConfirm } : LogoutModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center p-4 justify-center bg-[#f4f5f9] bg-opacity-50">
      <div className="w-[450px] px-8 py-10 bg-[#818391] rounded-xl shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)] p-6 text-center">
        <div className="flex flex-col">

    <div className="self-stretch h-[239px] flex-col justify-start items-center gap-10 flex">
        <div className="w-24 h-24 relative">
            <div className="w-[85.51px] h-[85.51px] left-[5.24px] top-[5.42px] absolute bg-gradient-to-b from-[#444968] rounded-full" />
            <div className="w-[66.91px] h-[66.91px] pl-[9.45px] pr-[9.46px] py-[9.45px] left-[14.54px] top-[14.55px] absolute rounded-[68.30px] border-2 border-[#7e84a9] justify-center items-center inline-flex overflow-hidden">
                <div className="grow shrink basis-0 self-stretch p-[2.50px] justify-center items-center inline-flex overflow-hidden">
                    <div className="w-[43px] h-[43px] relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                        <circle cx="21.998" cy="22.001" r="21.5" fill="#EBB059"/>
                        <path d="M24 13.002C24 14.1065 23.1046 15.002 22 15.002C20.8954 15.002 20 14.1065 20 13.002C20 11.8974 20.8954 11.002 22 11.002C23.1046 11.002 24 11.8974 24 13.002Z" fill="#FFF7EB"/>
                        <path d="M20 19.002C20 17.8974 20.8954 17.002 22 17.002C23.1046 17.002 24 17.8974 24 19.002V31.002C24 32.1065 23.1046 33.002 22 33.002C20.8954 33.002 20 32.1065 20 31.002V19.002Z" fill="#FFF7EB"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch h-[103px] px-10 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[27px] flex-col justify-start items-center gap-2 flex">
                <div className="w-[372px] text-center text-white text-xl font-medium font-['Mulish']">Are you sure you want to logout?</div>
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <button onClick={onClose} className="grow shrink basis-0 h-[52px] px-11 cursor-pointer py-4 bg-[#2a314d] rounded justify-center items-center flex overflow-hidden">
                    <div className="justify-center items-center gap-2 flex">
                        <div className="text-[#d8daeb] text-base font-medium font-['Mulish']">Cancel</div>
                    </div>
                </button>
                <button  onClick={onConfirm} className="grow shrink basis-0 h-[52px] px-11 py-4 cursor-pointer bg-[#ff7576] rounded justify-center items-center flex overflow-hidden">
                    <div className="justify-center items-center gap-2 flex">
                        <div className="text-white text-base font-medium font-['Mulish']">Logout</div>
                    </div>
                </button>
            </div>
        </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal