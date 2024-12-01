import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import image from '../public/Image.svg'



const Hero = () => {
  return (
   
        <div>
            <section className='flex flex-col-reverse lg:flex-row py-4 sm:px-6 px-2 items-center justify-evenly'>
               <div className='flex flex-col justify-center font-title gap-5 text-pretty lg:text-start text-center'>
               <h2 className="font-semibold sm:text-[2em] text-[1.3em] font-poppins">Learn New Skills<br/>Online With Ease</h2>
                    <p className='sm:text-[0.9em] text-[0.65em]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
               
                <div className='w-[358px] h-[64px] pt-[16px] flex gap-[16px]'>
                   <Button className='text-[16px] hover:bg-black hover:text-white w-[178px] h-[44px] rounded-[5px] bg-black text-white' variant="outline">Start learning now</Button>
                   <Button className='text-[16px] hover:bg-black hover:text-white w-[178px] h-[44px] rounded-[5px] border-solid border-black border-[1px] ' variant="outline">Explore Courses</Button>
             </div>
             </div>
        
             <Image className="xl:w-[27vw] lg:w-[40vw] md:w-[80%] sm:w-[80%] w-[88%] h-auto" src={image}alt=''/>
          
             </section>
       </div>
    
  )
}

export default Hero
