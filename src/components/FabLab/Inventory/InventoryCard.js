import React from 'react';

export default function InventoryCard({ data }) {
  const { title, description, img } = data;

  return (
    <section className='bg-white w-full '>
      <div className='video-gallery'>
        <div
          className={`bg-black gallery-item  rounded-lg`}
        >
          <img
            src={img}
            width={600}
            height={600}
            className='cursor-pointer hover:translate-x-10 duration-500 aspect-square object-cover'
          />

          <div className='gallery-item-caption'>
            <h2 className='uppercase text-3xl font-light'>{title}</h2>
            <p className='text-xs uppercase font-light text-white'>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
