import React from 'react';
import { IconBuildingStore, IconMessage, IconRadar, IconStack2, IconSunHigh, IconWoman } from '@tabler/icons-react';

const Tabs = ({ onTabClick, activeTab }) => {
  const tabStyles = 'flex rounded-lg items-center cursor-pointer border border-gray-200 mr-1 md:mr-6 rounded p-3  md:p-4 font-medium duration-300 text-left text-gray-600 hover:text-red-600 focus:bg-red-600 focus:text-white';

  return (
    <div className="flex flex-row  mt-10">
      {/* Tab 1 */}
      <button className={activeTab === 'Vadodara Hackathon' ? `${tabStyles} bg-red-500 text-white hover:text-white` : tabStyles} onClick={() => onTabClick('Vadodara Hackathon')}>
        <IconRadar className='w-4 h-4 md:w-16 md:h-16 mr-0 md:mr-5' />
        <span className="hidden md:flex">Vadodara Hackathon</span>
      </button>

      {/* Tab 2 */}
      <button className={activeTab === "Women's Startup Meet" ? `${tabStyles} text-red-600` : tabStyles} onClick={() => onTabClick("Women's Startup Meet")}>
        <IconWoman className="w-4 h-4 md:w-16 md:h-16 mr-0 md:mr-5" />
        <span className="hidden md:flex">Women's Startup Meet</span>
      </button>

      {/* Tab 3 */}
      <button className={activeTab === 'Vadodara Start-up Festival' ? `${tabStyles} text-red-600` : tabStyles} onClick={() => onTabClick('Vadodara Start-up Festival')}>
        <IconSunHigh className="w-4 h-4 md:w-16 md:h-16 mr-0 md:mr-5" />
        <span className="hidden md:flex">Vadodara Start-up Festival</span>
      </button>

      {/* Tab 4 */}
      <button className={activeTab === 'Startup Demo Day' ? `${tabStyles} text-red-600` : tabStyles} onClick={() => onTabClick('Startup Demo Day')}>
        <IconStack2 className="w-4 h-4 md:w-16 md:h-16 mr-0 md:mr-5" />
        <span className="hidden md:flex">Startup Demo Day</span>
      </button>

      {/* Tab 5 */}
      <button className={activeTab === 'National Forum on Entrepreneur' ? `${tabStyles} text-red-600` : tabStyles} onClick={() => onTabClick('National Forum on Entrepreneur')}>
        <IconMessage className="w-4 h-4 md:w-16 md:h-16 mr-0 md:mr-5" />
        <span className="hidden md:flex">National Forum on Entrepreneur</span>
      </button>

      {/* Tab 6 */}
      <button className={activeTab === 'Vadodara Toycathon' ? `${tabStyles} text-red-600` : tabStyles} onClick={() => onTabClick('Vadodara Toycathon')}>
        <IconBuildingStore className="w-4 h-4 md:w-16 md:h-16 mr-0 md:mr-5" />
        <span className="hidden md:flex">Vadodara Toycathon</span>
      </button>
    </div>
  );
};

export default Tabs;
