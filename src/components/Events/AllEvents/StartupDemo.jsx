import Image from "next/image";


const StartupDemo = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-x-32 mt-5 md:mt-10">
            <div className="md:hidden flex md:w-[50%]">
            <Image src="/assets/events/startupVadodar.png" width={500} height={500} />
        </div>
        <div className="md:w-[50%]">
            <h1 className="text-gray-600 text-4xl">Startup Demo Day</h1>
            <p className="text-base text-gray-600 mt-6">Around 10-12 promising startups would be selected and provided an opportunity for pitching their propositions at Vadodara Startup Demo Day, who would be judged by an esteemed panel, which could be a precursor to the primary level screening for Vadodara Startup Studio's Launchpad & Acceleration Program.   </p>
        </div>

        <div className="md:flex hidden md:w-[50%]">
            <Image src="/assets/events/startupVadodar.png" width={500} height={500} />
        </div>
        </div>
    );
}

export default StartupDemo;