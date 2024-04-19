"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full clearNav backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <Link
            href="/landing"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0 -ml-20"
          >
            GreenWim
          </Link>

          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-nowrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <Link
              className="mr-12 md:ml-18 ml-0 cursor-pointer text-gray-300 hover:text-white text-2xl font-semibold tr04"
              href="/addGenSensor"
            >
              Add Sensor
            </Link>

            <Link
              className="mr-12 md:ml-18 ml-0 cursor-pointer text-gray-300 hover:text-white text-2xl font-semibold tr04"
              href="/sale"
            >
              Sale
            </Link>
            <Link
              className="mr-12 md:ml-18 ml-0 cursor-pointer text-gray-300 hover:text-white text-2xl font-semibold tr04"
              href="/buy"
            >
              Buy
            </Link>
          </div>
          {/* <button className="border-2 border-white p-2 px-3 rounded-full">connect</button> */}
          <div className=" -mr-20">
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
}
