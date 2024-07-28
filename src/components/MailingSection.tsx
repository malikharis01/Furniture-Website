import React from "react";
import Mybutton from "@/components/Mybutton";

const MailingSection = () => {
  return (
    <section className="lg:h-[383px] bg-blue-50 flex justify-center items-center flex-col gap-3 p-10">

      <div className="text-center text-zinc-800 lg:text-3xl text-2xl font-bold">
        Join Our Mailing List
      </div>
      <div className="lg:w-[514px] lg:h-[71px] text-center text-stone-500 lg:text-xl text-lg font-normal leading-10 lg:mb-10 mb-5">
        Sign up to receive inspiration, product updates, and special offers from
        our team.
      </div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="example@gmail.com"
          className="p-6 md:w-[486px] md:h-[70px] w-full bg-white rounded-sm border border-sky-900 text-black"
        />
        <Mybutton
          text="Submit"
          style="rounded-sm border border-sky-950 lg:h-[70px] h-[73px] flex justify-center items-center"
        ></Mybutton>
      </div>
    </section>
  );
};

export default MailingSection;
