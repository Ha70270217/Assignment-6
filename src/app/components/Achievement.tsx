import React from 'react'

const Achievement = () => {
  return (
    
    <div>
            
            <div className='flex flex-col gap-5 justify-center text-center m-auto py-16 px-4'>
                <h2 className='font-title font-semibold sm:text-[2em] text-[1.3em]'>Our Achievements</h2>
                <p className='sm:text-[0.9em] text-[0.6em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              <div className='flex flex-wrap justify-center gap-[20vmin] items-center'>
            
            <div className='flex flex-col gap-2 items-center'>
                     <h3 className='font-semibold sm:text-4xl text-2xl'>+200</h3>
                     <p className='sm:text-xl text-lg text-[#838383] '>Courses</p>
            </div>
            
            <div className='flex flex-col gap-2 items-center '>
                       <h3 className='font-semibold sm:text-4xl text-2xl'>50k</h3>
                       <p className='sm:text-xl text-lg text-[#838383] '>Mentors</p>
            </div>
            
           
             <div className='flex flex-col gap-2 items-center'>
                     <h3 className='font-semibold sm:text-4xl text-2xl'>370k</h3>
                     <p className='sm:text-xl text-lg text-[#838383] '>Students</p>
            </div>
                
                
             <div className='flex flex-col gap-2 items-center '>
                       <h3 className='font-semibold sm:text-4xl text-2xl'>100+</h3>
                       <p className='sm:text-xl text-lg text-[#838383]'>Recognition</p>
            </div>
            
            </div>
            </div>
    </div>
        
    
  )
}

export default Achievement
