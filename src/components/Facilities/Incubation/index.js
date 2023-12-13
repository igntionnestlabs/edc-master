import React from 'react';

const data =[
    {
        "id": 1,
        "label": "Fablab"
    },
    {
        "id": 2,
        "label": "Vadodara Startup Studio"
    }

]

export const IncubationFacilites = () => {
  if (data.length < 2) {
    return null; 
  }

  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    pairs.push(data.slice(i, i + 2));
  }

  return (
    <section className="bg-white py-16">
    <div>
      {pairs.map((pair, index) => (
        <div key={index} className="flex md:flex-row flex-col justify-between mx-10 md:mx-20">
          {pair.map((course) => (
            <div key={course.id} className="md:w-1/2  ">
              <p className='text-lg text-gray-800 font-medium mb-2'>{course.label}</p>
              <button className='px-5 py-2 rounded-md bg-red-600  hover:bg-red-800 mb-5 duration-300 text-white font-medium text-base'>Visit Now</button>
            </div>
          ))}
        </div>
      ))}
    </div>
    </section>
  );
};
