import React from 'react';

const Home = () => {
  return (
    <>
      <nav className='mt-10 mr-20'>
        <ul className='flex flex-row justify-end'>
          <li className='p-2 cursor-pointer text-purple-900 font-bold mr-20'>
            Github
          </li>
          <li className='hover:bg-purple-900 hover:text-white border-2 rounded-2xl border-purple-900 p-2 font-bold text-purple-900 cursor-pointer transition-all duration-500'>
            Contact
          </li>
        </ul>
      </nav>
      <h1 className='font-bold text-6xl text-center mt-56 text-purple-900'>
        Frontend Developer & Designer
      </h1>
      <p className='text-center mt-20 text-purple-900 font-bold text-lg'>
        I love to code and create new beautiful projects.
      </p>
      <div className='flex items-center justify-center mt-10'>
        <button className='hover:bg-purple-900 hover:text-white border-2 rounded-2xl border-purple-900 p-2 font-bold text-purple-900 cursor-pointer transition-all duration-500 mt-10'>
          See More
        </button>
      </div>
      <div className='border border-purple-900 bg-purple-900 h-96 mt-96'>
        <h2 className='text-white text-center text-3xl font-bold  mt-32'>
          Hey there, Im Haroon Khan. Pleased to meet you.
        </h2>
        <div className='flex items-center justify-center'>
          <p className='text-center text-white w-2/4 mt-10'>
            Since a young age, I have been passionate about technology and its
            potential to solve problems and make people's lives easier. By the
            age of 16, my interest in software development had grown, and I
            began experimenting with different programming languages and tools.
            As I gained experience, I became dedicated to honing my craft and
            creating software that makes a positive impact on people's lives.
            Now, my goal is to design and develop user-friendly and effective
            software that exceeds people's expectations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
