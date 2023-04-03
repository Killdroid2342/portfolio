import React from 'react';

export default function Nav() {
  return (
    <div>
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
          <a href='#projects' className='cursor-none'>
            <li className='p-2 text-gray-300 font-bold mr-10'>Projects</li>
          </a>
          <a href='#contact' className='cursor-none'>
            <li className='p-2 text-gray-300 font-bold mr-10 btn'>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
