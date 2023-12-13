import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const OurAchievers = ({ data1 }) => {

  return (
    <main className="relative">
      <style jsx>{`
main::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url('/assets/map.jpg');
background-attachment: fixed;
background-size: cover;
opacity: 1;
z-index: -1; 
}
`}</style>
      <div className='bg-white bg-opacity-80  items-center py-12 '>
        <div className="flex flex-col mx-20 ">
          <div className="flex items-center gap-x-3 mb-2">
            <h1 className="uppercase text-[#5c8eb0] text-base font-medium">Achievements</h1>
            <div className="border-red-400 border-b-[1px] w-40"></div>
          </div>
          <h1 className="uppercase text-3xl text-[#263d4d] font-bold mb-12">Our Achievers</h1>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mx-10 gap-x-10 gap-y-4">
          {data1.map((dat) => (
            <div key={dat.id} className='text-center shadow-md ' >
              <Image src={dat.image} alt="profile" className='rounded-md' height={800} width={380} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurAchievers;
