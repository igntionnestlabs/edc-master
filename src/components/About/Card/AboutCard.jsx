import { IconBulb, IconCurrency, IconPigMoney, IconUser } from "@tabler/icons-react";
import { Briefcase, CashStack, GearWideConnected, Heart, Person } from 'bootstrap-icons-react';
import { CashCoin, PiggyBank } from "../../Icons";
import VideoBox from "./VideoBox";

const AboutCard = () => {

    const data = {
        Startups: 180,
        students: 40000,
        revenue: 30,
        funds: 8.6,
        employments: 1100,
        networking: 100
    }

    return (
        <div className=" bg-white  mt-20 mb-20  rounded-md  md:mx-20 mx-8" style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' 
        }}>

            <div className="flex md:flex-row flex-col justify-between ">
               <div className="flex flex-row md:flex-col justify-between mx-6 md:mx-20 my-10 gap-y-20  ">
                    <div className="flex flex-row items-center">
                        <IconBulb size={54} stroke={1.1} color="#a1bdd1" className="md:hidden flex"/>
                        <IconBulb size={72} stroke={1.1} color="#a1bdd1" className="md:flex hidden"/>

                        <div className="text-left mt-3">
                            <h1 className="text-lg md:text-2xl font-semibold uppercase text-[#365870] ">{data.Startups} +</h1>
                            <p className=" text-xs md:text-base text-[#365870] font-medium">Startups Incubated</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <PiggyBank className="h-10 md:hidden flex w-10"/>
                        <PiggyBank className="h-14 md:flex hidden w-14"/>

                        <div className="text-left mt-3 ml-2">
                            <h1 className="text-lg md:text-2xl font-semibold  text-[#365870] ">{data.funds} Cr+</h1>
                            <p className=" text-xs md:text-base text-[#365870] font-medium">Funds to support Startup </p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row md:flex-col justify-between mx-6 md:mx-20 my-10 gap-y-20">

                    <div className="flex flex-row items-center">
                        <Person color="#a1bdd1" className="w-12 h-12 md:flex hidden" />
                        <Person color="#a1bdd1" className="w-9 h-9 md:hidden flex" />

                        <div className="text-left mt-3 ml-2">
                            <h1 className="text-lg md:text-2xl font-semibold uppercase text-[#365870] ">{data.students} +</h1>
                            <p className=" text-xs md:text-base text-[#365870] font-medium">Students reached</p>
                        </div>
                    </div>
                    <div className="flex flex-row  items-center">
                        <Briefcase color="#a1bdd1" className="w-12 h-12 md:flex hidden" />
                        <Briefcase color="#a1bdd1" className="w-9 h-9 md:hidden flex" />
                        <div className="text-left mt-3 ml-2">
                            <h1 className="text-lg md:text-2xl font-semibold uppercase text-[#365870] ">{data.employments} +</h1>
                            <p className=" text-xs md:text-base text-[#365870] font-medium">Employment Generated</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col justify-between mx-6 md:mx-20 my-10 gap-y-20">


                    <div className="flex flex-row items-center">
                        <CashCoin />
                        <div className="text-left mt-3 ml-2">
                            <h1 className="text-lg md:text-2xl font-semibold  text-[#365870] ">{data.revenue} Cr+</h1>
                            <p className=" text-xs md:text-base text-[#365870] font-medium">Revenue generated by Startups</p>
                        </div>
                    </div>

                    <div className="flex flex-row items-center">
                        <GearWideConnected color="#a1bdd1" className="w-12 h-12 md:flex hidden" />
                        <GearWideConnected color="#a1bdd1" className="w-9 h-9 md:hidden flex" />
                        
                        <div className="text-left mt-3 ml-2">
                            <h1 className="text-lg md:text-2xl font-semibold uppercase text-[#365870] ">{data.networking} +</h1>
                            <p className=" text-xs md:text-base text-[#365870] font-medium">Annual Networking Events</p>

                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-4 md:mx-8 flex items-center gap-x-3">
                <h1 className="uppercase text-[#5c8eb0] text-sm md:text-base font-medium">About us</h1>
                <div className="border-red-400 border-b-[1px] w-40"></div>
            </div>


            <div className="flex md:flex-row flex-col">
                <div className="container mt-5">
                    <VideoBox />
                </div>

            </div>

        </div>
    );
}
export default AboutCard;