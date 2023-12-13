import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Partners = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    const settings2 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };
    const settings3 = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
    };

    return (
        <div className='relative bg-white h-screen  py-40 '>
            <div className="flex flex-col mx-4 md:mx-20">
        <div className="flex items-center gap-x-3 mt-10">
          <h1 className="uppercase text-[#5c8eb0] text-base font-medium ">Partners</h1>
          <div className="border-red-400 border-b-[1px] w-40"></div>
        </div>
        <h1 className="uppercase text-xl md:text-3xl text-[#263d4d]  font-bold mb-24 mt-4">Meet Our Partners</h1>
      </div>
            <div className='md:flex hidden flex-col mx-28'>
            <Slider {...settings} className='mb-20'>
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/01.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/02.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/03.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/04.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/05.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/06.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/07.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/08.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/09.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />   
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/10.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
            </Slider>

            <Slider {...settings1}>
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/11.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/12.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/13.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/14.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/15.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/16.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/17.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/18.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/19.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />   
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/20.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />   
   
            </Slider>

            </div>
            <div className='flex flex-col mx-5 md:hidden'>
            <Slider {...settings2} className='mb-20'>
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/01.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/02.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/03.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/04.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/05.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/06.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/07.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/08.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/09.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />   
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/10.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
            </Slider>

            <Slider {...settings3}>
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/11.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/12.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/13.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/14.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/15.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/16.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/17.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/18.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/19.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />   
                <Image src={'https://edc.paruluniversity.ac.in/src/img/partners/20.jpg'} height={2000} width={2000} className='w-16 h-12' alt="partners" />   
   
            </Slider>

            </div>
        </div>
    );
};

export default Partners;
