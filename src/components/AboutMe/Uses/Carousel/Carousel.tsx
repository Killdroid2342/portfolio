import { Key, useState } from 'react';

const Carousel = ({ cards }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };

  return (
    <div className='flex justify-center relative mb-20 h-96'>
      <div className='bg-white border rounded-lg w-96 shadow-xl p-8'>
        <div className='h-72'>
          <h2 className='text-2xl p-10' id='cardHeader'>
            {cards[currentIndex].title}
          </h2>
          <div className='flex flex-row'>
            <button
              onClick={handlePrevClick}
              className='font-bold text-2xl cursor-none'
            >
              {'<'}
            </button>
            <p className='text-center font-bold p-5'>
              {cards[currentIndex].content}
            </p>
            <button
              onClick={handleNextClick}
              className='font-bold text-2xl cursor-none'
            >
              {'>'}
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <div className='flex'>
            {cards.map((card: any, index: any) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
