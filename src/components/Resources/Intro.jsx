import React from "react"

const Intro = () => {
  return (
    <>
      <div className="h-screen bg-blue-900 bg-opacity-10 flex justify-center items-center text-center">
        <div className="hidden -mt-20 md:block">
          <h1
            className="text-base drop-shadow-[3px_3px_5px_rgb(26,26,26)] md:text-5xl font-semibold uppercase"
          >
            Resources
          </h1>
          <h2
            className="mt-3 text-sm md:text-2xl font-normal drop-shadow-[3px_3px_5px_rgb(29,29,29)]"
          >
            You don&apos;t learn to walk by following rules. You learn by doing,
            and by falling over.
          </h2>
        </div>

        <div className="md:hidden">
          <h1 className="text-3xl font-semibold uppercase">Resources</h1>
          <h2 className="mt-1 text-base md:text-3xl font-medium">
            You don&apos;t learn to walk by following rules. You learn by doing,
            and by falling over.
          </h2>
        </div>
      </div>
    </>
  )
}

export default Intro
