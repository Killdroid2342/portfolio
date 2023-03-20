import React from 'react';
import Nav from './Nav';

const FrontPage = () => {
  return (
    <div className='overflow-hidden min-h-screen'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Nav />
      <h1 className='font-bold text-6xl text-center mt-56' id='headOne'>
        Frontend Developer
      </h1>
      <p className='text-center mt-20 text-lg' id='headTwo'>
        I love to code and implement an idea into reality.
      </p>
      <div className='flex items-center justify-center mt-10'>
        <button className='hover:bg-slate-900 border-2 rounded-lg border-gray-300 p-2 pl-4 pr-4 font-bold text-gray-300 transition-all duration-500 cursor-none mt-10'>
          <a href='#aboutHeader' className='cursor-none'>
            See More
          </a>
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
