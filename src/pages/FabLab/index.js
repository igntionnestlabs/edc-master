import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutCard from '@/components/FabLab/About'
import CreativeSpace from '@/components/FabLab/CreativeSpace'
import Supporters from '@/components/Supporters'
import Inventory from '@/components/FabLab/Inventory'


export default function App() {


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
      background-image: url('/assets/fab-bg.jpg');
      background-attachment: fixed;
      background-size: cover;
      opacity: 0.4;
      z-index: -1; 
    }
  `}</style>
                <Navbar />

                <section className=" bg-blue-900 bg-opacity-10 flex flex-col h-screen justify-center">
                    <div className="container flex justify-center text-center">
                        <div className='z-[50] sticky '>
                            <div className='md:flex hidden mt-2 flex-col' >
                                <h1 className='text-base md:text-5xl font-semibold uppercase'>FABLAB PARUL UNIVERSITY
                                </h1>
                                <p className=' mt-3 text-sm md:text-xl font-normal'>Click on the below button to use Fablab Facilities</p>
                            </div>

                            <div className='md:hidden flex flex-col'>
                                <h1 className='text-3xl font-semibold uppercase'>FABLAB PARUL UNIVERSITY</h1>
                                <p className=' mt-1 text-base md:text-3xl font-medium'>Click on the below button to use Fablab Facilities</p>
                            </div>
                            <button className='mt-12 md:text-base uppercase bg-red-600 text-sm px-6 md:px-8 py-1 md:py-2 rounded-md hover:bg-transparent border-red-600 hover:border-white border-[1px] hover:text-white duration-500'>Request FABLAB</button>

                        </div>

                    </div>
                </section>

                <AboutCard/>
                <CreativeSpace  />
                <Inventory/>
                <Supporters/>
                <Footer/>



            </main>




        </>
    )
}