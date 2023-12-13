import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Image from "next/image";
import Offerings from "@/components/Offerings";
import Events from "@/components/Events";
import Teams from "@/components/Teams";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

export default function App() {
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
            height: 100%; /* Full height */
            background-image: url("/assets/parulImage.jpg");
            background-attachment: fixed;
            background-size: cover;
            opacity: 0.4; /* 40% opacity for the background image */
            z-index: -1; /* Place it behind the content */
          }
        `}</style>

        <Navbar />
        <Intro />
        <About />
        <Offerings />
        <Events />
        <Teams />
        <ContactUs />
        <Partners />
        <Footer />
      </main>
    </>
  );
}
