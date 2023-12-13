import Image from "next/image";


const NationalForum = () => {
    return (
        <div className="flex flex-col  md:flex-row justify-between gap-x-32 mt-5 md:mt-10">
             <div className="md:hidden flex md:w-[50%]">
            <Image src="/assets/events/socialLab.png" width={500} height={500} />
        </div>
        <div className="md:w-[50%]">
            <h1 className="text-gray-600 text-4xl">National Forum on Social Entrepreneurship</h1>
            <p className="text-base text-gray-600 mt-6">"National Forum on Social Entrepreneurship(NFSE)" will bring together Experts, Policy makers, accomplished Entrepreneurs, Funding agencies under one single platform, to address & solve the pressing issues of the nation and the social entrepreneurs trying to tackle them.   </p>
        </div>

        <div className="md:flex hidden md:w-[50%]">
            <Image src="/assets/events/socialLab.png" width={500} height={500} />
        </div>
        </div>
    );
}

export default NationalForum;