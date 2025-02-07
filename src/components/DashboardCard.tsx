
type CardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
}

function DashboardCard({ title, value, icon } : CardProps) {
  return (
<div className="px-6 py-7 bg-[#f4f5f9] rounded-xl border border-[#dcdfea] flex-col justify-center items-start gap-5 inline-flex overflow-hidden">
    <div className="self-stretch justify-start items-start gap-4 inline-flex">
    <div className="px-4 py-0.5 bg-[#dcdfea] rounded justify-center items-center flex overflow-hidden">
            <div className="w-[28.80px] h-[28.80px] justify-center items-center flex">
                <div className="w-[28.80px] h-[28.80px] relative">
                    {icon}
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="text-[#6e7080] text-md whitespace-nowrap font-normal font-['Mulish'] leading-[28.80px]">{title}</div>
            </div>
            <div className="justify-start items-baseline gap-2 inline-flex">
                <div className="text-[#07070a] whitespace-nowrap text-[28px] font-semibold font-['Mulish']">{value} USDT</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DashboardCard
