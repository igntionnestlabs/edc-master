import Image from "next/image";


const VadodaraHackathon = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-x-32 mt-5 md:mt-10">
             <div className="md:w-[50%] md:hidden flex">
            <Image src="/assets/events/vadodaraHackathon.png" width={500} height={500} />
        </div>
        <div className="md:w-[50%]">
            <h1 className="text-gray-600 text-4xl">Vadodara Hackathon</h1>
            <p className="text-base text-gray-600 mt-6"> A nationwide initiative to provide students a platform to solve some of the pressing problems faced by Industries, Government and Other private players, and thus inculcate a culture of product innovation and a mindset of problem-solving.
                First ever hybrid hackathon (Virtual + Physical) - Support for incubation, commercialization and IP - Mentoring in Tech as well as Business models - Versatile Problem Areas - Chance to be a part of Student Developer Communities
                Gov. Bodies, Municipal Corporations - Incubators, Angel Investors - Business Chambers /Associations /Forums - Small - Large Scale Industries - Student Developer</p>
        </div>

        <div className="md:w-[50%] md:flex hidden">
            <Image src="/assets/events/vadodaraHackathon.png" width={500} height={500} />
        </div>
        </div>
    );
}

export default VadodaraHackathon;