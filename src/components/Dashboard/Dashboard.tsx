import DashbaordCard from '../DashboardCard'
import PagesWrapper from '../PagesWrapper'
import TotalEarnings from './TotalEarnings'
import Activities from './Activities'
function Dashboard() {


  const totalEarningsSvg = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M27 10.8C27 14.712 24.12 17.94 20.376 18.504V18.432C20.004 13.776 16.224 9.996 11.532 9.624H11.496C12.06 5.88 15.288 3 19.2 3C23.508 3 27 6.492 27 10.8Z" fill="#202B3C"/>
  <path d="M18.576 18.5754C18.276 14.7714 15.228 11.7234 11.424 11.4234C11.22 11.4114 11.004 11.3994 10.8 11.3994C6.492 11.3994 3 14.8914 3 19.1994C3 23.5074 6.492 26.9994 10.8 26.9994C15.108 26.9994 18.6 23.5074 18.6 19.1994C18.6 18.9954 18.588 18.7794 18.576 18.5754ZM11.856 20.2554L10.8 22.1994L9.744 20.2554L7.8 19.1994L9.744 18.1434L10.8 16.1994L11.856 18.1434L13.8 19.1994L11.856 20.2554Z" fill="#202B3C"/>
</svg>

  const totalWidthrawalSvg = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M26.9039 20.6997C26.5079 23.8917 23.8919 26.5077 20.6999 26.9037C18.7679 27.1437 16.9679 26.6157 15.5639 25.5837C14.7599 24.9957 14.9519 23.7477 15.9119 23.4597C19.5239 22.3677 22.3679 19.5117 23.4719 15.8997C23.7599 14.9517 25.0079 14.7597 25.5959 15.5517C26.6159 16.9677 27.1439 18.7677 26.9039 20.6997Z" fill="#07080A"/>
  <path d="M12.588 3C7.296 3 3 7.296 3 12.588C3 17.88 7.296 22.176 12.588 22.176C17.88 22.176 22.176 17.88 22.176 12.588C22.164 7.296 17.88 3 12.588 3ZM11.46 11.244L14.352 12.252C15.396 12.624 15.9 13.356 15.9 14.484C15.9 15.78 14.868 16.848 13.608 16.848H13.5V16.908C13.5 17.4 13.092 17.808 12.6 17.808C12.108 17.808 11.7 17.4 11.7 16.908V16.836C10.368 16.776 9.3 15.66 9.3 14.268C9.3 13.776 9.708 13.368 10.2 13.368C10.692 13.368 11.1 13.776 11.1 14.268C11.1 14.7 11.412 15.048 11.796 15.048H13.596C13.872 15.048 14.088 14.796 14.088 14.484C14.088 14.064 14.016 14.04 13.74 13.944L10.848 12.936C9.816 12.576 9.3 11.844 9.3 10.704C9.3 9.408 10.332 8.34 11.592 8.34H11.7V8.292C11.7 7.8 12.108 7.392 12.6 7.392C13.092 7.392 13.5 7.8 13.5 8.292V8.364C14.832 8.424 15.9 9.54 15.9 10.932C15.9 11.424 15.492 11.832 15 11.832C14.508 11.832 14.1 11.424 14.1 10.932C14.1 10.5 13.788 10.152 13.404 10.152H11.604C11.328 10.152 11.112 10.404 11.112 10.716C11.1 11.124 11.172 11.148 11.46 11.244Z" fill="#07080A"/>
</svg>

  const totalDepositSvg = <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11 16.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm4.5 2.5v-1.5H14v-2h1.5V14h2v1.5H19v2h-1.5V19h-2Z" clip-rule="evenodd"/>
  <path d="M3.987 4A2 2 0 0 0 2 6v9a2 2 0 0 0 2 2h5v-2H4v-5h16V6a2 2 0 0 0-2-2H3.987Z"/>
  <path fill-rule="evenodd" d="M5 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>


    // Dynamically map statsData to card structure
    const dynamicCardsData =  [
      { id: 1, title: "Total Earnings", value: `${200}`, icon: totalEarningsSvg },
      { id: 2, title: "Total Withdrawal", value: `${500}`, icon: totalWidthrawalSvg },
      { id: 3, title: "Total Deposit", value: `${700}`, icon: totalDepositSvg },
    ]

  return (
    <PagesWrapper>
      <TotalEarnings/>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-5">
      {dynamicCardsData.map((card) => (
        <DashbaordCard key={card.id} title={card.title} value={card.value} icon={card.icon} />
      ))}
    </div>
    <Activities/>
  </PagesWrapper>
  )
}

export default Dashboard




