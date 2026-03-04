import React from 'react'
import logo from "/English-Janala/assets/logo.png";

const NavLeft = () => {
  return (
    <div>
      <div className='flex items-center gap-2'>
        <h2 className='text-xl font-semibold'>English Janala</h2>
        <img src={logo} alt="Logo" />
        <h2 className='text-xl font-semibold bangla-font'>জানালা</h2>
      </div>
    </div>
  )
}

export default NavLeft
