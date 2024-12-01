import Image from "next/image";
import air1 from '../public/air1.svg'
import air2 from '../public/air2.svg'
import air3 from '../public/air3.svg'
import air4 from '../public/air4.svg'
import air5 from '../public/air5.svg'
import air6 from '../public/air6.svg'





function Trusted() {
    const logos = [
      {
        id: 1,
        logo: air1,
        alt: "air 1",
      },
      {
        id: 2,
        logo: air2,
        alt: "air 2",
      },
      {
        id: 3,
        logo: air3,
        alt: "air 3",
      },
      {
        id: 4,
        logo: air4,
        alt: "air 4",
      },
      {
        id: 5,
        logo: air5,
        alt: "air 5",
      },
      {
        id: 6,
        logo: air6,
        alt: "air 6",
      },
    ];
  
    return (
      <div>
        <section className="mt-24 flex flex-col lg:flex-row lg:justify-evenly justify-center items-center py-10 px-4 gap-9">
          <div className="content text-center lg:text-left">
            <h2 className="text-2xl font-semibold font-poppins">
              Trusted By 2000+ Companies Worldwide.
            </h2>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 items-center">
            {logos.map((logo) => (
              <div key={logo.id}> {/* Add the key prop here */}
                <Image
                  src={logo.logo}
                  alt={logo.alt}
                  className="w-[80px] sm:w-[120px] md:w-[140px] lg:w-[170px] h-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
  
  export default Trusted;