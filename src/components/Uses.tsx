import React from 'react';

const cardData = [
  {
    title: 'Frontend Developer',
    content:
      'I have a preference for coding projects from the ground up, and take pleasure in transforming concepts into functional web experiences.',
  },
];
const Uses = () => {
  return (
    <>
      <div className='flex flex-col justify-evenly lg:flex-row'>
        {cardData.map((card, index) => (
          <div className='flex justify-center relative mb-20' key={index}>
            <div className='bg-white border rounded-lg w-96 shadow-xl p-8'>
              <h2 className='text-2xl p-10' id='cardHeader'>
                {card.title}
              </h2>
              <p className='text-center font-bold p-5'>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Uses;
