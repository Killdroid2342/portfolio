import React from 'react';
import Nav from './Nav/Nav';
import MainButton from './MainButton/MainButton';

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
      <div className='flex items-center justify-center mt-14'>
        <a href='#aboutHeader' className='cursor-none'>
          <MainButton />
        </a>
      </div>
    </div>
  );
}
