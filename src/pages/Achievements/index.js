import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Intro from '@/components/Intro'
import Image from 'next/image'
import Offerings from '@/components/Offerings'
import Events from '@/components/Events'
import Teams from '@/components/Teams'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import OurAchievements from '@/components/OurAchievements'
import OurAchievers from '@/components/OurAcheivers'


export default function App() {

    const data = require('../../json/ourAchievements.json');
    const data1 = require('../../json/ourAchievers.json');

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
      background-image: url('/assets/associationship-bg.jpg');
      background-attachment: fixed;
      background-size: cover;
      opacity: 0.35;
      z-index: -1; 
    }
  `}</style>
                <Navbar />
                {/* Intro */}
                <section className=" flex flex-col h-screen justify-center">
                    <div className="container flex justify-center text-center">
                        <div className='z-[50] sticky '>
                            <div className='md:flex hidden mt-2 flex-col' >
                                <h1 className='text-base md:text-5xl font-semibold uppercase'>OUR ACHIEVEMENTS</h1>
                                <p className=' mt-3 text-sm md:text-xl font-normal'>Only those who attempt the absurd can achieve the impossible.</p>
                            </div>

                            <div className='md:hidden flex flex-col'>
                                <h1 className='text-3xl font-semibold uppercase'>OUR ACHIEVEMENTS </h1>
                                <p className=' mt-1 text-base md:text-3xl font-medium'>Only those who attempt the absurd can achieve the impossible.</p>
                            </div>
                        </div>
                    </div>
                </section>
                </main>
               
               <OurAchievements data={data}/>
               <OurAchievers data1={data1}/>
              <Footer/>


          




        </>
    )
}