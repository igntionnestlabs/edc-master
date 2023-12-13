import React, { useState } from 'react';
import Tabs from './Tab';
import VadodaraHackathon from './AllEvents/Hackathon';
import WomenStartup from './AllEvents/WomenStartup';
import VadoadarFest from './AllEvents/VadodaraFestival';
import Toyacthon from './AllEvents/Toyacathon';
import NationalForum from './AllEvents/NationalForum';
import StartupDemo from './AllEvents/StartupDemo';
import BoardOfGoverner from '../BoardofGoverner';
import BoardOfGovernor from '../BoardofGoverner';


const Events = () => {
  const [activeTab, setActiveTab] = useState('Vadodara Hackathon');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const data = require('../../json/governer.json');

  const renderContent = () => {
    switch (activeTab) {
      case 'Vadodara Hackathon':
        return <VadodaraHackathon />;
      case "Women's Startup Meet":
        return <WomenStartup />;
      case 'Vadodara Start-up Festival':
        return <VadoadarFest />;
      case 'Startup Demo Day':
        return <StartupDemo />;
      case 'National Forum on Entrepreneur':
        return <NationalForum />;
      case 'Vadodara Toycathon':
        return <Toyacthon />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#fff] py-16">
      <div className="flex flex-col mx-10 md:mx-20">
        <div className="flex items-center gap-x-3">
          <h1 className="uppercase text-[#5c8eb0] text-sm md:text-base font-medium">Events</h1>
          <div className="border-red-400 border-b-[1px] w-40"></div>
        </div>
        <h1 className="uppercase text-xl md:text-3xl text-[#263d4d] font-bold">Check our Flagship Events</h1>
      </div>
      <div className="mx-8 md:mx-20 items-center justify-center flex flex-col">
        <Tabs onTabClick={handleTabClick} activeTab={activeTab} />
        {renderContent()}
      </div>

      <div className="flex flex-col mx-10 md:mx-20 mt-24">
        <div className="flex items-center gap-x-1  md:gap-x-3 mb-2">
          <h1 className="uppercase text-[#5c8eb0] text-sm md:text-base font-medium">A few people of integrity can go a long way.</h1>
          <div className="border-red-400 border-b-[1px] w-40"></div>
        </div>
        <h1 className="uppercase text-xl md:text-3xl text-[#263d4d] font-bold mb-12">Board of Governors</h1>
      </div>
      <BoardOfGovernor data={data} />

    </section>
  );
};

export default Events;
