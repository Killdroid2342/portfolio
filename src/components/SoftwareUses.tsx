import React from 'react';

const SoftwareUses = () => {
  return (
    <div>
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
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div className='flex justify-center relative -top-56'>
          <div className='bg-white border rounded-lg w-96 shadow-xl	mb-40 max-h-96'>
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
          <div className='bg-white border rounded-lg w-96 shadow-xl max-h-96'>
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
    </div>
  );
};

export default SoftwareUses;
