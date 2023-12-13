import React, { useState } from 'react'

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')


    const cardStyle = {
        // boxShadow: '0px 0px 5px 5px rgba(0,0,0,0.06)',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style={cardStyle} className='bg-white w-[90%]  md:w-[50%] mx-4 mt-8 md:mt-0 mr-20 rounded-md border-[1px] border-gray-200'>

            <form className=' '>

                <div>
                    <div className="flex flex-col md:flex-row md:mx-6  gap-y-2 items-center justify-center gap-x-6 mt-6 ">

                        <input
                            id="name"
                            className=" w-[90%] md:w-[40%] rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
                            placeholder="Your Name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            id="email"
                            className="w-[90%] md:w-[40%] rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
                            placeholder="Your Email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row w-full gap-y-2 items-center justify-center gap-x-6 mt-6 ">

                        <input
                            id="name"
                            className=" w-full mx-4 md:mx-14 rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
                            placeholder="Subject"
                            type="text"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row w-full gap-y-2 items-center justify-center gap-x-6 mt-6 ">

                        <textarea
                            id="name"
                            className=" w-full mx-4  md:mx-14 rounded-md border-[1px] border-gray-200  p-2.5  outline-none focus:border-red-400 transition-all   "
                            placeholder="Message"
                            type="text"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-row w-full gap-y-2 items-center justify-center gap-x-6 mt-6 md:mb-0 mb-10 ">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-transparent hover:text-red-500  hover:border-red-600 border-[1px] duration-500 text-white rounded-md px-10 py-2.5 font-medium"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
