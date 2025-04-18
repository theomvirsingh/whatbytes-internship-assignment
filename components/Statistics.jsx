import React from 'react';
import { PiMedalBold } from 'react-icons/pi';
import { IoDocumentOutline, IoCheckboxOutline } from 'react-icons/io5';

const Statistics = () => {
  return (
    <div className='border border-gray-200 rounded-lg p-4 mt-4 w-[650px]'>
      {/* Title */}
      <h2 className='font-bold text-lg mb-4 text-gray-900'>Quick Statistics</h2>

      {/* Stats Container */}
      <div className='flex justify-between items-center'>
        {/* Rank */}
        <div className='flex flex-row gap-3 items-center w-[28%] border-r border-gray-200 mb-2.5'>
          <div className='bg-gray-100 text-xl rounded-full p-3 mb-1'>
            🏆
          </div>
          <div className='flex flex-col gap-1'>
          <div className='font-semibold text-xl text-gray-900'>4</div>
          <div className='text-gray-400 text-sm'>YOUR RANK</div>
          </div>
        </div>

        {/* Percentile */}
        <div className='flex flex-row gap-3 items-center w-1/3 border-r border-gray-200 mb-2.5'>
          <div className='bg-gray-100 text-xl rounded-full p-3 mb-1'>
            🗓️
          </div>
          <div className='flex flex-col gap-1'>
          <div className='font-semibold text-xl text-gray-900'>90%</div>
          <div className='text-gray-400 text-sm'>PERCENTILE</div>
          </div>
        </div>

        {/* Correct Answers */}
        <div className='flex flex-row gap-3 items-center w-1/3 mb-2.5'>
          <div className='bg-gray-100 text-xl rounded-full p-3 mb-1'>
            ✅
          </div>
          <div className='flex flex-col gap-1'>
          <div className='font-semibold text-xl text-gray-900'>12 / 15</div>
          <div className='text-gray-400 text-sm'>CORRECT ANSWERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
