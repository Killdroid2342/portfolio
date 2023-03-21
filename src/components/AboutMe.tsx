import React from 'react';

const AboutMe = () => {
  return (
    <>
      <div id='aboutHeader' className='pb-72 h-2/5'>
        <h2 id='headers'>About Me</h2>
        <h2 className='text-white text-center text-3xl font-bold pt-36'>
          Hey there, Im Haroon Khan. Pleased to meet you.
        </h2>
        <div className='flex items-center justify-center flex-col'>
          <p className='text-center text-white w-2/4 mt-10'>
            Currently, I love spending most of my free time creating exciting
            projects that people can enjoy. As a front-end developer, my goal is
            to make users happy and meet their needs. I strive to create
            user-friendly designs and interfaces that are both visually
            appealing and easy to navigate. Ultimately, my aim is to deliver
            high-quality work that people will appreciate and find useful.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
