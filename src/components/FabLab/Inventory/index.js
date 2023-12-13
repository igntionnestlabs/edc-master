import React from 'react'
import InventoryCard from './InventoryCard'

export default function Inventory() {

  const data =[
    {
      id:'1',
      title:'3D Printer',
      description:"Julia Advance, Fracktal Works",
      img:'/assets/inventory/replicator__1.png',    },
    {
      id:'2',
      title:'3D Scanner',
      description:"in Scan SE, Shinning 3D",
      img:'/assets/inventory/scanner.jpeg',
    },
    {
      id:'3',
      title:'CNC Router',
      description:"ES 6090, SUCESS",
      img:'/assets/inventory/router.webp',
    },
    {
      id:'4',
      title:'SLA 3D Printer',
      description:"Inkspire, Zortrax",
      img:'/assets/inventory/sla.webp',
    },
    {
      id:'5',
      title:'Laser Cutter',
      description:"AccuCut 1212, Suresh Indu Lasers",
      img:'/assets/inventory/lasercutter.jpg',
    },
    {
      id:'6',
      title:'Vacuum Forming',
      description:"Mayku - Formbox",
      img:'/assets/inventory/vaccumforming.jpg',
    },
    {
      id:'7',
      title:'PCB Milling ',
      description:"SRM 20, Roland",
      img:'/assets/inventory/pcb.webp',
    },
    {
      id:'8',
      title:'Vinyl Cutter',
      description:"GS-24, ROLAND",
      img:'/assets/inventory/Vinyl.jpg',
    },
    {
      id:'9',
      title:'ESD Workstation',
      description:"AWS 12060SP, ALKON",
      img:'/assets/inventory/esdWorkstation.png',
    },
    {
      id:'10',
      title:'Mechnical Workbench',
      description:"Mechanical Workbench",
      img:'/assets/inventory/workbench.jpg',
    },
    {
      id:'11',
      title:'Power Tools',
      description:"",
      img:'/assets/inventory/powertools.jpg',
    },
    {
      id:'12',
      title:'Hand Tools',
      description:"",
      img:'/assets/inventory/handtools.jpg',
    }
  ]
  return (
    <section className='pb-20 pt-40 md:pt-0 bg-white'>
    <div className='flex flex-col mx-0 md:mx-20'>
      <div className='flex items-center gap-x-3'>
        <h1 className='uppercase text-[#5c8eb0] text-sm md:text-base font-medium'>To Invent</h1>
        <div className='border-red-400 border-b-[1px] w-40'></div>
      </div>
      <h1 className='uppercase text-xl md:text-3xl text-[#263d4d] font-bold'>Inventory</h1>
    </div>

    <div className='flex flex-wrap pt-6 justify-center items-center '>
      {data.map((item) => (
        <div key={item.id} className=''>
          <InventoryCard data={item} />
        </div>
      ))}
    </div>
  </section>
);
}