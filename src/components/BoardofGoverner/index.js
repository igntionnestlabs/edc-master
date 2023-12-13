import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const BoardOfGovernor = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    return (
        <div className='relative mx-10 md:mx-20 py-20 '>
            <Image
                src={require('../../../public/assets/map.jpg').default}
                alt="Board of Governor"
                layout="fill"
                objectFit="cover"
                className='rounded-lg opacity-25'
            />
            <Slider {...settings}>
                {data.map((dat) => (
                    <div key={dat.id} className='relative mb-24'>

                        <div className=' items-center flex flex-col'>
                            <Image
                                src={dat.image}
                                alt="profile"
                                className='rounded-full h-20 w-20'
                                height={80}
                                width={80}
                            />
                            <p className='text-gray-800 font-semibold text-lg text-center mt-3'>
                                {dat.name}
                            </p>
                            <p className='text-gray-800 font-normal text-base text-center'>
                                {dat.position}
                            </p>
                            <p className='w-[65%] text-center mt-7 text-gray-800 italic'>
                                {dat.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BoardOfGovernor;
