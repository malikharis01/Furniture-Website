"use client";
import React, { useState } from "react";
import Link from "next/link";
import MobNav from "./MobNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="lg:h-32 bg-white flex justify-between items-center lg:px-[90px] p-10">
      <Link href={"/"}>
        <h1 className="text-sky-900 lg:text-4xl text-3xl font-bold hover:text-sky-800">
          Furniture
        </h1>
      </Link>

      <nav className="md:flex justify-center items-center gap-16 hidden">
        <Link href={"/"}>
          <div className="text-zinc-800 text-sm font-semibold">Home</div>
        </Link>
        <Link href={"#services"}>
          <div className="text-zinc-800 text-sm font-semibold">Services</div>
        </Link>
        <Link href={"#inspiration"}>
          <div className="text-zinc-800 text-sm font-semibold">Products</div>
        </Link>
        <Link href={"#range"}>
          <div className="text-zinc-800 text-sm font-semibold">Gallery</div>
        </Link>
      </nav>

      <div className="md:hidden">
        <svg
          className="text-black hover:cursor-pointer"
          onClick={setToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 14 14"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 2H.5m13 5H.5m13 5H.5"
          />
        </svg>
      </div>

      {isOpen && (
        <MobNav>
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-full flex justify-end">
              <svg
                className="text-black hover:cursor-pointer"
                onClick={setToggle}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M20 20L4 4m16 0L4 20"
                />
              </svg>
            </div>

            <nav className="flex flex-col justify-center items-end gap-10">
              <Link href={"/"}>
                <div className="text-zinc-800 text-sm font-semibold">Home</div>
              </Link>
              <Link href={"#services"}>
                <div className="text-zinc-800 text-sm font-semibold">
                  Services
                </div>
              </Link>
              <Link href={"#inspiration"}>
                <div className="text-zinc-800 text-sm font-semibold">
                  Products
                </div>
              </Link>
              <Link href={"#range"}>
                <div className="text-zinc-800 text-sm font-semibold">
                  Gallery
                </div>
              </Link>
            </nav>
          </div>
        </MobNav>
      )}
    </header>
  );
};

export default Header;
