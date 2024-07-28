import React from "react";
import Image from "next/image";
import dining from "@/assets/dining.png";
import living from "@/assets/living.png";
import bedroom from "@/assets/bedroom.png";
import Link from "next/link";

const RangeSection = () => {
  return (
    <section className="bg-neutral-300 lg:h-screen flex flex-col justify-center items-center gap-5 p-10" id="range">

      <div className="text-zinc-800 lg:text-3xl text-2xl font-bold">Browse The Range</div>

      <div className="lg:h-7 text-center text-stone-500 lg:text-xl text-lg font-normal lg:w-[560px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <div className="flex justify-between items-center text-center gap-5 flex-col lg:flex-row">
        <Link href={"/"}>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image src={dining} alt="dining"></Image>
            <div className="text-center text-zinc-800 lg:text-2xl text-xl font-semibold">
              Dining
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image src={living} alt="living"></Image>
            <div className="text-center text-zinc-800 lg:text-2xl text-xl font-semibold">
              Living
            </div>
          </div>
        </Link>

        <Link href={"/"}>
          <div className="flex justify-center items-center flex-col gap-5">
            <Image src={bedroom} alt="bedroom"></Image>
            <div className="text-center text-zinc-800 lg:text-2xl text-xl font-semibold">
              Bedroom
            </div>
          </div>
        </Link>

      </div>

    </section>
  );
};

export default RangeSection;
