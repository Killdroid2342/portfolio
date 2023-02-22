import React from 'react';
import AboutMe from './components/AboutMe';
import Uses from './components/Uses';
import Nav from './components/nav';

const App = () => {
  return (
    <>
      <Nav />
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
      <AboutMe />
      <Uses />

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
      <div className='border border-purple-900 bg-purple-900 pb-72 h-2/5 mt-96'>
        <h2 className='text-white text-center text-3xl font-bold mt-32'>
          What Do I Use?
        </h2>
        <div className='flex items-center justify-center flex-col'>
          <p className='text-center text-white w-2/4 mt-10'>
            When it comes to developing software projects, using the right tools
            can be crucial for ensuring productivity, efficiency, and success.
            As such, I have found that two of the most important tools for my
            workflow are Visual Studio Code and Vercel.
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-evenly'>
        <div className='flex justify-center relative -top-56'>
          <div className='bg-white border rounded-lg w-96 shadow-xl	'>
            <h2 className='text-2xl font-bold text-purple-900 text-center p-10'>
              Softwares
            </h2>
            <div className='flex justify-center'>
              <img
                src='src/assets/img/vscode.png'
                alt='Visual Studio Code'
                width={50}
              />
            </div>
            <p className='text-center font-bold p-10'>
              When creating many of my projects, the main software I use is
              Visual Studio Code. This is because it allows me to write my code
              efficiently and provides a wide range of extensions that I can use
              to my advantage.
            </p>
          </div>
        </div>
        <div className='flex justify-center relative -top-56'>
          <div className='bg-white border rounded-lg w-96 shadow-xl	'>
            <h2 className='text-2xl font-bold text-purple-900 text-center p-10'>
              Softwares
            </h2>
            <div className='flex justify-center'>
              <svg
                height='50px'
                viewBox='0 0 512 512'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fillRule='evenodd' d='M256,48,496,464H16Z' />
              </svg>
            </div>
            <p className='text-center font-bold p-10'>
              All of the projects that I have created use Vercel for deployment.
              Vercel is a deployment tool that I depend on for all of my
              projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
