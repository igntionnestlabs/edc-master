import Image from "next/image";


const WomenStartup = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-x-32 mt-5  md:mt-10">
              <div className="md:hidden flex md:w-[50%]">
            <Image src="/assets/events/womenStarup.png" width={500} height={500} />
        </div>
        <div className="md:w-[50%]">
            <h1 className="text-gray-600 text-4xl">Women's Startup Meet</h1>
            <p className="text-base text-gray-600 mt-6">Women's Start-up Meet is an initiative by EDC to help aspiring women entrepreneurs gain an edge by building their skills, network and gaining hands-on experience. This event will help female students gain the skills to come up with an idea which is aligned with their strengths, interest, and passion, and can have some commercial potential. </p>
        </div>

        <div className="md:flex hidden md:w-[50%]">
            <Image src="/assets/events/womenStarup.png" width={500} height={500} />
        </div>
        </div>
    );
}

export default WomenStartup;