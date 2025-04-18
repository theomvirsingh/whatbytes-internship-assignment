import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <div className='bg-white w-screen text-black h-20 border-b-1 border-gray-200 flex justify-between items-center px-6'>
      <div className='flex flex-row items-center gap-1 cursor-pointer'>
        <Image
          src="/what_bytes_logo.webp"
          alt='Logo'
          width={50}
          height={10}
        />
        <p className='text-3xl font-bold hidden sm:block'>WhatBytes</p>
      </div>

      <div className='border-gray-200 border-2 px-2 rounded-lg hover:border-gray-500 cursor-pointer'>
        <div className='flex flex-row items-center gap-2'>
          <Image
            src="/profile.webp"
            alt='Profile'
            width={40}
            height={40}
            className=''
          />
          <p className='text-lg font-bold hidden sm:block'>Omvir Singh</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar