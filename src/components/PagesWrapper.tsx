import React from 'react'
function PagesWrapper({ children } : { children: React.ReactNode }) {
  return (
    <div className='w-full pt-24 px-6 md:px-24 flex flex-col space-y-5 gap-3 min-h-screen'>
      {children}
    </div>

  )
}

export default PagesWrapper
