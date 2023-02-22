import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className='mt-10 mr-40'>
        <ul className='flex flex-row justify-end'>
          <li className='p-2 cursor-pointer text-purple-900 font-bold mr-10'>
            Github
          </li>
          <li className='hover:bg-purple-900 hover:text-white border-2 rounded-2xl border-purple-900 p-2 font-bold text-purple-900 cursor-pointer transition-all duration-500'>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
