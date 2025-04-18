import React from 'react';

const HTMLTest = () => {
  return (
    <div className='border border-gray-200 rounded-lg p-4 mt-5 w-[650px] h-[100px] flex items-center justify-between'>
      {/* Left: HTML Logo and Details */}
      <div className='flex items-center space-x-4'>
        {/* HTML Logo */}
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
          alt='HTML5 Logo'
          className='w-12 h-12'
        />

        {/* Text Content */}
        <div>
          <h2 className='font-bold text-lg text-gray-900'>Hyper Text Markup Language</h2>
          <p className='text-gray-600 text-[15px] mt-1'>
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {/* Update Button */}
      <button  className='bg-[#0a1e83] hover:bg-[#071660] text-white font-semibold px-5 py-2 rounded-lg shadow-md'>
        Update
      </button>
    </div>
  );
};

export default HTMLTest;
