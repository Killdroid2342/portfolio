import React from 'react';
const PROJECTS = [
  {
    name: 'Calendar',
    image: {
      src: '/src/assets/img/Calendar.png',
      alt: 'Calendar',
    },
    href: 'https://calendar-three-liard.vercel.app/',
  },
  {
    name: 'Covid Tracker',
    image: {
      src: '/src/assets/img/Covid.png',
      alt: 'Covid Tracker',
    },
    href: 'https://covid-tracker-six-kappa.vercel.app/',
  },
  {
    name: 'Joke App',
    image: {
      src: '/src/assets/img/Joke.png',
      alt: 'Joke App',
    },
    href: 'https://joke-app-woad.vercel.app/',
  },
  {
    name: 'To Do List',
    image: {
      src: '/src/assets/img/To-Do-List.png',
      alt: 'To Do List',
    },
    href: 'https://to-do-app-lac.vercel.app/',
  },
  {
    name: 'Random Colour',
    image: {
      src: '/src/assets/img/RandomColor.png',
      alt: 'Random Colour',
    },
    href: 'https://random-colour-r4ctjrmzt-killdroid2342.vercel.app/',
  },
];
const MyWork = () => {
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white'>
        Some Of My Work
      </h2>
      <p className='text-center text-white mt-6 mb-20'>
        This is some of the work that I have created
      </p>
      <ul className='flex flex-wrap justify-center items-center pt-10 gap-32 w-[1380px] mx-auto max-w-full'>
        {PROJECTS.map((project, i) => {
          return (
            <li key={i}>
              <p className='text-center text-white font-bold text-xl'>
                {project.name}
              </p>
              <div className='border-2 border-white rounded-lg cursor-none relative shadow-xl h-72 w-72'>
                <img
                  src={project.image.src}
                  alt={project.image.alt}
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
                ></img>
                <div className='text-xl font-bold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-90 duration-200 hover:bg-purple-900 rounded-lg'>
                  <a
                    href={project.href}
                    target='_blank'
                    className='cursor-none'
                  >
                    Click Here To See Project
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default MyWork;
