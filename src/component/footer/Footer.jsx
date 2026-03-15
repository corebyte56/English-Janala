import React from 'react'
import FooterLeft from './footerLeft'
import FooterRight from './footerRight'
const Footer = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-200  border-t border-t-amber-500 mt-29  py-20 px-16'>
      <FooterLeft />
      <FooterRight />
    </div>
  )
}

export default Footer
