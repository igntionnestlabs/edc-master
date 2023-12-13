import Link from 'next/link';
import React from 'react';

const Courses = ({ data }) => {
  if (data.length < 2) {
    return null;
  }

  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    pairs.push(data.slice(i, i + 2));
  }

  return (
    <div>
      {pairs.map((pair, index) => (
        <div key={index} className=" justify-between flex md:flex-row flex-col  md:border-b-[1px] md:border-gray-300  md:py-5 mx-10 md:mx-20">
          {pair.map((course) => (
            <div key={course.id} className="md:w-1/2 mt-10  md:mt-0">
              <p className='text-base md:text-lg text-gray-800 font-medium mb-4'>{course.label}</p>
              
                {/* Use the Link component if the URL exists */}
                <Link href={course.url} className='px-5 py-2  rounded-md bg-red-600 hover:bg-red-800 mb-5 duration-300 text-white font-medium text-base'>Visit Now
                </Link>
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;