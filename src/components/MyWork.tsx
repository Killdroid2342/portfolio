import React from 'react';

const MyWork = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-purple-900'>
        Some Of My Work
      </h2>
      <p className='text-center text-purple-900 mt-6 mb-10'>
        This is some of the work that I have created
      </p>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row'>
          <div className='border-2 border-purple-900 rounded-lg p-32 m-5 cursor-pointer relative shadow-xl'>
            <img
              src='/src/assets/img/Calendar.png'
              alt='Calendar'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
            ></img>
            <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
              Calendar
            </div>
          </div>
          <div className='border-2 border-purple-900 rounded-lg p-32 m-5 cursor-pointer relative shadow-xl'>
            <img
              src='/src/assets/img/Covid Tracker.png'
              alt='Covid Tracker'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
            ></img>
            <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
              Covid Tracker
            </div>
          </div>
          <div className='border-2 border-purple-900 rounded-lg p-32 m-5 cursor-pointer relative shadow-xl'>
            <img
              src='/src/assets/img/Joke.png'
              alt='Joke App'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
            ></img>
            <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
              Joke App
            </div>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='border-2 border-purple-900 rounded-lg p-32 m-5 cursor-pointer relative shadow-xl'>
            <img
              src='/src/assets/img/To Do App.png'
              alt='To Do List'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
            ></img>
            <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
              To Do List
            </div>
          </div>
          <div className='border-2 border-purple-900 rounded-lg p-32 m-5 cursor-pointer relative shadow-xl'>
            <img
              src='/src/assets/img/Random Colour.png'
              alt='Random Colour'
              className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
            ></img>
            <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
              Random Colour
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWork;
