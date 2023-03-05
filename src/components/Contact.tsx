import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='flex justify-center'>
      <div className='bg-white border rounded-lg w-96 shadow-xl'>
        <h2 className='text-2xl font-bold text-purple-900 text-center p-10'>
          Contact
        </h2>
        <div className='flex justify-center'>
          <img
            src='src/assets/img/logo-gmail-9987.png'
            alt='Visual Studio Code'
            width={50}
          />
        </div>
        <p className='text-center font-bold p-10'>
          One of the best ways to contact me is through email. I regularly check
          my email and will be sure to respond if you send me a message.
        </p>
        <p className=' text-purple-900 font-bold text-center'>Email:</p>
        <p className='text-center font-bold p-10'>HaroonKhan120704@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
