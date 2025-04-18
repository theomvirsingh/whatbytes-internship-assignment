"use client";

import Image from "next/image";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.dispatchEvent(
      new CustomEvent("toggle-sidebar", {
        detail: { isOpen: !isSidebarOpen },
      })
    );
  };

  return (
    <div className="bg-white w-full text-black h-20 border-b border-gray-200 flex justify-between items-center px-6 z-10">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row items-center gap-1 cursor-pointer">
          <Image
            src="/what_bytes_logo.webp"
            alt="Logo"
            width={50}
            height={10}
          />
          <p className="text-3xl font-bold hidden sm:block">WhatBytes</p>
        </div>
      </div>

      <div className="flex gap-1">
        <div className="border-gray-200 border-2 px-2 rounded-lg hover:border-gray-500 cursor-pointer">
          <div className="flex flex-row items-center gap-2">
            <Image src="/profile.webp" alt="Profile" width={40} height={40} />
            <p className="text-lg font-bold hidden sm:block">Omvir Singh</p>
          </div>
        </div>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleSidebar}
        >
          <HiMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
