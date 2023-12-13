import Image from "next/image"
import { navLinks } from "./links"
import Link from "next/link"
import {
  IconChevronRight,
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react"
import React, { useState, useEffect } from "react"
import MobileNavbar from "./MobileNavbar"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const [facilitiesDropdownOpen, setFacilitiesDropdownOpen] = useState(false)
  const [happeningsDropdownOpen, setHappeningsDropdownOpen] = useState(false)
  const [flagshipEventsDropdownOpen, setFlagshipEventsDropdownOpen] =
    useState(false)
  const [initaitivesDropdownOpen, setInitaitivesDropdownOpen] = useState(false)
  const [startupStudioOpen, setStartupStudioOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true) // User has scrolled down
    } else {
      setIsScrolled(false) // User is at the top of the page
    }
  }

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const openFacilitiesDropdown = () => {
    setFacilitiesDropdownOpen(true)
  }

  const closeFacilitiesDropdown = () => {
    setFacilitiesDropdownOpen(false)
  }

  const openHappeningsDropdown = () => {
    setHappeningsDropdownOpen(true)
  }

  const closeHappeningsDropdown = () => {
    setHappeningsDropdownOpen(false)
  }

  const openFlagshipEventsDropdown = () => {
    setFlagshipEventsDropdownOpen(true)
  }

  const closeFlagshipEventsDropdown = () => {
    setFlagshipEventsDropdownOpen(false)
  }

  const openInitiativesDropdown = () => {
    setInitaitivesDropdownOpen(true)
  }

  const closeInitiativesDropdown = () => {
    setInitaitivesDropdownOpen(false)
  }

  const openStartupStudioDropdown = () => {
    setStartupStudioOpen(true)
  }

  const closeStartupStudioDropdown = () => {
    setStartupStudioOpen(false)
  }

  const pageRouting = (route) => {
    router.push(route)
  }

  return (
    <nav
      className={`fixed top-0 w-full left-0 z-[100] ${
        isScrolled
          ? "bg-opacity-90 backdrop-blur-md duration-500"
          : " bg-transparent"
      } pt-5 py-4 px-0`}
    >
      <div className="my-0 mx-32  flex justify-between">
        {/* logo */}
        <div className="items-center hidden md:flex flex-row ml-10 justify-center">
          <Link href="/">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={150}
              height={150}
              className="image"
            />
          </Link>
        </div>
        <div className="hidden md:flex flex-row items-center gap-x-6">
          <div className="flex flex-row gap-6 font-medium text-white text-[16px] ">
            <div
              onClick={() => pageRouting("/")}
              className="nav-link text-[15px] initial-border"
            >
              HOME
            </div>
            <div className="nav-link text-[14px]">ABOUT US</div>
            <Link href="/Achievements" className="nav-link text-[15px]">
              {" "}
              ACHIEVEMENTS
            </Link>
            <div
              className="nav-link relative group text-white"
              onMouseEnter={openFacilitiesDropdown}
              onMouseLeave={closeFacilitiesDropdown}
            >
              <div className="flex items-center gap-1 text-[14px]">
                FACILITIES
                <IconChevronDown size={18} color="white" />
              </div>
              {facilitiesDropdownOpen && (
                <div className="absolute left-0 mt-2 py-4 bg-white shadow-lg rounded-md w-60">
                  <p className="text-black px-6 py-2 text-[15px] font-light hover:text-red-500">
                    <Link href="/Facilities/Pre-Incubation">Pre-Incubation</Link>
                  </p>
                  <p className="text-black px-6 py-2 text-[15px] font-light hover:text-red-500">
                    <Link href="/Facilities/Incubation">Incubation</Link>
                  </p>
                </div>
              )}
            </div>
            <div
              className="nav-link relative group text-white"
              onMouseEnter={openHappeningsDropdown}
              onMouseLeave={closeHappeningsDropdown}
            >
              <div className="flex items-center gap-1 text-[14px]">
                HAPPENINGS
                <IconChevronDown size={18} color="white" />
              </div>
              {happeningsDropdownOpen && (
                <div className="absolute left-0 mt-2 py-4 w-60 bg-white shadow-lg rounded-md">
                  <p
                    className="text-black py-2 px-6 text-[15px] cursor-pointer hover:text-red-500"
                    onMouseEnter={openFlagshipEventsDropdown}
                    onMouseLeave={closeFlagshipEventsDropdown}
                  >
                    <div className="flex items-center text-[15px] font-light justify-between">
                      Flagship Events
                      <IconChevronRight size={20} color="black" />
                    </div>
                    {flagshipEventsDropdownOpen && (
                      <div className="absolute right-60 top-5 mt-0 py-4 w-64 bg-white shadow-lg rounded-lg">
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="https://vadodarainnofest.paruluniversity.ac.in/programs/hackathon">Vadodara Hackathon</Link>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Vadodara Startup Festival</Link>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <Link href="#">Kiddovation</Link>
                        </p>
                      </div>
                    )}
                  </p>
                  <p
                    className="text-black py-2 px-6 text-[15px] cursor-pointer hover:text-red-500"
                    onMouseEnter={openInitiativesDropdown}
                    onMouseLeave={closeInitiativesDropdown}
                  >
                    <div className="flex items-center text-[15px] font-light justify-between">
                      Initiatives
                      <IconChevronRight size={20} color="black" />
                    </div>
                    {initaitivesDropdownOpen && (
                      <div className="absolute right-60 top-12 mt-0 py-4 w-96 bg-white shadow-lg rounded-lg">
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("#")}>
                            Entrepreneurship Sensitisation Campaign
                          </p>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("startupmart")}>
                            EDC Open Day
                          </p>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("startupmart")}>
                            Idea Lounge
                          </p>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("startupmart")}>
                            EDC Open House
                          </p>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("startupmart")}>
                            Startup Yatra Series
                          </p>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("startupmart")}>
                            Students Associateship Programme
                          </p>
                        </p>
                        <p className="text-black py-2 px-6 text-[15px] font-light hover:text-red-500">
                          <p onClick={() => pageRouting("webinar")}>
                            Webinars and Workshops
                          </p>
                        </p>
                      </div>
                    )}
                  </p>
                  <div
                    onClick={() => pageRouting("resources")}
                    className="relative py-2 px-6 group text-[15px] font-light cursor-pointer text-black hover:text-red-500"
                  >
                    Resources
                  </div>
                </div>
              )}
            </div>
            <div className="nav-link flex items-center gap-1 text-[14px]">
                CONTACT US
              </div>
          </div>

          <div className="nav-link  ">
            <Link href={"/FabLab"} className="px-4 hidden uppercase md:flex py-1.5 bg-red-500 duration-500 rounded-md hover:bg-red-700 text-white font-sm">
              Fablab
            </Link>
          </div>

          <div
              className="nav-link relative group text-white"
              onMouseEnter={openStartupStudioDropdown}
              onMouseLeave={closeStartupStudioDropdown}
            >
              <div className="px-4 flex py-1.5 bg-red-500 duration-500 items-center rounded-md hover:bg-red-700 text-white font-sm">
                Startup Studio
                <IconChevronDown size={18} color="white" />
              </div>
              {startupStudioOpen && (
  <div className="absolute left-0 mt-2 py-4 bg-white shadow-lg rounded-md w-60">
    <p className="text-black px-6 py-2 text-[13px] font-light hover:text-red-500">
      <Link href="https://vadodara-startup.vercel.app/" target="_blank" rel="noopener noreferrer">Vadodara Startup Studio</Link>
    </p>
    <p className="text-black px-6 py-2 text-[13px] font-light hover:text-red-500">
      <Link href="https://surat-startup.vercel.app/" target="_blank" rel="noopener noreferrer">Surat Startup Studio</Link>
    </p>
    <p className="text-black px-6 py-2 text-[13px] font-light hover:text-red-500">
      <Link href="https://rajkot-startup.vercel.app/" target="_blank" rel="noopener noreferrer">Rajkot Startup Studio</Link>
    </p>
    <p className="text-black px-6 py-2 text-[13px] font-light hover:text-red-500">
      <Link href="https://ahmedabad-startup.vercel.app/" target="_blank" rel="noopener noreferrer">Ahmedabad Startup Studio</Link>
    </p>
  </div>
)}
            </div>
        </div>
      </div>

      <div className="md:hidden flex px-6 pb-6 flex-row w-full justify-between items-center">
        <div className="items-start ">
          <Link href="/">
            <Image
              src={"/assets/logo.png"}
              alt="logo"
              width={150}
              height={150}
              className="image"
            />
          </Link>
        </div>

        <div className="flex justify-end items-end ">
          <button className="" onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <IconX size={30} color="white" />
            ) : (
              <IconMenu2 size={30} color="white" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <MobileNavbar
          navLinks={navLinks}
          handleMenuToggle={handleMenuToggle}
          isOpen={isMenuOpen}
        />
      )}
    </nav>
  )
}

export default Navbar
