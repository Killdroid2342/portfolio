import React from 'react';

const Uses = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex justify-center relative -top-56'>
          <div className='bg-white border rounded-lg w-96 shadow-xl	'>
            <h2 className='text-2xl font-bold text-purple-900 text-center p-10'>
              Frontend Developer
            </h2>
            <p className='text-center font-bold p-5'>
              I have a preference for coding projects from the ground up, and
              take pleasure in transforming concepts into functional web
              experiences.
            </p>
          </div>
        </div>
        <div className='flex justify-center relative -top-56'>
          <div className='bg-white border rounded-lg w-96 shadow-xl	'>
            <p className='p-10 text-purple-900 font-bold text-center'>
              Languges and frameworks/libraries I use:
            </p>
            <p className='text-center p-2 font-bold'>
              HTML, CSS, JavaScript, TypeScript, React, Git, Tailwind, Sass
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center relative -top-56'>
        <div className='bg-white border rounded-lg w-96 shadow-xl	'>
          <p className='text-center p-10 text-purple-900 font-bold'>
            Dev Tools:
          </p>
          <p className='text-center p-2 font-bold'>Visual Studio Code</p>
          <p className='text-center p-2 font-bold'>Terminal</p>
          <p className='text-center p-2 font-bold'>Github</p>
          <p className='text-center p-2 pb-10 font-bold'>Vercel</p>
        </div>
      </div>
    </>
  );
};

export default Uses;
