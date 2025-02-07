import { useSelector } from "react-redux";

type ProfileModalProps = {
    onClose: () => void;
  };


function ProfileModal({ onClose } : ProfileModalProps) {
    const currentUser = useSelector((state: any) => state.auth.currentUser);
  return (
<div className="fixed inset-0 z-50 flex flex-col items-center p-4 justify-center bg-[#9c9ea8] bg-opacity-50 transition duration-700 ease-in-out">
<div className="w-full max-w-[600px] px-8 py-4 bg-[#f4f5f9] rounded-tl-2xl rounded-tr-2xl border-b border-[#dcdfea] justify-end items-start gap-2 inline-flex">
    <div className="justify-start items-center gap-6 flex">
        <div className="justify-start items-center gap-4 flex">
            <div className="p-2 justify-center items-center gap-1 flex">
                <div onClick={onClose} className="w-6 cursor-pointer h-6 p-0.5 justify-center items-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45232 0.249023H16.2995C20.1498 0.249023 22.728 2.92652 22.728 6.90902V16.1014C22.728 20.0726 20.1498 22.749 16.2995 22.749H6.45232C2.60203 22.749 0.0124512 20.0726 0.0124512 16.1014V6.90902C0.0124512 2.92652 2.60203 0.249023 6.45232 0.249023ZM14.789 14.8743C15.1752 14.493 15.1752 13.8742 14.789 13.4917L12.7673 11.4892L14.789 9.48559C15.1752 9.10422 15.1752 8.47422 14.789 8.09172C14.4028 7.70809 13.7782 7.70809 13.3806 8.09172L11.3703 10.0931L9.34861 8.09172C8.95109 7.70809 8.32641 7.70809 7.94025 8.09172C7.55408 8.47422 7.55408 9.10422 7.94025 9.48559L9.96194 11.4892L7.94025 13.4805C7.55408 13.8742 7.55408 14.493 7.94025 14.8743C8.13333 15.0656 8.39456 15.168 8.64443 15.168C8.90566 15.168 9.15553 15.0656 9.34861 14.8743L11.3703 12.8842L13.392 14.8743C13.5851 15.078 13.8349 15.168 14.0848 15.168C14.346 15.168 14.5959 15.0656 14.789 14.8743Z" fill="#6E7180"/>
            </svg>
                </div>
            </div>
        </div>

    </div>
</div>
<div className="w-full max-w-[600px] pt-[52px] pb-8 bg-white rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-5 inline-flex">
    <div className="self-stretch rounded-xl flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch px-8 flex-col justify-start items-start gap-1 flex">
        <div
                    className="w-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold"
                    style={{ width: '40px', height: '40px' }}
                  >
     {currentUser.user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="self-stretch text-[#07070a] text-xl font-semibold font-['Mulish'] leading-7">{currentUser.user?.name}</div>
            <div className="self-stretch text-[#6e7080] text-sm font-normal font-['Mulish'] leading-normal">{currentUser.user?.email}</div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex" />
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch px-8 justify-between items-start inline-flex">
                            <div className="grow shrink basis-0 text-[#202b3c] text-sm font-semibold font-['Mulish'] leading-snug">Name</div>
                            <div className="justify-start items-start gap-4 flex">
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="self-stretch px-5 py-[13px] bg-white rounded border border-[#242538]/10 justify-start items-center gap-4 inline-flex">
                                        <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
                                            <div className="grow shrink basis-0 text-[#07070a] text-sm font-semibold whitespace-nowrap font-['Mulish'] leading-snug">{currentUser.user?.name}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="self-stretch px-5 py-[13px] bg-white rounded border border-[#242538]/10 justify-start items-center gap-4 inline-flex">
                                        <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
                                            <div className="grow shrink basis-0 text-[#07070a] text-sm font-semibold font-['Mulish'] leading-snug">Mulla</div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="self-stretch px-8 justify-between items-start inline-flex">
                            <div className="grow shrink basis-0 text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Email address</div>
                            <div className="justify-start items-start gap-4 flex">
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="self-stretch px-5 py-[13px] bg-gray-50 rounded border border-[#242538]/10 justify-start items-center gap-2.5 inline-flex">
                                        <div className="grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex">
                                            <div className="grow shrink basis-0 h-[22px] text-[#6e7080] text-sm font-normal font-['Mulish'] leading-snug">{currentUser.user?.email}</div>
                                        </div>
                                        <div  onClick={onClose} className="w-[18px] h-[18px] p-[1.50px] justify-center items-center flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45232 0.249023H16.2995C20.1498 0.249023 22.728 2.92652 22.728 6.90902V16.1014C22.728 20.0726 20.1498 22.749 16.2995 22.749H6.45232C2.60203 22.749 0.0124512 20.0726 0.0124512 16.1014V6.90902C0.0124512 2.92652 2.60203 0.249023 6.45232 0.249023ZM14.789 14.8743C15.1752 14.493 15.1752 13.8742 14.789 13.4917L12.7673 11.4892L14.789 9.48559C15.1752 9.10422 15.1752 8.47422 14.789 8.09172C14.4028 7.70809 13.7782 7.70809 13.3806 8.09172L11.3703 10.0931L9.34861 8.09172C8.95109 7.70809 8.32641 7.70809 7.94025 8.09172C7.55408 8.47422 7.55408 9.10422 7.94025 9.48559L9.96194 11.4892L7.94025 13.4805C7.55408 13.8742 7.55408 14.493 7.94025 14.8743C8.13333 15.0656 8.39456 15.168 8.64443 15.168C8.90566 15.168 9.15553 15.0656 9.34861 14.8743L11.3703 12.8842L13.392 14.8743C13.5851 15.078 13.8349 15.168 14.0848 15.168C14.346 15.168 14.5959 15.0656 14.789 14.8743Z" fill="#6E7180"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="self-stretch px-8 justify-between items-start inline-flex">
                            <div className="grow shrink basis-0 text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Phone number</div>
                            <div className="justify-start items-start gap-4 flex">
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="self-stretch px-5 py-[13px] bg-white rounded border border-[#242538]/10 justify-start items-center gap-4 inline-flex">
                                        <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
                                            <div className="self-stretch px-1 bg-[#444968]/5 rounded-sm justify-start items-center gap-[3.23px] flex">
                                                <div className="justify-start items-center gap-[3.23px] flex">
                                                    <div className="w-[19.37px] relative" />
                                                    <div className="text-[#6e7080] text-xs font-medium font-['Mulish'] leading-tight">+234</div>
                                                </div>
                                                <div className="w-[11.30px] px-[2.35px] pt-[3.88px] pb-[3.87px] justify-center items-center flex overflow-hidden" />
                                            </div>
                                            <div className="grow shrink basis-0 text-[#07070a] text-sm font-normal font-['Mulish'] leading-snug">80 300 0000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="self-stretch px-8 justify-between items-start inline-flex">
                            <div className="w-[183px] text-[#202b3c] text-sm font-medium font-['Mulish'] leading-snug">Profile photo</div>
                            <div className="h-14 justify-start items-start gap-4 flex">
                            <div
                    className="w-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold"
                    style={{ width: '40px', height: '40px' }}
                  >
     {currentUser.user?.name?.charAt(0).toUpperCase()}
            </div>
                                <div className="px-4 py-2 rounded border border-[#242538]/10 justify-center items-center flex overflow-hidden">
                                    <div className="justify-center items-center gap-2 flex">
                                        <div className="text-[#202b3c] text-xs whitespace-nowrap font-medium font-['Mulish'] leading-[20.80px]">Click to replace</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch px-8 justify-end items-start gap-2.5 inline-flex">
                        <button className="px-11 py-2 cursor-pointer rounded border border-[#dcdfea] justify-center items-center flex overflow-hidden">
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-[#26282d] text-base font-medium font-['Mulish']">Cancel</div>
                            </div>
                        </button>
                        <button className="px-11 py-2 bg-[#137af0] cursor-pointer rounded justify-center items-center flex overflow-hidden">
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-white text-base whitespace-nowrap font-medium font-['Mulish']">Save changes</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex" />
        </div>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch px-8 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-[#6e7080] text-xs font-normal font-['Mulish'] leading-relaxed">If you want to permanently delete this account and all it’s data, including all tokens, transaction  and funds in your wallet, you can do so below.</div>
                    <button className="w-[178px] px-11 py-2 cursor-pointer rounded border border-[#ed2121] justify-center items-center inline-flex overflow-hidden">
                        <div className="justify-center items-center gap-2 flex">
                            <div className="w-[18px] pl-[2.81px] pr-[2.47px] py-[2.06px] justify-center items-center flex">
                                <div className="w-[12.72px] relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <path d="M12.9938 6.10156C12.9938 6.10156 12.5866 11.1528 12.3503 13.2806C12.2378 14.2968 11.6101 14.8923 10.5818 14.9111C8.62509 14.9463 6.66609 14.9486 4.71009 14.9073C3.72084 14.8871 3.10359 14.2841 2.99334 13.2858C2.75559 11.1393 2.35059 6.10156 2.35059 6.10156" stroke="#ED2121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.0312 3.68066H1.31274" stroke="#ED2121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.5804 3.68023C10.9917 3.68023 10.4847 3.26398 10.3692 2.68723L10.1869 1.77523C10.0744 1.35448 9.69343 1.06348 9.25918 1.06348H6.08443C5.65018 1.06348 5.26918 1.35448 5.15668 1.77523L4.97443 2.68723C4.85893 3.26398 4.35193 3.68023 3.76318 3.68023" stroke="#ED2121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-[#ed2121] text-base whitespace-nowrap font-medium font-['Mulish']">Delete account</div>
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

export default ProfileModal