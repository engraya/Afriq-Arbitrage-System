
function Activities() {
  return (
    <div className="">
    {/* Start coding here */}
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="text-gray-900 text-xl font-semibold font-['Mulish'] leading-[29px]">Recent Activities</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#e1e3ef] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 text-md font-bold text-[#26282d] whitespace-nowrap">Date</th>
              <th scope="col" className="px-4 py-3 text-md font-bold text-[#26282d] whitespace-nowrap">Amount (USDT)</th>
              <th scope="col" className="px-4 py-3 text-md font-bold text-[#26282d] whitespace-nowrap">Type</th>
              <th scope="col" className="px-4 py-3 text-md font-bold text-[#26282d] whitespace-nowrap">Status</th>
              <th scope="col" className="px-4 py-3 text-md font-bold text-[#26282d] whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#f4f5f9] border-b border-[#dcdfea] dark:border-gray-700">
              <th scope="row" className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">20 feb 25</th>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">374.55</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">Deposit</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">300</td>
              <td className="px-4 py-3text-sm font-medium font-['Mulish'] cursor-pointer leading-snug">
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                <circle cx="3.375" cy="4.04785" r="3.375" fill="#00B86C"/>
                </svg>
                <span className=' text-[#0076f4] '>
                    View
                </span>
                </div>
              </td>
            </tr>
            <tr className="bg-[#f4f5f9] border-b border-[#dcdfea] dark:border-gray-700">
              <th scope="row" className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">20 feb 25</th>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">374.55</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">Deposit</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">300</td>
              <td className="px-4 py-3text-sm font-medium font-['Mulish'] cursor-pointer leading-snug">
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                <circle cx="3.375" cy="4.04785" r="3.375" fill="#00B86C"/>
                </svg>
                <span className=' text-[#0076f4] '>
                    View
                </span>
                </div>
              </td>
            </tr>
            <tr className="bg-[#f4f5f9] border-b border-[#dcdfea] dark:border-gray-700">
              <th scope="row" className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">20 feb 25</th>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">374.55</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">Deposit</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">300</td>
              <td className="px-4 py-3text-sm font-medium font-['Mulish'] cursor-pointer leading-snug">
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                <circle cx="3.375" cy="4.04785" r="3.375" fill="#00B86C"/>
                </svg>
                <span className=' text-[#0076f4] '>
                    View
                </span>
                </div>
              </td>
            </tr>
            <tr className="bg-[#f4f5f9] border-b border-[#dcdfea] dark:border-gray-700">
              <th scope="row" className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">20 feb 25</th>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">374.55</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">Deposit</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">300</td>
              <td className="px-4 py-3text-sm font-medium font-['Mulish'] cursor-pointer leading-snug">
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                <circle cx="3.375" cy="4.04785" r="3.375" fill="#00B86C"/>
                </svg>
                <span className=' text-[#0076f4] '>
                    View
                </span>
                </div>
              </td>
            </tr>
            <tr className="bg-[#f4f5f9] border-b border-[#dcdfea] dark:border-gray-700">
              <th scope="row" className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">20 feb 25</th>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">374.55</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">Deposit</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">300</td>
              <td className="px-4 py-3text-sm font-medium font-['Mulish'] cursor-pointer leading-snug">
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                <circle cx="3.375" cy="4.04785" r="3.375" fill="#00B86C"/>
                </svg>
                <span className=' text-[#0076f4] '>
                    View
                </span>
                </div>
              </td>
            </tr>
            <tr className="bg-[#f4f5f9] border-b border-[#dcdfea] dark:border-gray-700">
              <th scope="row" className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">20 feb 25</th>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">374.55</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">Deposit</td>
              <td className="px-4 py-3 text-[#07070a] text-sm font-normal font-['Mulish'] leading-tight  whitespace-nowrap dark:text-white">300</td>
              <td className="px-4 py-3text-sm font-medium font-['Mulish'] cursor-pointer leading-snug">
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                <circle cx="3.375" cy="4.04785" r="3.375" fill="#00B86C"/>
                </svg>
                <span className=' text-[#0076f4] '>
                    View
                </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  )
}

export default Activities