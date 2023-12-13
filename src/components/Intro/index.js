import { useRouter } from "next/router";
import Form from '../../pages/Form'
const Intro = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/Form')
  };
  return (
    <>
    <section className=" bg-blue-900 bg-opacity-10 flex flex-col h-screen justify-center">
    <div className="container flex justify-center text-center">
        <div className='z-[50] sticky '>
            <div className='md:flex hidden mt-2 flex-col' >
                <h1 className='text-base md:text-5xl font-semibold uppercase'>Entrepreneurship Development Centre</h1>
                <p className=' mt-3 text-sm md:text-xl font-normal'>Ideation - Innovation - Incubation</p>
            </div>

            <div className='md:hidden flex flex-col'>
                <h1 className='text-3xl font-semibold uppercase'>Entrepreneurship <br /> Development Centre</h1>
                <p className=' mt-1 text-base md:text-3xl font-medium'>Ideation - Innovation - Incubation</p>
            </div>

            <button onClick={handleClick} className='mt-12 md:text-lg uppercase bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:bg-transparent border-red-600 hover:border-white border-[1px] hover:text-white duration-500'>Apply for Start-up Support</button>
        </div>


      </div>
    </section>

    </>
  );
};

export default Intro;