import Image from "next/image";
import React from "react";
import SpaceCard from "./SpaceCard";

const CreativeSpace = () => {
    const data = [
        {
            id: 1,
            title: 'Learn',
            description: 'Learning academics and vocational skills',
            image: '/assets/creativeSpace/learn.png',
            serial: 'a'
        },
        {
            id: 2,
            title: 'Develop',
            description: 'Developing innovations and inventions',
            image: '/assets/creativeSpace/develop.png',
            serial: 'b'
        },
        {
            id: 3,
            title: 'Create',
            description: 'Creating businesses for the future',
            image: '/assets/creativeSpace/create.png',
            serial: 'c'
        },
        {
            id: 4,
            title: 'Produce',
            description: 'Producing personalized products',
            image: '/assets/creativeSpace/produce.png',
            serial: 'd'
        }
    ]

    return (
        <section className="md:h-screen  bg-white flex flex-col justify-center">
            <div className='flex flex-col  ml-10'>
                <div className=" flex items-center gap-x-3">
                    <h1 className="uppercase text-[#5c8eb0] text-base font-medium">A creative space</h1>
                    <div className="border-red-400 border-b-[1px] w-40"></div>
                </div>
                <h1 className='uppercase text-3xl text-[#263d4d] font-bold'>What will you get here?</h1>
            </div>

            <div className=" ml-32 md:mx-40 gap-y-40 flex flex-col md:flex-row">
                {data.map((item) => (
                    <SpaceCard key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
};

export default CreativeSpace;
