import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Intro from "@/components/StartupMart/Intro"
import React from "react"

const StartupMart = () => {
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
            background-image: url("/assets/coming-soon-bg.jpg");
            background-attachment: fixed;
            background-size: cover;
            opacity: 0.4;
            z-index: -1;
          }
        `}</style>
        <Navbar />
        <Intro />
        <Footer />
      </main>
    </>
  )
}

export default StartupMart
