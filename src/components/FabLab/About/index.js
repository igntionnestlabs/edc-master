import Image from "next/image";


const AboutCard = () => {

    const data = {
        Startups: 180,
        students: 40000,
        revenue: 30,
        funds: 8.6,
        employments: 1100,
        networking: 100
    }

    return (
        <section className=" mt-14  bg-white flex flex-col justify-center  ">
            <div className=" bg-white  mt-20 mb-20  rounded-md mx-10 md:mx-20" style={{
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>

                <div className=" md:w-full ">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/BFQnJGkZL9U?si=elGzfqDnoMrCSGUS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="mx-4 md:mx-8">

                    <div className=" flex items-center gap-x-1 md:gap-x-3">
                        <h1 className="uppercase text-[#5c8eb0] text-sm tracking-wide font-medium mt-2">About FabLab</h1>
                        <div className="border-red-400 border-b-[1px] w-40"></div>
                    </div>

                    <div className="mb-20 ">
                        <h1 className="uppercase text-gray-700 mt-2 font-bold text-3xl">FABLAB PARUL UNIVERSITY</h1>

                        <div className="flex flex-row justify-between items-center">
                            <div className="w-[50%]">
                                <Image src="/assets/fab-logo.png" width={600} height={500} className="rounded-md mt-4" />
                            </div>
                            <div className="flex flex-col gap-y-2 md:w-[50%] mt-10 md:mt-0">
                                <h1 className="text-lg md:text-2xl font-semibold text-gray-700">A place for learning and innovation</h1>
                                <p className="text-base md:text-lg font-normal text-gray-600" >A fabrication Laboratory (FABLAB) is a technical prototyping platform for learning and innovation. It offering an environment which empowers students to create almost anything through advance technology. It’s an educational environment where learning happens in an authentic, engaging, personal context of imagination, designing, prototyping, reflection and iteration as they find solutions to challenges or bring their ideas to life. The digital fabrication tools like 3D Printers, laser cutters, CNC routers, vinyl cutters etc. aids them to demonstrate their ideas through technology. </p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default AboutCard;