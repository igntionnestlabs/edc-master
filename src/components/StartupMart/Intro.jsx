import React from "react"

const Intro = () => {
  return (
    <>
      <div className="h-screen bg-blue-900 bg-opacity-10 flex justify-center items-center text-center">
        <div className="hidden md:block">
          <h1 className="text-base drop-shadow-[3px_3px_5px_rgb(26,26,26)] md:text-5xl font-semibold uppercase">
            Coming Soon
          </h1>
        </div>

        <div className="md:hidden">
          <h1 className="text-3xl font-semibold uppercase">Resources</h1>
        </div>
      </div>
    </>
  )
}

export default Intro
