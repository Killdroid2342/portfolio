import React from 'react';
import Carousel from './Carousel/Carousel';

const cardData = [
  {
    title: 'Frontend Developer',
    content:
      'I have a preference for coding projects from the ground up, and take pleasure in transforming concepts into functional web experiences.',
  },
  {
    title: 'What I Use',
    content:
      'Currently as a Frontend Developer, I use HTML, CSS, JavaScript, TypeScript, React, Git, Tailwindcss, ThreejsFiber and Sass ',
  },
];

export default function Uses() {
  return (
    <div className='flex 2xl:mt-20'>
      <Carousel cards={cardData} />
    </div>
  );
}
