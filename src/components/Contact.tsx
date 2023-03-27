import React from 'react';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='section'>
        <h2 className='headers'>Contact</h2>
        <div className='flex flex-row justify-center'>
          <div>
            <div className='border border-white rounded-2xl'>Pic</div>
            <p>Email</p>
          </div>
          <div>
            <div className='border border-white rounded-2xl'>Pic</div>
            <p>Linked In</p>
          </div>
          <div>
            <div className='border border-white rounded-2xl'>Pic</div>
            <p>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
