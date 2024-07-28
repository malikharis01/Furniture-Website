import React from "react";
import Image from "next/image";
import Mybutton from "@/components/Mybutton";
import girl from "@/assets/Mask Group.png";

const BeautifySection = () => {
  return (
    <main>
      <section className="bg-blue-50 h-screen gap-10 items-center px-[90px] relative hidden lg:flex">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="text-zinc-800 text-3xl font-bold">
            Beautify Your Space
          </div>
          <div className="text-stone-500 text-xl font-normal leading-10 w-[514px]">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
          <div>
            <Mybutton text="Learn More"></Mybutton>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[372px] h-[372px] bg-emerald-900 rounded-full absolute right-0 mr-[90px] z-10 " />
          <Image src={girl} alt="girl" width={400} className="z-10"></Image>
        </div>
      </section>

      <section className="bg-blue-50 flex flex-col-reverse gap-10 items-center p-10 lg:hidden">

        <div className="flex flex-col gap-5 ">
          <div className="text-zinc-800 text-2xl font-bold">
            Beautify Your Space
          </div>
          <div className="text-stone-500 text-lg font-normal leading-10">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
          <div>
            <Mybutton text="Learn More"></Mybutton>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-[300px] h-[300px] bg-emerald-900 rounded-full absolute right-0 mr-[50px] sm:mr-[250px] z-10 " />
          <Image src={girl} alt="girl" width={250} className="z-10"></Image>
        </div>

      </section>
    </main>
  );
};

export default BeautifySection;
