import React from 'react'
import Image from 'next/image'
import ig1 from "@/assets/IG-1.jpg"
import ig2 from "@/assets/IG-2.jpg"
import ig3 from "@/assets/IG-3.jpg"
import ig4 from "@/assets/IG-4.jpg"
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='lg:h-[386px] bg-sky-950 lg:px-[90px] p-10 flex justify-start items-center gap-5'>
    <div className='flex justify-center items-start flex-col gap-8'>
      <div className="text-white lg:text-2xl text-xl font-bold">Furniture Shop</div>
      <div className="lg:w-[400px] lg:h-[97px] text-white lg:text-base text-sm font-normal leading-9">Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
      <Link href={"/"}>
        <div className="text-white lg:text-2xl text-xl font-bold">Follow Us</div>
      </Link>
    </div>
    <div className='lg:flex justify-center items-start flex-col gap-5 hidden'>
      <div className="text-white text-2xl font-bold">Instagram Shop</div>
      <div className='flex justify-center items-center gap-5'>
        <Image src={ig1} alt='ig1'></Image>
        <Image src={ig2} alt='ig2'></Image>
        <Image src={ig3} alt='ig3'></Image>
        <Image src={ig4} alt='ig4'></Image>
      </div>
    </div>
  </section>
  )
}

export default Footer