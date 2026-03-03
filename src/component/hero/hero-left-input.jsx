import React from 'react'

const HeroLeftInput = () => {
  return (
    <div className='container mx-auto mt-10'>
      <fieldset className='space-y-4 mt-10 flex flex-col md:items-start items-center'>
        <input type="text" placeholder='Enter Your Name' className='w-[70%] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <input type="password" placeholder='Enter Your Password' className='w-[70%] p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
        <button className='w-[70%] bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Get Started</button>
      </fieldset>
    </div>
  )
}

export default HeroLeftInput
