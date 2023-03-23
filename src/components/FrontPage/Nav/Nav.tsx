import React from 'react';

const Nav = () => {
  return (
    <div className='mr-10'>
      <nav className='mt-10 mx-auto max-w-screen-lg'>
        <ul className='flex flex-row justify-end'>
          <li className='p-2 text-gray-300 font-bold mr-10'>
            <a
              href='https://github.com/Killdroid2342'
              target='_blank'
              className='cursor-none'
            >
              Github
            </a>
          </li>
          <a href='#contact' className='cursor-none'>
            <li className='hover:bg-gray-400 hover:text-slate-900 border-2 rounded-lg border-gray-300 p-2 pl-4 pr-4 font-bold text-gray-300 transition-all duration-500'>
              Contact
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
