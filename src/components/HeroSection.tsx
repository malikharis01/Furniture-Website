import React from "react";
import Image from "next/image";
import Mybutton from "./Mybutton";
import hero from "@/assets/hero.jpg";

const HeroSection = () => {
  return (
    <main>
      <section className="relative hidden lg:flex">
        <Image src={hero} alt="hero" className=" max-h-screen bg-cover"></Image>

        <div className="w-[643px] h-[443px] bg-slate-200 rounded-lg absolute right-0 top-1/2 transform -translate-y-1/2 mx-[90px] flex flex-col justify-center gap-5 p-10">
          <div className="text-zinc-800 md:text-base font-semibold tracking-widest">
            New Arrival
          </div>
          <div className="text-sky-900 md:text-5xl font-bold leading-10">
            Discover Our New Collection
          </div>
          <div className="text-zinc-800 md:text-lg font-medium leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <Mybutton text="Buy now"></Mybutton>
        </div>
      </section>

      <section className="lg:hidden bg-white">
        <Image src={hero} alt="hero" className=" bg-cover"></Image>

        <div className="lg:w-[643px] lg:h-[443px] bg-slate-200 rounded-lg  flex flex-col justify-center gap-5 p-10">
          <div className="text-zinc-800 lg:text-base text-sm font-semibold tracking-widest">
            New Arrival
          </div>
          <div className="text-sky-900 lg:text-5xl text-3xl font-bold lg:leading-10">
            Discover Our New Collection
          </div>
          <div className="text-zinc-800 lg:text-lg text-base font-medium lg:leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <Mybutton text="Buy now"></Mybutton>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
