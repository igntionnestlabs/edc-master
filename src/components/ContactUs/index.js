import React from 'react';
import { AddressCard } from './AddressCard';
import { ContactForm } from './ContactForm';
import Partners from '../Partners';
import Footer from '../Footer';


const ContactUs = ({ data }) => {


    return (
        <section className="bg-[#fff] md:h-screen pt-10 flex flex-col">
            <div className="flex flex-col mx-10 md:mx-20">
                <div className="flex items-center gap-x-3">
                    <h1 className="uppercase text-[#5c8eb0] text-base font-medium">We'd love to hear from you!</h1>
                    <div className="border-red-400 border-b-[1px] w-40"></div>
                </div>
                <h1 className="uppercase text-3xl text-[#263d4d] font-bold mt-2">Contact Us</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-10'>

                <AddressCard />
                <ContactForm />
            </div>

           

        </section>
    );
};

export default ContactUs;
