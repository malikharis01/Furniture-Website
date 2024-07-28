import React from "react";
import { twMerge } from 'tailwind-merge'

const Mybutton = ({text, style, textstyle}: {text: string, style?: string, textstyle?:string}) => {
  return (
    <main>

      <button className={twMerge(`lg:px-20 px-10 lg:py-6 py-3  bg-sky-900 rounded-3xl border-2 justify-start items-start inline-flex hover:bg-sky-800 transition-all`, `${style}`)}>
        <div className={twMerge(`text-white lg:text-base text-sm font-bold uppercase`, `${textstyle}`)}>
          {text}
        </div>
      </button>

    </main>
  );
};

export default Mybutton;
