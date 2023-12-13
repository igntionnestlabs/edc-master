import { IconMail, IconMapPin, IconPhoneCall } from '@tabler/icons-react'
import React from 'react'

export const AddressCard = () => {
    const cardStyle = {
        // boxShadow: '0px 0px 5px 5px rgba(0,0,0,0.06)',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div className=' mx-4 md:mx-20 '>
            <div style={cardStyle} className='py-7 rounded-lg border-[1px] border-gray-200'>
                <IconMapPin size={30} color="#ed1b23" stroke={1.5} />
                <h1 className="text-[#777777] text-lg font-medium mt-3 mb-2">Our Address</h1>
                <p className='text-[#ed1b23] text-base text-center  w-[90%] md:w-[80%]'>
                    Entrepreneurship Development Centre - Parul University
                    P.O.Limda, Ta.Waghodia – 391760 Dist. Vadodara, Gujarat (India)
                </p>
            </div>

            <div className='flex flex-col md:flex-row mt-8'>
                <div style={cardStyle} className='py-7 rounded-lg w-full mr-6 border-[1px] border-gray-200'>
                    <IconMail size={30} color="#ed1b23" stroke={1.5} />
                    <h1 className="text-[#777777] text-lg font-medium mt-3 mb-2">Email Us</h1>
                    <p className='text-[#ed1b23] text-base text-center w-[80%]'>
                        edc@paruluniversity.ac.in
                    </p>
                </div>
                <div style={cardStyle} className='py-7 rounded-lg w-full mt-8 md:mt-0 border-[1px] border-gray-200'>
                    <IconPhoneCall size={30} color="#ed1b23" stroke={1.5} />
                    <h1 className="text-[#777777] text-lg font-medium mt-3 mb-2">Call Us</h1>
                    <p className='text-[#ed1b23] text-base text-center w-[80%]'>
                        0266-8260350
                    </p>
                </div>
            </div>
        </div>
    )
}
