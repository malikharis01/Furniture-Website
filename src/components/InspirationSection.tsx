import React from 'react'
import Image from 'next/image'
import group from "@/assets/Group 113.png"

const InspirationSection = () => {
  return (
    <section className="lg:h-screen p-10 relative bg-neutral-50 flex flex-col gap-5 justify-center items-center" id='inspiration'>
    <div className="text-zinc-800 lg:text-3xl text-2xl font-bold">Inspiration Collection</div>
    <div className=" text-center text-stone-500 lg:text-xl text-lg font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <div>
      <Image src={group} alt="group"></Image>
    </div>

  </section>
  )
}

export default InspirationSection