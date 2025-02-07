
function Card() {
  return (
<div className="px-6 py-7 bg-[#f4f5f9] rounded-xl border border-[#dcdfea] flex-col justify-start items-start gap-5 inline-flex overflow-hidden">
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
        <div className="p-[9.60px] bg-[#dcdfea] rounded justify-center items-center gap-[9.60px] flex overflow-hidden">
            <div className="w-[28.80px] h-[28.80px] justify-center items-center flex">
                <div className="w-[28.80px] h-[28.80px] relative">
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="text-[#6e7080] text-lg font-normal font-['Mulish'] leading-[28.80px]">Total Earnings</div>
            </div>
            <div className="self-stretch justify-start items-baseline gap-2 inline-flex">
                <div className="grow shrink basis-0 text-3xl text-[28px] font-extrabold font-['Mulish']">300 USDT</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Card