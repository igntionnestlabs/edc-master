import Image from "next/image";


const VadoadarFest = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-x-32 mt-5  md:mt-10">
            <div className="md:w-[50%] md:hidden flex">
            <Image src="/assets/events/starupFest.png" width={500} height={500} />
        </div>
        <div className="md:w-[50%]">
            <h1 className="text-gray-600 text-4xl">Vadodara Start-up Festival</h1>
            <p className="text-base text-gray-600 mt-6">Vadodara Start-up Festival is here to achieve just that by providing a platform to network and learn from the leading Entrepreneurs and Mentors. It empower the entrepreneurship qualities as well as knowledge about start-ups in Students and give opportunities to new entrepreneurs.  </p>
        </div>

        <div className="md:w-[50%] hidden md:flex">
            <Image src="/assets/events/starupFest.png" width={500} height={500} />
        </div>
        </div>
    );
}

export default VadoadarFest;