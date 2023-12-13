import Image from 'next/image'
import React from 'react'
import Label from '../Label'
import { IconBrandFacebook } from '@tabler/icons-react'
import Arrow from '../Icons'


const Footer = () => {
    return (
        <footer className=" flex flex-col  justify-center bg-gray-800   md:pt-20">
            <div className="flex flex-col justify-center text-center">

                <div className="pt-10 md:pt-0">
                    <div className="flex flex-col md:flex-row gap-x-20 mx-5  md:mx-20">
                        <div className="col-span-1 md:col-span-2">
                            <a href="/" className="logo">
                                <Image src="/assets/logofooter.png" alt="logo" width={300} height={50} />
                            </a>
                            <p className='text-left text-sm font-light mt-5'>
                                Entrepreneurship Development Centre<br />
                                P.O.Limda, Ta.Waghodia – 391760 Dist. <br /> Vadodara, Gujarat (India)<br /><br />
                                <strong>Phone:</strong> 0266-8260350<br />
                                <strong>Email:</strong> edc@paruluniversity.ac.in<br />
                            </p>
                            <div className="flex w-[100%] items-center  gap-x-4 mr-4 mt-5 text-xl">
                                <div className='hover:bg-red-500 duration-300 cursor-pointer rounded bg-white/20 p-2 backdrop-blur transition'>
                                    <IconBrandFacebook size={20} color="white" stroke={1} />

                                </div>
                                <a aria-label="social-link" className="socials  text-white hover:bg-red-500 duration-300 cursor-pointer rounded bg-white/20 p-2 backdrop-blur transition " href="https://www.instagram.com/edc_pu/" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a aria-label="social-link" className="socials  text-white hover:bg-red-500 duration-300 cursor-pointer rounded bg-white/20 p-2 backdrop-blur transition " href="https://twitter.com/edc_pu" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                        </path></svg>
                                </a>
                                <a aria-label="social-link" className="socials  text-white hover:bg-red-500 duration-300 cursor-pointer rounded bg-white/20 p-2 backdrop-blur transition " href="" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-1">
                            <h4 className="mb-4 text-left font-medium text-lg">Useful Links</h4>
                            <div className="mb-5 grid grid-rows-2 gap-3 lg:grid-rows-3">

                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Home"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"About us"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"StartupMart"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Achievements"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Happenings"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1 text-left">
                                    <Arrow />
                                    <Label label={"Flagship Events"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Contact Us"} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-1">
                            <h4 className="mb-4 text-left font-medium text-lg">Our Services</h4>
                            <div className="mb-5 grid grid-rows-2 gap-3 lg:grid-rows-3">

                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Vadodara Hackathon"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Women Startup Meet"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Vadodara Startup Festival"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Startup Demo Day"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1 text-left">
                                    <Arrow />
                                    <Label label={"National Forum on Social Entrepreneurship"} />
                                </div>
                                <div className="group flex w-full items-center gap-x-1 p-1">
                                    <Arrow />
                                    <Label label={"Vadodara Toycathon"} />
                                </div>

                            </div>
                        </div>


                        <div className="mt-4 md:mt-1 text-left">
                            <h4 className="mb-4 text-left font-medium text-lg">Newsletter</h4>
                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            <form action="" method="post" className="flex flex-col items-center md:flex-row gap-x-2 mt-4 ">
                                <input type="email" name="email" placeholder="Enter your email" className="w-full md:w-2/3 bg-white text-white outline-none border-2 focus:border-red-500 rounded-md py-2 px-3 mb-3 md:mb-0" />
                                <input type="submit" value="Subscribe" className=" px-5 cursor-pointer  bg-red-600 hover:bg-red-700 text-white rounded-lg py-2" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-gray-900 mx-auto text-center  py-10">
                        <p className='text-sm mx-4 md:text-base'>
                            &copy; Copyright 2021. All Rights Reserved by <strong><span><a className='text-red-600' target="_blank" rel="noopener noreferrer" href="https://www.paruluniversity.ac.in"> Parul University.</a></span></strong>
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer