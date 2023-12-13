import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Intro from "@/components/Resources/Intro"
import ResourcesLibrary from "@/components/Resources/ResourcesLibrary"
import React from "react"

const Resources = () => {
  return (
    <>
      <main className="relative">
        <style jsx>{`
          main::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-image: url("/assets/resources-bg.jpg");
            background-attachment: fixed;
            background-size: cover;
            opacity: 0.4;
            z-index: -1;
          }
        `}</style>
        <Navbar />
        <Intro />
        <ResourcesLibrary />
        <Footer />
      </main>
    </>
  )
}

export default Resources
