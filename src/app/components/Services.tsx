import React from 'react'
import Image from 'next/image'
import pen from '../public/pen.svg'
import volume from '../public/volume-high.svg'
import Arrow from '../public/crossarrow.svg'
import Microphone from '../public/microphone.svg'
import link from '../public/link.svg'
import Arrows from '../public/arrow.svg'
import breifcase from '../public/briefcase.svg'
import book1 from '../public/book(1).svg'
import book from '../public/book.svg'
import { Button } from '@/components/ui/button'
const Services = () => {
  return (
  <section id='Services'className='flex flex-col justify-center m-auto text-center py-10 px-4 mt-24'>
        <div className='md:w-[768px] w-[410px] h-[109px] hidden md:flex flex-col gap-[24px] mx-[256px] '>
            <h2 className='sm:text-3xl text-xl font-semibold mb-2'>Explore Courses By Category</h2>
            <p className='tmb-14 sm:text-[0.95em] text-[0.8em]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
        <div className='md:hidden w-[385px] h-[162px] flex flex-col gap-[24px] mr[19px'>
            <h4 className='h-[84px] w-[385px] text-[32px] leading-[41.6px] text-center font-bold'>Explore Courses By Category</h4>
            <p className='h-[84px] w-[385px] text-[18px] leading-[27px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>

        <div className='w-full h-[636px] flex flex-col gap-[64px] mt-[80px] items-center '>
            <div className='h-[132px] flex gap-[24px]'>
             {/* 1 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={pen}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Design & Development</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
            {/* 2 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] custom850:flex flex  p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={volume}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Marketing</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
                
             {/* 3 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] xl:flex  p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={Arrow}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Development</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                </div>
             </div>
                    <div className='-[132px] flex gap-[24px]'>
                    
                {/* 4 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={Microphone}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Communication</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
               {/* 5 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] custom850:flex flex  p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={link}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Digital Marketing</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
             {/* 6 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] xl:flex  p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={Arrows}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Self Development</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div> 
                </div> 
                 <div className='-[132px] flex gap-[24px]'>
                 
                 {/* 7 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] flex p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={breifcase}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Business</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
              {/* 8 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] custom850:flex flex  p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={book1}alt=''/> 
                    </div>
                    <div className='w-[246.67px]  h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Finance</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
                 
               {/* 9 */}
                 <div className='w-[410.67px] h-[132px] bg-[#F7F7F7] xl:flex  p-[16px] gap-[32px] rounded-[5px]'>
                    <div className='w-[100px] h-[100px] bg-white rounded-[5px] flex justify-center items-center'>
                       <Image className='w-[32px] h-[32px]' src={book}alt=''/> 
                    </div>
                    <div className='w-[246.67px] h-[57px] my-[21.5px]'>
                         <p className='font-semibold text-[20px] leading-[30px]'>Consulting</p>
                         <p className='text-[18px] leading-[27px]'>50+ Courses Available</p>
                    </div>
                 </div>
                 </div>
                 <div className='-[132px] flex gap-[24px]'>
                  <div className='w-[155px] h-[48px] border-solid mx-[562.25px]'>
                    <Button className='my-20 mx-4 py-4 px-8 bg-transparent border border-black text-black transition-all duration-700 hover:bg-black hover:text-white'>View All Courses</Button>
                  </div>
           
          </div>
        
        </div>
  </section>
  )
}

export default Services
