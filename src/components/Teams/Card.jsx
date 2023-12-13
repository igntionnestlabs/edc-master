import Image from 'next/image';
import React from 'react';

const Card = ({data}) => {
    
    return (
       
        <div className='items-center flex flex-col'>
            <Image src={data.image} alt="CEO" width={300} height={300} className='rounded-md' />
            <div className='bg-white  text-black p-5 w-[80%] rounded-md shadow-lg relative bottom-14 '>
                <h1 className="text-base font-semibold">{data.name}</h1>
                <div className='border-[1px] border-b-blue-800 w-20 mt-1 mb-2'></div>
                <div className='flex justify-between items-center gap-x-3'>
                    <p className='text-xs italic '>{data.position}</p>
                    <div className='flex flex-row gap-x-2'>
                        <Image src="/assets/facebook.png" alt="facebook" width={20} height={20} />
                        <Image src="/assets/linkedin.png" alt="linkedin" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default Card;
