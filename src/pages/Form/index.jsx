import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Head from "next/head";
import React, { useState } from "react";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// const URL = process.env.API_URL;
const URL =
  "https://script.google.com/macros/s/AKfycbzjK5KS9SkeqWYU2Fv5m5COyMBAX-bVQdEctvkhFLgVGTUPN4cXKogLuX2JDy_yAr4Fdw/exec";

function index() {
  const [btnText, setBtnText] = useState("Submit");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [Flag1, setFlag1] = useState(false);
  const [Flag2, setFlag2] = useState(false);
  const [contact, setContact] = useState("");

  const handleContactChange = (e) => {
    const inputValue = e.target.value;
    if (/^[0-9]{0,10}$/.test(inputValue)) {
      setContact(inputValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Please wait...");
    setBtnDisabled(true);

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: new URLSearchParams(new FormData(e.target)),
      });

      if (response.ok) {
        e.target.reset();
        setBtnText("Thank You");
        setBtnDisabled(false);
        await delay(5000);
        setBtnText("Submit");
        // window.location.href='';
      } else {
        // Handle error case
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-white h-full ">
      <div className="justify-center flex-col items-center flex pt-10">
        <h1 className="text-4xl font-medium text-red-600 ">Startup Support</h1>
        <p className="text-base font-light mt-2 text-gray-500">
          We are here to help you
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        id="contactForm"
        className="bg-white text-black max-w-3xl flex flex-col items-start justify-center p-4 mx-auto space-y-4"
      >
        {/* Question 1 */}
        <div
          className={`flex flex-col h-96  w-max-2xl w-full items-center justify-center ${
            Flag1 ? "hidden" : "block"
          }`}
        >
          <label className="font-semibold text-lg">
            What type of support do you need?
          </label>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 mt-5">
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag1(true)}
                name="Type_Of_Support"
                type="radio"
                value="incubation"
                className="mr-2 hidden "
              />
              Incubation
            </label>
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag1(true)}
                name="Type_Of_Support"
                type="radio"
                value="growth_pad"
                className="mr-2 hidden"
              />
              Growth Pad
            </label>
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag1(true)}
                name="Type_Of_Support"
                type="radio"
                value="need_based_support"
                className="mr-2 hidden"
              />
              Need Based Support
            </label>
          </div>
        </div>

        {/* Question 2 */}
        <div
          className={`flex flex-col h-96  w-max-2xl w-full items-center justify-center ${
            Flag1 ? (Flag2 ? "hidden" : "block") : "hidden"
          }`}
        >
          <label className="font-semibold text-lg">
            Where do you want to Apply?
          </label>
          <div className="flex flex-col space-y-1 ml-4 mt-1">
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag2(true)}
                name="Apply_at"
                type="radio"
                value="edc_parul_university"
                className="mr-2 hidden"
              />
              EDC Parul University
            </label>
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag2(true)}
                name="Apply_at"
                type="radio"
                value="vadodara_startup_studio"
                className="mr-2  hidden"
              />
              Vadodara Startup Studio
            </label>
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag2(true)}
                name="Apply_at"
                type="radio"
                value="surat_startup_studio"
                className="mr-2 hidden"
              />
              Surat Startup Studio
            </label>
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag2(true)}
                name="Apply_at"
                type="radio"
                value="rajkot_startup_studio"
                className="mr-2 hidden"
              />
              Rajkot Startup Studio
            </label>
            <label className="md:text-lg uppercase text-white bg-red-600 text-base px-6 md:px-8 py-1 md:py-2 rounded-md hover:shadow-lg shadow-md shadow-red-400 hover:shadow-red-400 border-red-600  border-[1px]  duration-500 cursor-pointer">
              <input
                onChange={() => setFlag2(true)}
                name="Apply_at"
                type="radio"
                value="ahemdabad_startup_studio"
                className="mr-2 hidden"
              />
              Ahmedabad Startup Studio
            </label>
          </div>
        </div>
        <div className={`${Flag2 ? "block" : "hidden"}`}>
          <div className="flex flex-row w-full gap-x-6">
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Email Address</label>
              <input
                name="Email"
                type="email"
                className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
                placeholder="Email Address"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Name</label>
              <input
                name="Name"
                type="text"
                className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
                placeholder="What's your Name? "
              />
            </div>
          </div>

          <div className="flex flex-row w-full gap-x-6 mt-4">
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Contact Number</label>
              <input
                name="Contact"
                type="tel"
                value={contact}
                pattern="[0-9]{10}"
                onChange={handleContactChange}
                className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
                placeholder="Contact Number"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Enrollment Number</label>
              <input
                name="Enrollment"
                type="text"
                placeholder="What's your Enrollment Number? "
                className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">Applicant Category</label>
            <div className="flex flex-col space-y-1 ml-4 mt-1">
              <label>
                <input
                  name="Category"
                  type="radio"
                  value="Parul University Student"
                  className="mr-2"
                />
                Parul University Student
              </label>
              <label>
                <input
                  name="Category"
                  type="radio"
                  value="Parul University Staff member"
                  className="mr-2"
                />
                Parul University Staff member
              </label>
              <label>
                <input
                  name="Category"
                  type="radio"
                  value="Parul University Alumni"
                  className="mr-2"
                />
                Parul University Alumni
              </label>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">
              Write the names of all the other team members separated by commas.
            </label>
            <input
              name="Team_Members"
              type="text"
              placeholder="Name of all your Team Members"
              className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4 w-[95%]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">
              Title of the Startup/Idea/Innovation
            </label>
            <input
              name="Title"
              type="text"
              placeholder="Title"
              className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">
              Define the problem that your Startup is solving.
            </label>
            <input
              name="Problem"
              type="text"
              placeholder=""
              className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">
              Describe the Solution
            </label>
            <input
              name="Solution"
              type="text"
              placeholder=""
              className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">
              Explain the uniqueness and distinctive features of the (product /
              process / service) solution
            </label>
            <input
              name="Features"
              type="text"
              placeholder=""
              className="border-[1px] border-gray-400 mt-1 rounded-md py-2 focus:border-red-600 outline-none px-4"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="font-semibold text-lg">
              Current Stage of Startup
            </label>
            <div className="flex flex-col space-y-1 ml-4 mt-1">
              <label>
                <input
                  name="Startup_Stage"
                  type="radio"
                  value="Idea"
                  className="mr-2"
                />
                Idea
              </label>
              <label>
                <input
                  name="Startup_Stage"
                  type="radio"
                  value="Prototype Stage (If you have developed any working prototype of a solution proposed)"
                  className="mr-2"
                />
                Prototype Stage (If you have developed any working prototype of
                a solution proposed)
              </label>
              <label>
                <input
                  name="Startup_Stage"
                  type="radio"
                  value=" Startup Stage (If you have developed a final marketable product/service platform)"
                  className="mr-2"
                />
                Startup Stage (If you have developed a final marketable
                product/service platform)
              </label>
            </div>
          </div>

          <input
            type="submit"
            id="btnSubmit"
            value={btnText}
            disabled={btnDisabled}
            className="bg-red-600 text-white mb-4 mt-10 rounded-md py-2 px-4  flex items-center justify-center w-full hover:bg-red-800 cursor-pointer duration-300"
          />
        </div>
      </form>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default index;
