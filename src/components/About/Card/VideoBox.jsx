import { useState } from 'react';
import { PlayButton } from '../../Icons';
import { CheckAll } from 'bootstrap-icons-react';

const VideoBox = () => {
  const [showVision, setShowVision] = useState(true);

  const toggleVision = () => {
    setShowVision(true);
  };

  const toggleMission = () => {
    setShowVision(false);
  };
  return (
    <div className=" flex md:flex-row flex-col md:gap-y-0 gap-y-4">
      <div className='relative h-[50%] md:left-8 left-3'>
        <img
          src="https://i.ibb.co/JdHm4pq/About.png"
          className="w-11/12 rounded-md"
          alt=""
        />
        <a href="https://www.youtube.com/watch?v=XPl_1Ao_kfc" className="absolute right-14 bottom-8 inset-0 flex items-center justify-center">
          <PlayButton />
        </a>
      </div>


      <div className="md:w-[50%] md:items-center mx-6">
        <h1 className="text-[#263d4d] font-semibold text-lg md:text-2xl mb-2">Ideation - Innovation - Incubation</h1>
        <p className="text-gray-600 md:text-lg text-sm">
          The Entrepreneurship Development Centre is one of the creative hubs at Parul University that nurtures the Entrepreneurial endeavors of all students. A team of full time Dedicated Incubation Managers are working for the Entrepreneurship Development Centre to Strengthen the Regional Eco System Promoting Innovation and Entrepreneurship Culture in the University.
        </p>

        <div className="flex md:flex-row flex-col gap-x-8 mt-6 md:mt-12">
          <div className="flex flex-row items-center gap-y-2 gap-x-3 md:flex-col w-28 mb-6 md:mb-0">
            <button
              className="bg-red-500 rounded-md px-6 py-2  hover:text-red-500 duration-300"
              onClick={toggleVision}
              style={{
                backgroundColor: showVision ? 'red' : 'white',
                color: showVision ? 'white' : 'gray',
                borderBlockEndStyle: showVision ? 'solid' : '',
                borderBlockEndColor: showVision ? 'white' : '',
              }}
            >
              Vision
            </button>
            <button
              className="focus:bg-red-500 text-gray-800 focus:text-white rounded-md px-6 py-2 hover:text-red-500 duration-300"
              onClick={toggleMission}
              style={{
                backgroundColor: !showVision ? 'red' : '',
                color: !showVision ? 'white' : 'gray',
              }}
            >
              Mission
            </button>
          </div>

          {showVision && (
          <div className='mb-10'>
            <h1 className='text-red-500 text-xl font-medium mb-4'>Our Vision</h1>

            <div className='  text-gray-600 text-sm font-normal flex flex-row justify-start ' >
              <CheckAll className="h-20 w-20 text-red-500 -translate-y-7" />
              <p>To create a Startup Support System that enables 5% of our students to follow an entrepreneurial career and join the ranks of job creators, thereby contributing to the social and economic development of India.
              </p>
            </div>

          </div>
          )}

          {!showVision && (
          <div className='flex flex-col mb-10 ' >
            <h1 className='text-red-500 text-xl font-medium mb-4'>Our Mission</h1>

            <div className='  text-gray-600 text-sm font-normal flex flex-row ' >
              <CheckAll className="h-20 w-20 text-red-500 -translate-y-7" />
              <p>Fostering an innovation culture and an entrepreneurial spirit on campus through a variety of initiatives and campaigns with the goal of inspiring our students to pursue entrepreneurial endeavors.               </p>
            </div>

            <div className='  text-gray-600 text-sm font-normal flex flex-row ' >
              <CheckAll className="h-20 w-20 text-red-500 -translate-y-7" />
              <p>Creating a strong Innovation Ecosystem to act as catalyst for entrepreneurship at Parul University by supporting innovative Startup ideas to build real value for the society. </p>            </div>

          <div className='  text-gray-600 text-sm font-normal flex flex-row ' >
            <CheckAll className="h-20 w-20 text-red-500 -translate-y-7" />
            <p>Developing synergy with all the stakeholders of Startup Ecosystem to set-up end-to-end Startup support system for better execution of ideas and innovations. </p>
          </div>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default VideoBox;