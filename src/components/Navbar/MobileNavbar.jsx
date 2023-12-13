import React, { useState } from 'react';
import { IconChevronDown } from "@tabler/icons-react";
import Link from 'next/link';

const MobileNavbar = ({ isOpen  }) => {
    const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false);
    const [happeningsDropdownOpen, setHappeningsDropdownOpen] = useState(false);
    const [flagshipEventsDropdownOpen, setFlagshipEventsDropdownOpen] = useState(false);
    const [initaitivesDropdownOpen, setInitaitivesDropdownOpen] = useState(false);

    const handleFacilitiesDropdown = () => {
        setFacilitiesDropdownOpen(!facilitiesDropdownOpen);
    };

    const handlwHappeningsDropdown = () => {
        setHappeningsDropdownOpen(!happeningsDropdownOpen);
    }

    const handleFlagshipEventsDropdown = () => {
        setFlagshipEventsDropdownOpen(!flagshipEventsDropdownOpen);
    }

    const handleInitaitivesDropdown = () => {
        setInitaitivesDropdownOpen(!initaitivesDropdownOpen);
    }   

    return (
      <div className="md:hidden min-h-screen">
        {isOpen && (
          <nav className="space-y-4">
            <div className="text-white cursor-pointer hover:text-red-500 py-3 px-6">HOME</div>
            <div className="text-white cursor-pointer hover:text-red-500 py-3 px-6">
              ABOUT US
            </div>
            <div className="text-white cursor-pointer hover:text-red-500 py-3 px-6">
              ACHIEVEMENTS
            </div>
            <div>
              <div onClick={handleFacilitiesDropdown} className="text-white flex cursor-pointer items-center gap-2 hover:text-red-500 py-3 px-6">
                FACILITIES
                <IconChevronDown size={18} color="white" />
              </div>
              {facilitiesDropdownOpen && (
                <div className="px-4">
                  <div className="text-white font-light text-[15px] cursor-pointer hover:text-red-500 py-3 px-6">
                    Pre-Incubation
                  </div>
                  <div className="text-white font-light text-[15px] cursor-pointer hover:text-red-500 py-3 px-6">
                    Incubation
                  </div>
                </div>
              )}
            </div>
            <div>
              <div onClick={handlwHappeningsDropdown} className="text-white cursor-pointer flex items-center gap-2 hover:text-red-500 py-3 px-6">
                HAPPENINGS
                <IconChevronDown size={18} color="white" />
              </div>
              {happeningsDropdownOpen && (
                <div className=" px-4 shadow-lg text-white rounded-md">
                  <p
                    className=" py-2 px-6 text-[15px] cursor-pointer hover:text-red-500"
                  >
                    <div onClick={handleFlagshipEventsDropdown} className="flex cursor-pointer items-center text-[15px] font-light gap-2">
                      Flagship Events
                      <IconChevronDown size={20} color="white" />
                    </div>
                    {flagshipEventsDropdownOpen && (
                      <div className="mt-0 py-2 w-64 text-white shadow-lg rounded-lg">
                        <p className="py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Vadodara Hackathon</Link>
                        </p>
                        <p className="py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Vadodara Startup Festival</Link>
                        </p>
                        <p className="pt-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Kiddovation</Link>
                        </p>
                      </div>
                    )}
                  </p>

                  <p
                    className=" py-2 px-6 text-[15px] cursor-pointer hover:text-red-500"
                  >
                    <div onClick={handleInitaitivesDropdown} className="flex items-center text-[15px] font-light gap-2">
                      Initiatives
                      <IconChevronDown size={20} color="white" />
                    </div>
                    {initaitivesDropdownOpen && (
                      <div className="mt-0 py-2 text-white shadow-lg rounded-lg">
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">
                            Entrepreneurship Sensitisation Campaign
                          </Link>
                        </p>
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">EDC Open Day</Link>
                        </p>
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Idea Lounge</Link>
                        </p>
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">EDC Open House</Link>
                        </p>
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Startup Yatra Series</Link>
                        </p>
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Students Associateship Programme</Link>
                        </p>
                        <p className=" py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Webinars and Workshops</Link>
                        </p>
                      </div>
                    )}
                  </p>
                  <div className="relative py-2 px-6 group text-[15px] font-light cursor-pointer hover:text-red-500">
                    Resources
                  </div>
                </div>
              )}
            </div>
            <div className="text-white cursor-pointer hover:text-red-500 py-3 px-6">
              CONTACT US
            </div>
          </nav>
        )}
      </div>
    );
};

export default MobileNavbar;
