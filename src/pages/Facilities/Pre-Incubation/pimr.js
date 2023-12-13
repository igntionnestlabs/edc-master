import Navbar from '@/components/Navbar'
import ContactUs from '@/components/ContactUs'


export default function PIMR() {


    return (
        <>
            <main className="relative">
                <style jsx>{`
     main::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/parulImage.jpg');
      background-attachment: fixed;
      background-size: cover;
      opacity: 0.4; /* 40% opacity for the background image */
      z-index: -1; /* Place it behind the content */
    }
  `}</style>
                <Navbar />

                <section className=" bg-blue-900 bg-opacity-10 flex flex-col h-screen justify-center">
                    <div className="container flex justify-center text-center">
                        <div className='z-[50] sticky '>
                            <div className='md:flex hidden mt-2 flex-col' >
                                <h1 className='text-base md:text-5xl font-semibold uppercase'>INSTITUTION INNOVATION CLUB</h1>
                                <p className=' mt-3 text-sm md:text-xl font-normal'> Parul Institution of Management & Research</p>
                            </div>

                            <div className='md:hidden flex flex-col'>
                                <h1 className='text-3xl font-semibold uppercase'>INSTITUTION <br /> INNOVATION CLUB</h1>
                                <p className=' mt-1 text-base md:text-3xl font-medium'> Parul Institution of Management & Research</p>
                            </div>

                        </div>
                    </div>
                </section>
                <ContactUs />
            </main>




        </>
    )
}