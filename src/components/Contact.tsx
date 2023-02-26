import React from 'react';

const Contact = () => {
  return (
    <div className='bg-white border rounded-lg w-96 shadow-xl'>
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
        When creating many of my projects, the main software I use is Visual
        Studio Code. This is because it allows me to write my code efficiently
        and provides a wide range of extensions that I can use to my advantage.
      </p>
    </div>
  );
};

export default Contact;
