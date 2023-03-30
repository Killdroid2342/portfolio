import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='section'>
        <h2 className='headers mb-20'>Contact</h2>
        <div className='flex flex-row justify-evenly'>
          <div className='flex flex-col'>
            <div className='w-24 h-24 rounded-full flex items-center'>
              <a href='mailto:haroonkhan120704@gmail.com' target='_blank'>
                <img
                  src='/src/assets/img/Gmail.png'
                  alt='Gmail'
                  className='object-cover w-full h-full cursor-none'
                />
              </a>
            </div>
            <p className='text-white text-center text-2xl'>Email</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-24 h-24 rounded-full flex items-center'>
              <a href='https://github.com/Killdroid2342' target='_blank'>
                <img
                  src='/src/assets/img/Github.png'
                  alt='Gmail'
                  className='object-cover w-full h-full cursor-none'
                />
              </a>
            </div>
            <p className='text-white text-center text-2xl'>Github</p>
          </div>
          <div className='flex flex-col'>
            <div className='w-24 h-24 rounded-full flex items-center'>
              <a
                href='https://www.linkedin.com/in/haroon-khan-12203b270/'
                target='_blank'
              >
                <img
                  src='/src/assets/img/LinkedIn.png'
                  alt='Gmail'
                  className='object-cover w-full h-full cursor-none'
                />
              </a>
            </div>
            <p className='text-white text-center text-2xl'>Linked In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
