import React from 'react'
import Header from './_component/Header'

function Dashboardlayout({children}) {
  return (
    <div >
        <Header/>
        <div className='mx-5 md:mx-10 lg:mx-36' >
        {children}
        </div>
      
    </div>
  )
}

export default Dashboardlayout
