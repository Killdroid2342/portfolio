import React from 'react';

const Nav = ({ toContact }: any) => {
  return (
    <div className='mr-10'>
      <nav className='mt-10 mx-auto max-w-screen-lg'>
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
          <li
            onClick={toContact}
            className='hover:bg-purple-900 border-2 rounded-2xl border-white p-2 font-bold text-white transition-all duration-500'
          >
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
