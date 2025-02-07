import React from 'react'
import Footer from '../Footer/Footer'
function Wrapper({children} : React.PropsWithChildren) {
  return (
    <div className='flex flex-col justify-center pb-6 items-center'>
      <div className='px-8 pt-10 flex flex-col min-h-screen justify-center items-center mx-auto'>
        {children}
      </div>
      <Footer/>
    </div>

  )
}

export default Wrapper