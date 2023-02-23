import React from 'react';

const FrontPage = () => {
  return (
    <div>
      <h1 className='font-bold text-6xl text-center mt-56 text-purple-900'>
        Frontend Developer
      </h1>
      <p className='text-center mt-20 text-purple-900 font-bold text-lg'>
        I love to code and create new beautiful projects.
      </p>
      <div className='flex items-center justify-center mt-10'>
        <button className='hover:bg-purple-900 hover:text-white border-2 rounded-2xl border-purple-900 p-2 font-bold text-purple-900 cursor-pointer transition-all duration-500 mt-10'>
          See More
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
