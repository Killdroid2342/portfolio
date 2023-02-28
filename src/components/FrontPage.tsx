import React from 'react';

const FrontPage = () => {
  return (
    <div>
      <h1 className='font-bold text-6xl text-center mt-56 text-white'>
        Frontend Developer
      </h1>
      <p className='text-center mt-20 text-white font-bold text-lg'>
        I love to code and implement an idea into reality.
      </p>
      <div className='flex items-center justify-center mt-10'>
        <button className='hover:bg-purple-900 border-2 rounded-2xl border-white p-2 font-bold text-white transition-all duration-500 cursor-none mt-10'>
          See More
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
