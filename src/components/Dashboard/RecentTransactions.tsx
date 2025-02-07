import { useState, useEffect } from "react"
import { getTransactionsData } from "../../utils/functions/transactions";
import NoTransactionsAvailable from "../NoTransactionsAvailable";
import LoadingSpinner from "../../components/LoadingSpinner";
import { formatDate } from "../../utils/date";
import { Link } from "react-router-dom";

type TransactionType = {
  id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  amount: number;
  rate: number;
  paymentMethod: string;
  transactionHash: string;
  status: string;
  recordedAt: string; // ISO date string
  createdAt: string;  // ISO date string
  __v: number;
}

function RecentTransactions() {

  const [isLoadingTransactionsData, setIsLoadingTransactionsData] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);


  const resolveTransactionsData = async () => {
    setIsLoadingTransactionsData(true);
  
    // Example usage with new parameters
    const result = await getTransactionsData();
    console.log("TRansactions result", result?.data)
    
    setTransactionsData(result?.data || []);

    setIsLoadingTransactionsData(false);
  };

  useEffect(() => {
    resolveTransactionsData();
  }, []);

  const getTransactionStyles = (status : string) => {
    switch (status) {
      case 'pass':
        return 'w-[6.75px] h-[6.75px] bg-[#2ad393] rounded-full inline-block mr-2';
      case 'pending':
        return 'w-[6.75px] h-[6.75px] bg-[#ffc36b] rounded-full inline-block mr-2'; 
        case 'failed':
          return 'w-[6.75px] h-[6.75px] bg-[#e85455] rounded-full inline-block mr-2';   
      default:
        return '';
    }
  };


  const getTransactionStatusText = (status : string) => {
    switch (status) {
      case 'pass':
        return 'Success';
      case 'pending':
        return 'Pending';
      case 'failed':
        return 'Failed';  
      default:
        return '';
    }
  };

  const renderTableRows = () => {
    return (
      <>
      {!isLoadingTransactionsData ? (
          <>
            {transactionsData?.length > 0 ? (
  <table className="min-w-full border-collapse border border-[#20263d]">
        <thead className="bg-[#2a314d]">
            <tr>
              <th scope="col" className="px-2 py-2 text-sm whitespace-nowrap font-semibold text-[#c1c5e0]">Date</th>
              <th scope="col" className="px-2 py-2 text-sm whitespace-nowrap font-semibold text-[#c1c5e0]">Amount (USDT)</th>
              <th scope="col" className="px-2 py-2 text-sm whitespace-nowrap font-semibold text-[#c1c5e0]">Rate</th>
              <th scope="col" className="px-2 py-2 text-sm whitespace-nowrap font-semibold text-[#c1c5e0]">Payment Method</th>
              <th scope="col" className="px-2 py-2 text-sm whitespace-nowrap font-semibold text-[#c1c5e0]">Status</th>
            </tr>
          </thead>
            <tbody>
              {transactionsData?.map((transaction : TransactionType) => (
              <tr className="border-b border-[#2a314d] dark:border-gray-700" key={transaction.id}>
              <th scope="row" className="px-4 py-2 text-sm whitespace-nowrap text-white">{formatDate(transaction?.createdAt)}</th>
              <td className="px-4 py-2 text-sm whitespace-nowrap text-white">{transaction.amount}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap text-white">{transaction.rate}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap text-white">{transaction.paymentMethod}</td>
              <td className="px-4 py-2 text-sm whitespace-nowrap text-white flex items-center">
                <span className={getTransactionStyles(transaction.status)}></span>
                {getTransactionStatusText(transaction.status)}
              </td>
            </tr>
              ))}
            </tbody>
          </table>) : (
              <NoTransactionsAvailable />
            )}
          </>
        ) : (
       <LoadingSpinner/>
        )}
    </>
    )
  }



  return (
<div className="md:w-[700px] rounded-xl shadow-[0px_3px_2px_-2px_rgba(0,0,0,0.06)] border border-[#20263d] flex-col justify-start items-start inline-flex overflow-hidden">
    <div className="self-stretch px-4 py-2 bg-[#181e33] justify-between items-center inline-flex">
        <div className="text-white text-xl font-semibold font-['Mulish'] leading-[29px]">Recent Transactions</div>
        <div className="h-8 justify-end items-start gap-3 flex">
            <div className="self-stretch p-2 rounded justify-center items-center flex overflow-hidden">
                <div className="justify-center items-center gap-2 flex">
                      <Link to="/transactions">
                       <div className="text-[#2a77ea] text-sm font-medium font-['Mulish'] leading-snug">View All</div>
                       </Link>
                  
                    <div className="w-4 h-4 px-[1.05px] py-[3.33px] justify-center items-center flex overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0507812 4.99967C0.0507812 4.63148 0.349258 4.33301 0.717448 4.33301L12.7179 4.33301C13.0861 4.33301 13.3846 4.63149 13.3846 4.99968C13.3846 5.36787 13.0861 5.66634 12.7179 5.66634L0.717448 5.66634C0.349258 5.66634 0.0507812 5.36786 0.0507812 4.99967Z" fill="#2A77EB"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62465 0.487552C9.9075 0.251837 10.3279 0.290045 10.5636 0.572892L13.7192 4.35949C14.0283 4.73034 14.0283 5.26904 13.7192 5.63989L10.5636 9.42649C10.3279 9.70934 9.9075 9.74755 9.62465 9.51183C9.3418 9.27612 9.30359 8.85574 9.53931 8.57289L12.5171 4.99969L9.53931 1.42649C9.30359 1.14364 9.3418 0.723266 9.62465 0.487552Z" fill="#2A77EB"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-full overflow-x-auto">
    {renderTableRows()}
</div>

</div>
  )
}

export default RecentTransactions
