import React from 'react'
import FooterLeft from './footerLeft'
import FooterRight from './footerRight'
const Footer = () => {
  return (
    <div className='container mx-auto flex flex-col sm:flex-row justify-between gap-9 sm:gap-0 border-t border-t-amber-500 mt-29  py-20 px-16'>
      <FooterLeft />
      <FooterRight />
    </div>
  )
}

export default Footer
