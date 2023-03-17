import React from 'react';

const MyWork = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white'>
        Some Of My Work
      </h2>
      <p className='text-center text-white mt-6 mb-20'>
        This is some of the work that I have created
      </p>
      <div className='flex flex-col justify-center items-center pt-10 border border-red-900'>
        <div className='flex flex-col 2xl:flex-row'>
          <div>
            <p className='text-center text-white font-bold text-xl'>Calendar</p>
            <div className='border-2 border-white rounded-lg p-40 m-20 cursor-none relative shadow-xl'>
              <img
                src='/src/assets/img/Calendar.png'
                alt='Calendar'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
              ></img>
              <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
                <a
                  href='https://calendar-three-liard.vercel.app/'
                  target='_blank'
                  className='cursor-none'
                >
                  Click Here To See Project
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className='text-center text-white font-bold text-xl'>
              Covid Tracker
            </p>
            <div className='border-2 border-white rounded-lg p-40 m-20 cursor-none relative shadow-xl'>
              <img
                src='/src/assets/img/Covid.png'
                alt='Covid Tracker'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
              ></img>
              <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
                <a
                  href='https://covid-tracker-six-kappa.vercel.app/'
                  target='_blank'
                  className='cursor-none'
                >
                  Click Here To See Project
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className='text-center text-white font-bold text-xl'>Joke App</p>
            <div className='border-2 border-white rounded-lg p-40 m-20 cursor-none relative shadow-xl'>
              <img
                src='/src/assets/img/Joke.png'
                alt='Joke App'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
              ></img>
              <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
                <a
                  href='https://joke-app-woad.vercel.app/'
                  target='_blank'
                  className='cursor-none'
                >
                  Click Here To See Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col 2xl:flex-row'>
          <div>
            <p className='text-center text-white font-bold text-xl'>
              To Do List
            </p>
            <div className='border-2 border-white rounded-lg p-40 m-20 cursor-none relative shadow-xl'>
              <img
                src='/src/assets/img/To-Do-List.png'
                alt='To Do List'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
              ></img>
              <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
                <a
                  href='https://to-do-app-lac.vercel.app/'
                  target='_blank'
                  className='cursor-none'
                >
                  Click Here To See Project
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className='text-center text-white font-bold text-xl'>
              Random Colour
            </p>
            <div className='border-2 border-white rounded-lg p-40 m-20 cursor-none relative shadow-xl'>
              <img
                src='/src/assets/img/RandomColor.png'
                alt='Random Colour'
                className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
              ></img>
              <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
                <a
                  href='https://random-colour-r4ctjrmzt-killdroid2342.vercel.app/'
                  target='_blank'
                  className='cursor-none'
                >
                  Click Here To See Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyWork;
