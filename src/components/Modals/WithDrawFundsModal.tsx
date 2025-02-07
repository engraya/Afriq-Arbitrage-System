

type WithdarawModalProps = {
    onClose: () => void;
  };

function WithDrawFundsModal({ onClose } : WithdarawModalProps) {
  return (
<div className="fixed inset-0 z-50 flex items-center p-4 justify-center bg-[#9c9ea8] bg-opacity-50 transition duration-700 ease-in-out">
<div className="w-[600px] h-[539px] pb-8 bg-white rounded-xl flex-col justify-start items-start inline-flex">
    <div className="self-stretch px-4 pt-6 pb-3 bg-[#d2d4dd] rounded-tl-xl rounded-tr-xl border-b border-[#dcdfea] justify-center items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-[#202b3c] text-lg font-bold font-['Mulish'] leading-[27px]">Withdraw Funds</div>
        <div onClick={onClose} className="w-[27.26px] cursor-pointer h-[27px] px-[2.27px] py-[2.25px] justify-center items-center flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45232 0.249023H16.2995C20.1498 0.249023 22.728 2.92652 22.728 6.90902V16.1014C22.728 20.0726 20.1498 22.749 16.2995 22.749H6.45232C2.60203 22.749 0.0124512 20.0726 0.0124512 16.1014V6.90902C0.0124512 2.92652 2.60203 0.249023 6.45232 0.249023ZM14.789 14.8743C15.1752 14.493 15.1752 13.8742 14.789 13.4917L12.7673 11.4892L14.789 9.48559C15.1752 9.10422 15.1752 8.47422 14.789 8.09172C14.4028 7.70809 13.7782 7.70809 13.3806 8.09172L11.3703 10.0931L9.34861 8.09172C8.95109 7.70809 8.32641 7.70809 7.94025 8.09172C7.55408 8.47422 7.55408 9.10422 7.94025 9.48559L9.96194 11.4892L7.94025 13.4805C7.55408 13.8742 7.55408 14.493 7.94025 14.8743C8.13333 15.0656 8.39456 15.168 8.64443 15.168C8.90566 15.168 9.15553 15.0656 9.34861 14.8743L11.3703 12.8842L13.392 14.8743C13.5851 15.078 13.8349 15.168 14.0848 15.168C14.346 15.168 14.5959 15.0656 14.789 14.8743Z" fill="#6E7180"/>
            </svg>
        </div>
    </div>
    <div className="self-stretch h-[444px] px-8 pt-8 pb-6 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch h-[108px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Select Network</div>
                </div>
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                            <div className='w-full'>
                            <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>TRC 20 (Recommended)</option>
                                <option value="SL">Solana</option>
                                <option value="ETH">Etherium</option>
                            </select>
                            </div>
                        </div>
                <div className="self-stretch text-[#26282d] text-sm font-normal font-['Mulish'] leading-snug">Network fee: $1.00</div>
            </div>
        </div>
        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                    <div className="text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Wallet Address</div>
                </div>
                <div className="self-stretch h-[78px] flex-col justify-start items-start gap-2 flex">
                            <div className='w-full'>
                            <input 
                                type="email"
                                id="email"
                                className="text-gray-900 text-sm self-stretch h-12 px-5 py-[13px] bg-white rounded border border-[#dcdfea] justify-start items-center gap-4  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                                placeholder="Enter your USDT wallet address"
                                required
                             />
                            </div>
                        </div>
            </div>
        </div>
        <div className="self-stretch h-[74px] flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch h-12 flex-col justify-start items-start gap-2 flex">
                                <div className="w-full">
                                    <div className="relative w-full">
                                        {/* Country Code Div */}
                                        <div className="absolute inset-y-0 left-3 flex items-center gap-2">
                                            <div className="h-[22px] cursor-pointer px-2 bg-[#e1e3ef] rounded flex items-center gap-2">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-5 h-3 flex justify-center items-center relative">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M17.5217 8.33766L15.5847 4.52182C15.2054 3.76974 14.1965 3.16016 13.341 3.16016H6.02883C5.17333 3.16016 4.16447 3.76974 3.78515 4.52182L1.84814 8.33766C1.38003 9.25599 1.6383 10.5622 2.40503 11.251L7.99812 16.2306C8.92626 17.0539 10.4355 17.0539 11.3636 16.2306L16.9567 11.251C17.7315 10.5622 17.9898 9.24807 17.5217 8.33766ZM12.9132 7.82307H10.2902V11.9793C10.2902 12.3039 10.0158 12.5731 9.68491 12.5731C9.35401 12.5731 9.0796 12.3039 9.0796 11.9793V7.82307H6.45659C6.12568 7.82307 5.85127 7.55391 5.85127 7.22932C5.85127 6.90474 6.12568 6.63557 6.45659 6.63557H12.9132C13.2441 6.63557 13.5186 6.90474 13.5186 7.22932C13.5186 7.55391 13.2441 7.82307 12.9132 7.82307Z" fill="#202B3C"/>
                                                    </svg>
                                                    </div>
                                                    <div className="text-[#8689aa] text-xs font-medium font-['Mulish'] leading-tight">
                                                        USDT
                                                    </div>
                                                </div>
                                                <div className="w-3 h-3 flex justify-center items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="8"
                                                        height="4"
                                                        viewBox="0 0 8 4"
                                                        fill="none"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M7.69723 0.299836C7.79623 0.398837 7.79623 0.559348 7.69723 0.658349L4.65516 3.70043C4.55616 3.79943 4.39564 3.79943 4.29664 3.70043L1.25457 0.658349C1.15557 0.559348 1.15557 0.398837 1.25457 0.299836C1.35357 0.200836 1.51408 0.200836 1.61308 0.299836L4.4759 3.16266L7.33872 0.299836C7.43772 0.200836 7.59823 0.200836 7.69723 0.299836Z"
                                                            fill="#8689AA"
                                                            stroke="#8689AA"
                                                            stroke-width="0.403541"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            id="amount"
                                            className="text-gray-900 text-sm self-stretch h-12 pl-28 pr-16 py-[13px] bg-white rounded border border-[#dcdfea] block w-full dark:bg-gray-700 dark:border-gray-600"
                                            placeholder="Enter Amount"
                                            required
                                        />
                                        {/* MAX Span */}
                                        <span className="absolute inset-y-0 right-3 flex items-center text-[#2a77ea] text-base font-medium font-['Mulish']">
                                            MAX
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[22px] justify-start items-start gap-2 inline-flex">
                            <div className="text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Available Balance:</div>
                            <div className="text-[#202b3c] text-sm font-bold font-['Mulish'] leading-snug">800 USDT</div>
                        </div>
                        </div>
        <button onClick={onClose} className="self-stretch cursor-pointer px-6 py-4 bg-[#137af0] rounded justify-center items-center inline-flex overflow-hidden">
            <div className="justify-center items-center gap-2 flex">
                <div className="text-white text-base font-medium font-['Mulish']">Confirm withdrawal</div>
            </div>
        </button>
    </div>
</div>
</div>

  )
}

export default WithDrawFundsModal 