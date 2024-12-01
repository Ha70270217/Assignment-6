import React from 'react'
import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import person1 from '../public/about-img-1.svg'
import person2 from '../public/about-img-2.svg'
import person3 from '../public/about-img-3.svg'
import person4 from '../public/about-img-4.svg'
import person5 from '../public/about-img-5.svg'
import person6 from '../public/about-img-6.svg'
import LinkdIn from '../public/linkedIn.svg' 
import Twitter from '../public/Twitter.svg'
import Dribble from '../public/dribble.svg'


  function AboutUs(){
  const AboutUs=[
    {
     name:"james Nduku",
     role:"Marketing Cordinator",
     image:person1,
    },
    // 2
    {
      name:"joseph",
     role:"Nursing Assistant",
     image:person2,
    },
    // 3
    {
      name:"joseph",
      role:"Medical Assistant",
      image:person3,
    },
    // 4
    {
      name:"Erick",
      role:"Web Designer",
      image:person4,
    },
    // 5
    {
      name:"Stephen Kerubu",
      role:"President of sales",
      image:person5,
    },
    // 6
    {
      name:"Sophia",
      role:"Content Writer",
      image:person6,
    },
  ]
      return(
        <div>
        <div className="text-center flex flex-col justify-center m-auto py-20 px-4">
          <h1 className="sm:text-3xl text-2xl font-semibold">Our Teams</h1>
          <p className="sm:text-[0.9em] text-[0.75em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="m-auto gap-24 grid lg:grid-cols-3 sm:grid-cols-2 py-20 px-2 grid-cols-1">
            {AboutUs.map((AboutUs, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <div className="flex py-4 px-4 flex-col gap-5 w-[100%] justify-center text-center">
                    <Image
                      src={AboutUs.image}
                      className="m-auto rounded-full"
                      alt={AboutUs.role}
                    />
                    <div className="content">
                      <h2 className="text-xl font-semibold">{AboutUs.name}</h2>
                      <span className="sm:text-[0.9em] text-[0.8em]">
                        {AboutUs.role}
                      </span>
                    </div>
                    <div className="flex m-auto gap-5">
                      <Image src={LinkdIn} width={25} alt="linkedin" />
                      <Image src={Twitter} width={25} alt="twitter" />
                      <Image src={Dribble} width={25} alt="website" />
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <p className="text-center">
                    <b>{AboutUs.name}</b> is a <b>{AboutUs.role}</b>. Connect with
                    them on LinkedIn, Twitter, or visit their website!
                  </p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    );
  }   

export default AboutUs