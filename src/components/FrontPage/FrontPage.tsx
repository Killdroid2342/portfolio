import React from 'react';
import Nav from './Nav/Nav';

export default function FrontPage() {
  return (
    <div className='overflow-hidden min-h-screen' id='container'>
      <div id='stars' />
      <div id='stars2' />
      <div id='stars3' />

      <Nav />
      <h1 className='font-bold text-6xl text-center mt-56' id='headOne'>
        Frontend Developer
      </h1>
      <p className='text-center mt-20 text-lg' id='headTwo'>
        I love to code and implement an idea into reality.
      </p>
      <div className='flex items-center justify-center mt-10'>
        <a href='#aboutHeader' className='cursor-none'>
          <button className='hover:bg-gray-400 hover:text-slate-900 border-2 rounded-lg border-gray-300 p-2 pl-4 pr-4 font-bold text-gray-300 transition-all duration-500 cursor-none mt-10'>
            See More
          </button>
        </a>
      </div>
    </div>
  );
}
