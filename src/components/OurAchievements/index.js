import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const OurAchievements = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <div className='bg-white h-screen items-center pt-12  '>
        <div className="flex flex-col mx-10 md:mx-20 ">
        <div className="flex items-center gap-x-3 mb-2">
          <h1 className="uppercase text-[#5c8eb0] text-base font-medium">Achievers</h1>
          <div className="border-red-400 border-b-[1px] w-40"></div>
        </div>
        <h1 className="uppercase text-3xl text-[#263d4d] font-bold mb-12">Our Achievements</h1>
      </div>
            <Slider {...settings}>
                {data.map((dat) => (
                    <div key={dat.id} className='text-center mx-[35%]'>
                        <Image src={dat.image} alt="profile" className='rounded-md' height={1000} width={450} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default OurAchievements;
