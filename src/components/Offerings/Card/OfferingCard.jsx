import React from 'react';
import { Briefcase, CashStack, GearWideConnected, Heart, Person } from 'bootstrap-icons-react';

const OfferingsCard = ({ icon, title, description }) => {
  return (
    <div className='md:w-[45%] bg-white p-6 flex flex-row rounded-lg mb-12'>
      {icon && React.createElement(icon, { color: '#ed1b23', className: 'w-24 h-24 md:w-12 md:h-12 mr-2 md:mr-6' })}
      <div className='flex flex-col gap-y-2 md:gap-y-4'>
        <h1 className='text-gray-600 text-base md:text-lg font-semibold hover:text-red-500 duration-300 '>{title}</h1>
        <p className='text-gray-600 text-sm md:text-base'>{description}</p>
      </div>
    </div>
  );
};
export default OfferingsCard;