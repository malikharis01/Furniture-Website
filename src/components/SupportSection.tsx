import React from "react";
import Image from "next/image";
import hr24 from "@/assets/hr24.svg";
import truck from "@/assets/truck.svg";
import shield from "@/assets/shield.png";

const SupportSection = () => {
  return (
    <section className="lg:h-[150px] bg-blue-50 lg:px-[90px] px-10 py-10 flex justify-between gap-5 text-center" id="services">
      <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
        <div>
          <Image src={truck} alt="truck"></Image>
        </div>
        <div>
          <div className="text-zinc-800 lg:text-2xl text-xl font-semibold">
            Free Delivery
          </div>
          <div className="text-zinc-800 lg:text-base text-sm font-normal">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
        <div>
          <Image src={hr24} alt="hr24"></Image>
        </div>
        <div>
          <div className="text-zinc-800 lg:text-2xl text-xl font-semibold">
            Support 24/7
          </div>
          <div className="text-zinc-800 lg:text-base text-sm font-normal">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
        <div>
          <Image src={shield} alt="shield"></Image>
        </div>
        <div>
          <div className="text-zinc-800 lg:text-2xl text-xl font-semibold">
            100% Authentic
          </div>
          <div className="text-zinc-800 lg:text-base text-sm text font-normal">
            Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
