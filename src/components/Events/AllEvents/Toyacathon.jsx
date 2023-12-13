import Image from "next/image";


const Toyacthon = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-x-32 mt-5  md:mt-10">
             <div className="md:hidden flex md:w-[50%]">
            <Image src="/assets/events/toycathon.png" width={500} height={500} />
        </div>
        <div className="md:w-[50%]">
            <h1 className="text-gray-600 text-4xl">Vadodara Toycathon</h1>
            <p className="text-base text-gray-600 mt-6">Vadodara Toycathon is a stepping stone of Mind to Market innovation challenge for Toy Industry. This Ideathon cum Hackathon is a propeller of the Atmanirbhar Bharat in Toy Sector.  </p>
        </div>

        <div className="md:flex hidden md:w-[50%]">
            <Image src="/assets/events/toycathon.png" width={500} height={500} />
        </div>
        </div>
    );
}

export default Toyacthon;