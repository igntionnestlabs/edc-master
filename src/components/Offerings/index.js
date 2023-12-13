import React from 'react';
import { Briefcase, CashStack, GearWideConnected, Heart, Person } from 'bootstrap-icons-react';
import OfferingsCard from './Card/OfferingCard';
import { PiggyBank, PiggyBank2 } from '../Icons';
import { Icon12Hours, IconArrowsDiagonal, IconBuilding, IconHome, IconMicrophone } from '@tabler/icons-react';
import { IconBulb, IconCurrency, IconPigMoney, IconUser } from "@tabler/icons-react";


const Offerings = () => {
    return (

        <section className="  bg-[#f0f4f8] py-16 ">

            <div className='flex flex-col mx-10 md:mx-20'>
                <div className=" flex items-center gap-x-3">

                    <h1 className="uppercase text-[#5c8eb0] text-sm md:text-base font-medium">Offerings</h1>
                    <div className="border-red-400 border-b-[1px] w-40"></div>
                </div>
           


            <h1 className='uppercase text-xl md:text-3xl text-[#263d4d] font-bold'>Check Our Offerings</h1>

            </div>


            <div className='flex  flex-col md:flex-row justify-center mx-10 md:mx-0 flex-wrap pt-10  gap-x-6 '>
                <OfferingsCard
                    icon={Briefcase}
                    title="Startup Counselling & Handhold Support"
                    description="To ensure that whatever is in the mind of the student directly meets the needs of the world."
                />

                <OfferingsCard
                    icon={PiggyBank2}
                    title="Access to Pre-Seed & Seed Grants & Funding Opportunities"
                    description="Government Grants/Schemes, Private Seed, Angel & VC Funding, Short-term & Long-term Loans."
                />
                <OfferingsCard
                    icon={IconHome}
                    title="Co-working Space & Allied Resources"
                    description="Flexi & Dedicated Work Desk, Meeting Lounges, Seminar Hall & Allied Resources"
                />
                <OfferingsCard
                    icon={IconMicrophone}
                    title="Startup Programs"
                    description="Tailored programs for student entrepreneurs: Incubation (idea to growth), Launchpad (launching ideas), Accelerating (fast growth)."
                />

                <OfferingsCard
                    icon={IconBuilding}
                    title="Product Development"
                    description="Avail to FABLAB and other Prototyping facilities to help innovators bring the idea to real world"
                />

                <OfferingsCard
                    icon={IconArrowsDiagonal}
                    title="Mentor Connect"
                    description="Easy Connect of Vast & Experienced Pool of Startup mentors and Domain Experts"
                />

                <OfferingsCard
                    icon={IconBulb}
                    title="Startup Community Connect"
                    description="Networking opportunities to connect with Ecosystem stakeholders. "
                />
                <OfferingsCard
                    icon={GearWideConnected}
                    title="Startup Events"
                    description="Access to various Startup Events, Startyup Festival, Demo Days, Startup Expo, Idea pitching and E-Talks."
                />
            </div>
        </section>
    );
};
export default Offerings;