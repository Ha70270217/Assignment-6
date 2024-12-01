import React from 'react'
import Image from 'next/image'

import Facebook from "../public/facebook.svg"
import Insta from "../public/insta.svg"
import Twitter from "../public/Twitter.svg"
import LinkdIn from "../public/linkedIn.svg"


const Header = () => {
  return (
    <header >
      <div className='hidden md:flex justify-around py-2 px-4 shadow-sm items-center'>
        <div className=' font-title flex gap-9'>
          <p className='tracking-wider text-[0.85em] font-[400] '>Phone Number : 956 742 455 </p>
           <p className='tracking-wider text-[0.85em] font-[400] '>Email:info@ddsgnr.com</p>
      </div>-
      <div className='flex gap-7'>
        <div className='lg:w-[35px] w-[30px]'><Image src={Facebook} alt=''/></div>
        <div className='lg:w-[35px] w-[30px]'><Image src={Insta} alt=''/></div>
        <div className='lg:w-[35px] w-[30px]'><Image src={Twitter} alt=''/></div>
        <div className='lg:w-[35px] w-[30px]'><Image src={LinkdIn} alt=''/></div>
      </div>
   </div>



   
   
   </header>
     
     
  )
}

export default Header
