import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className='mt-10 mr-40'>
        <ul className='flex flex-row justify-end'>
          <li className='p-2 text-white font-bold mr-10'>
            <a
              href='https://github.com/Killdroid2342'
              target='_blank'
              className='cursor-none'
            >
              Github
            </a>
          </li>
          <li className='hover:bg-purple-900 border-2 rounded-2xl border-white p-2 font-bold text-white transition-all duration-500'>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
