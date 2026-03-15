import React from 'react'
import FbImg from '../../assets/fb-thumb.png'
import YTimg from '../../assets/youtube-thumb.png'
import InstaImg from '../../assets/instagram-thumb.png'
const FooterRight = () => {
  return (
    <div className='space-y-3 mt-3'>
      <p className='text-[#18181B] font-semibold'>Follow us</p>
      <div className='flex gap-2.5 items-center'>
        <a href="#"><img src={FbImg} alt="" /></a>
        <a href="#"><img src={YTimg} alt="" /></a>
        <a href="#"><img src={InstaImg} alt="" /></a>
      </div>
    </div>
  )
}

export default FooterRight
