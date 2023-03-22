import React from 'react';
import Uses from './Uses';
const AboutMe = () => {
  return (
    <>
      <div id='aboutHeader' className='pb-72 h-2/5'>
        <div className='section'>
          <h2 className='headers'>About Me</h2>
          <div className='row'>
            <div>
              <h2 className='text-white text-3xl font-bold'>
                Hey there, Im Haroon Khan
              </h2>
              <p className='text-white w-2/4 mt-5 text-sm'>
                Currently, I love spending most of my free time creating
                exciting projects that people can enjoy. As a front-end
                developer, my goal is to make users happy and meet their needs.
                I strive to create user-friendly designs and interfaces that are
                both visually appealing and easy to navigate. Ultimately, my aim
                is to deliver high-quality work that people will appreciate and
                find useful.
              </p>
            </div>
            <div className='flex flex-col border border-red-800'>
              <Uses />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
