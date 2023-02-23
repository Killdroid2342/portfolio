import React from 'react';

const Footer = () => {
  return (
    <div className='border border-purple-900 bg-purple-900 mt-96 flex flex-col items-center justify-center h-96'>
      <h2 className='text-center text-white font-bold'>
        Every day presents an opportunity for growth through living, learning,
        and progressing.
      </h2>
      <div className='flex flex-col items-center'>
        <div className='w-10 mt-10'>
          <img src='/src/assets/img/github-mark-white.png' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
