import Image from 'next/image'
import React from 'react'

export default function Supporters() {
  return (
    <>
    <div className='md:flex hidden flex-row bg-white items-center justify-center  pb-10 gap-x-6 '>
      <Image src="/assets/supporters/fab-dst.png" width={300} height={300} />
      <Image src="/assets/supporters/pu-logo.png" width={300} height={300} />
      <Image src="/assets/supporters/fab-nagpur.png" width={300} height={300} />
      <Image src="/assets/supporters/fab-foundation.png" width={300} height={300} />

    </div>
    <div className='md:hidden flex flex-row bg-white items-center justify-center flex-wrap pt-40 pb-10 gap-x-2 '>
    <Image src="/assets/supporters/fab-dst.png" width={80} height={80} />
    <Image src="/assets/supporters/pu-logo.png" width={80} height={80} />
    <Image src="/assets/supporters/fab-nagpur.png" width={80} height={80} />
    <Image src="/assets/supporters/fab-foundation.png" width={80} height={80} />

  </div>
  </>
  )
}
