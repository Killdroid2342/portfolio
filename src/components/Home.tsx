import React from 'react';

const Home = () => {
  return (
    <>
      <nav className='border-2 border-green-900 flex flex-row'>
        <p>sd</p>
        <ul className='flex flex-row'>
          <li className='border border-red-900'>IMG1</li>
          <li className='border border-red-900'>IMG2</li>
          <li className='border border-red-900'>IMG3</li>
        </ul>
      </nav>
      <div className='flex flex-row '>
        <div className='flex flex-col border-2 border-white w-96'>
          <h1>Welcome</h1>
          <p>
            My name is Haroon Khan, and I am a front-end web developer from
            Slough. I have created many front-end projects and am looking to
            further my knowledge in this field.
          </p>
          <p>
            I am passionate about learning new things and helping other
            developers create new projects.
          </p>
        </div>
        <div className='border-2 border-blue-900'>
          <h2>Project</h2>
          <ul>
            <li>Calendar</li>
            <li>Covid Tracker</li>
            <li>Joke App</li>
            <li>To Do List</li>
            <li>Random Colour</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
