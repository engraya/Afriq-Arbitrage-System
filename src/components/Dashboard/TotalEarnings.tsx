import { wallet } from "../../assets"
import { FaPlus } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import WithDrawFundsModal from "../Modals/WithDrawFundsModal";
function TotalEarnings() {

    
      const [openModal, setOpenModal] = useState(false);


  return (
    <div className="max-w-[460px] px-6 py-7 bg-[#f4f5f9] rounded-xl border border-black/10 justify-start items-end gap-5 inline-flex overflow-hidden">
    <div className="grow shrink basis-0 justify-start items-start gap-4 flex">
        <div className="w-12 pl-[7.20px] pr-[7.41px] py-[9.60px] bg-[#dcdfea] rounded-lg justify-center items-center flex overflow-hidden">
            <div className="w-[33.39px] relative flex-col justify-start items-start flex overflow-hidden">
                <div className="w-[27.06px] px-[2.26px] py-[3px] justify-center items-center inline-flex">
                    <img className="w-[22.55px] h-[18px]" src={wallet} />
                </div>
            </div>
        </div>
        <div className="justify-start items-center gap-4 flex">
            <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-[#6e7080] text-xs  font-medium font-['Mulish'] leading-relaxed">Available Balance</div>
                    <div className="w-6 h-6 px-[1.28px] py-[5.25px] justify-center items-center flex overflow-hidden">
                    <IoEye color="#6b708a" size="1.5rem"/>
                    </div>
                </div>
                <div className="self-stretch flex-col justify-center items-start gap-2 flex">
                    <div className="justify-start items-baseline gap-6 inline-flex">
                        <div className="justify-start items-baseline gap-2 flex">
                            <div className="text-[#07070a] text-[32px] font-bold font-['Mulish']">500</div>
                            <div className="text-[#07070a] text-base font-medium font-['Mulish'] leading-relaxed">USDT</div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="justify-start items-baseline gap-2 flex">
                            <div className="text-[#00b86b] text-base font-normal font-['Mulish']">+ 300,000</div>
                        </div>
                        <div className="p-1 bg-[#e1e3ef] rounded-sm justify-start items-center gap-2 flex">
                            <div className="text-[#26282d] text-xs font-normal font-['Mulish'] leading-tight">24h</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-3 gap-2 lg:hidden">
                <button disabled className="px-4 py-3 bg-[#6b708a] cursor-pointer rounded justify-center items-center flex overflow-hidden">
                    <div className="justify-center items-center gap-2 flex">
                        <FaPlus color="white" />
                        <div className="text-white text-sm font-medium font-['Mulish'] leading-snug">Deposit</div>
                    </div>
                </button>
                <button onClick={() => setOpenModal(true)} className="px-6 py-3 rounded border border-[#0076f4] cursor-pointer justify-center items-center flex overflow-hidden">
                    <div className="justify-center items-center gap-2 flex">
                        <div className="text-[#0076f4] text-sm font-medium font-['Mulish'] leading-snug">Withdraw</div>
                    </div>
                </button>
            </div>
            </div>
        </div>
    </div>
    <div className="justify-start items-start gap-2 lg:flex hidden">
        <button disabled className="px-4 py-3 bg-[#137af0] cursor-pointer rounded justify-center items-center flex overflow-hidden">
            <div className="justify-center items-center gap-2 flex">
                <FaPlus color="white" />
                <div className="text-white text-sm font-medium font-['Mulish'] leading-snug">Deposit</div>
            </div>
        </button>
        <button onClick={() => setOpenModal(true)} className="px-6 py-3 rounded border border-[#0076f4] cursor-pointer justify-center items-center flex overflow-hidden">
            <div className="justify-center items-center gap-2 flex">
                <div className="text-[#0076f4] text-sm font-medium font-['Mulish'] leading-snug">Withdraw</div>
            </div>
        </button>
    </div>
          {/* Logout Modal */}
          {openModal && (
            <div className="transition duration-700 ease-in-out">
        <WithDrawFundsModal
          onClose={() => setOpenModal(false)}
        />
            </div>

      )}
</div>
  )
}

export default TotalEarnings