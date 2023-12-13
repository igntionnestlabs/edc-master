import React, { useEffect, useState } from "react"
import { IconFileDownload } from "@tabler/icons-react"
import Link from "next/link"

const dummyData = [
  {
    title:
      "Parul University Policy on supporting establishment of clinic/ healthcare facilities by students of ayurved and homoeopathy",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf9.pdf",
  },
  {
    title:
      "Scheme for assistance for Startups/Innovation – Gujarat Industrial Policy 2020",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf1.pdf",
  },
  {
    title: "Extended support for End-to-End IP facilitation",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf2.pdf",
  },
  {
    title:
      "Scheme of assistance for Incubators and Start ups under Electronics & IT/ITeS Start-up Policy for the State of Gujarat (2016-21)",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf3.pdf",
  },
  {
    title:
      "Scheme of assistance for Biotechnology (BT) Industry Under Gujarat State Biotechnology Policy (2016-21)",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf4.pdf",
  },
  {
    title: "Intellectual Property Guidelines Academia Gujarat",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf5.pdf",
  },
  {
    title: "SSIP Education Policy",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf6.pdf",
  },
  {
    title: "Start-Up and Innovation Policy",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf7.pdf",
  },
  {
    title: "Policy on Intellectual Property Rights",
    link: "https://edc.paruluniversity.ac.in/src/pdf/pdf8.pdf",
  },
]

const ResourcesLibrary = () => {
  const [resourcesData, setResourcesData] = useState([])

  useEffect(() => {
    const retrieveResourcesData = async () => {
      // api call to get the data

      // data manipulation to match the required structure

      const data = dummyData
      setResourcesData(data)
    }
    retrieveResourcesData()
  }, [])

  return (
    <section className="bg-[#f0f4f8] py-[60px] ">
      <div className=" mx-5 md:mx-20 lg:mx-[210px] lg:px-[24px]">
        <div className="flex items-center gap-x-3">
          <h1 className="uppercase text-[#5c8eb0] text-[14px] font-medium">
            Resources
          </h1>
          <div className="border-red-400 border-b-[1px] w-40"></div>
        </div>
        <h1 className="uppercase text-4xl text-[#263d4d] font-bold mt-2">
          Check our resources and startup support policies
        </h1>
        <div className="text-[#444444] gap-x-[24px] grid pt-10">
          {resourcesData?.map((rd, index) => (
            <div
              className={`${
                index === 0 ? "col-span-2" : "col-span-1"
              } bg-white text-[#365870] items-center w-full rounded-md text-lg mb-[30px] p-[30px] flex`}
              key={rd?.title}
            >
              <IconFileDownload
                className="text-red-500"
                height={40}
                width={40}
              />
              <Link
                target="_blank"
                className="flex-1 font-semibold ml-[30px] mb-[15px] hover:text-red-600 duration-300"
                href={rd?.link}
              >
                {rd?.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResourcesLibrary
