import Image from 'next/image';
import React from 'react';

const SpaceCard = ({ data }) => {
  const customShadowStyle = {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.14)',
  };

  return (
    <div className='flex items-start'>
      <div className="bg-white pt-4 rounded-full   w-36 h-36 flex items-center justify-center shadow-xl">
        <div className="bg-white rounded-full w-28 h-28 flex items-center justify-center shadow-xl">
          <Image src={data.image} width={100} height={100} className='w-16 h-16' />
        </div>
      </div>
      <div className='relative top-20 right-3'>
        <div class="-mb-3 ml-2.5 mt-1.5 h-64 w-6 border-blue-400 rounded-r-lg border-r-8 border-y-8"></div>
        <div className='bg-white rounded-full w-14 h-14 flex absolute right-6 -bottom-10' style={customShadowStyle}></div>
      </div>
      <div className='relative top-32 right-48'>
        <div className='bg-white rounded-full w-14 h-14 top-12 right-5 flex shadow-md text-black items-center justify-center relative'>{data.serial}</div>
        <button className='text-gray-700 text-base bg-white rounded-full px-10 flex items-center justify-center shadow-xl py-2' style={customShadowStyle}>
          {data.title}
        </button>
        <p className='text-sm text-gray-600 w-40 mt-6'>{data.description}</p>
      </div>
    </div>
  );
}

export default SpaceCard;
