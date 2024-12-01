
import Image from "next/image";
import img1 from '../public/course-img-1.svg'
import img2 from '../public/course-img-2.svg'
import img3 from '../public/course-img-3.svg'
import img4 from '../public/course-img-4.svg'
import img5 from '../public/course-img-5.svg'
import img6 from '../public/course-img-6.svg'




function Courses() {

    const courses = [
        {
          id: 1,
          image:img1,
          category:"Design",
          title:"UI/UX Designing",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus similique",
          rating:"☆★★★",
          price:"300$",
        },
// 2
        {
          id: 2,
          image:img2,
          category:"Programming",
          title:"Introduction to Python",
          description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus similique",
          rating:"☆★★★",
          price:"300$",

        },
        // 3
      {
        id: 3,
        image:img3,
        category:"Buisness Data Analysis for beginners",
        title:"Data Analysis for beginners",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus similique",
        rating:"☆★★★",
        price:"300$",

      },
      // 4
      {
        id: 4,
        image:img4,
        category:"Art",
        title:"Specailization",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus similique",
        rating:"☆★★★",
        price:"300$",

      },
      // 5
      {
        id: 5,
        image:img5,
        category:"Law",
        title:"Rule of Law",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus similique",
        rating:"☆★★★",
        price:"300$",

      },
      // 6
      {
        id: 6,
        image:img6,
        category:"Tech",
        title:"Introduction to Web",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus similique",
        rating:"☆★★★",
        price:"300$",

      },
    ]
  return (
    <div>
        <div className="flex m-auto py-20 gap-5 px-4 justify-center flex-col text-center">
            <h2 className="font-semibold sm:text-3xl text-2xl">Courses</h2>
            <p className="sm:text-[0.9em] text-[0.8em] tracking-wider">Your Ultimate Guide To Learning</p>
            <div className="flex sm:gap-3 gap-2 justify-center">
                <button className="sm:py-2 py-0 sm:px-6 px-4 sm:text-[0.9em] text-[0.65em] bg-black border border-black text-white rounded-xl transition-all duration-700 hover:bg-transparent hover:text-black">Populer</button>
                <button className="sm:py-2 py-0 sm:px-6 px-4 sm:text-[0.9em] text-[0.65em] bg-transparent border border-black text-black rounded-xl transition-all duration-700 hover:bg-black hover:text-white">Recommended</button>
                <button className="sm:py-2 py-0 sm:px-6 px-4 sm:text-[0.9em] text-[0.65em] bg-black border border-black text-white rounded-xl transition-all duration-700 hover:bg-transparent hover:text-black">Best Price</button>
            </div>

<div className="grid justify-center lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 m-auto">

{courses.map((course)=>(
    <div key={course.id}  className="w-[80%] overflow-hidden rounded-2xl m-auto h-auto bg-white shadow-xl shadow-[#939393]">
    <Image src={course.image} alt="" className="w-full rounded-t-2xl transition-all duration-500 hover:scale-110"/>
    <div className="flex flex-col text-start gap-3 py-4 px-2">
        <div className="flex justify-between items-center">
            <span className="sm:text-[0.95em] text-[0.85em] font-poopins font-[500] tracking-wider uppercase">{course.category}</span>
            <p className="text-yellow-500 text-[1.5em]">{course.rating}</p>
        </div>
        <h3 className="font-semibold sm:text-[1.4em] text-[1.2em]">{course.title}</h3>
        <p className="sm:text-[0.9em] text-[0.8em] text-[#636363]">{course.description}</p>
        <div className="flex justify-between items-center">
   
                  <button className="py-2 px-6 bg-transparent border text-black border-black transition-all duration-700 hover:bg-black hover:text-white">
                    Enroll Now
                  </button>
  
            <span>{course.price}</span>
        </div>
    </div>
</div>
))}


</div>
<div>
     <button className="my-20 mx-4 py-4 px-8 bg-transparent border border-black text-black transition-all duration-700 hover:bg-black hover:text-white">View All Courses</button>
     </div>
        </div>
    </div>
  )
}

export default Courses;
