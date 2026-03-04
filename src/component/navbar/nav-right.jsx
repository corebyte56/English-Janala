import React from 'react'
import { CircleQuestionMark } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { LogOut } from 'lucide-react';

const NavRight = () => {
  return (
    <div className='md:flex md:space-y-0 space-y-4 gap-4'>
      <button className='flex gap-1 bg-transparent md:border-2 border-indigo-500 text-indigo-600  py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-300" font-semibold'><CircleQuestionMark /> FAQ</button>
      <button className='flex gap-1 bg-transparent md:border-2 border-indigo-500 text-indigo-600  py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-300 font-semibold'><BookOpen /> Learn</button>
      <button className='flex gap-1 bg-transparent md:border-2 border-indigo-500 text-indigo-600  py-2 px-4 rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white transition duration-300 font-semibold'><LogOut /> Logout</button>
    </div>
  )
}

export default NavRight
