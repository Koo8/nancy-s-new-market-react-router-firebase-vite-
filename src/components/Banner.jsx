import React, { useState } from 'react';
import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai';
import { iconHover, imgs } from '../assets/assetsIndex';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function prevSlide() {
    setCurrentSlide(currentSlide === 0 ? imgs.length - 1 : (pre) => pre - 1);
  }

  function nextSlide() {
    setCurrentSlide((pre) => {
      if (pre === imgs.length - 1) return 0;
      else return pre + 1;
    });
  }
  // console.log(currentSlide);

  return (
    <div className='w-full  h-screen relative overflow-hidden'>
      {/* images carousel */}

      {imgs.map((img) => {
        return (
          <div
            className={`w-full relative h-full ${
              currentSlide === imgs.indexOf(img) ? 'block' : 'hidden'
            }  `}
            key={img}
          >
            <img
              src={img}
              alt={`${imgs.indexOf(img)} image`}
              loading={imgs.indexOf(img) === currentSlide ? 'eager' : 'lazy'}
              className='w-full h-full object-cover'
            />
          </div>
        );
      })}

      {/* left and right buttons */}
      <div className='absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-8 text-skin-prime_yellow '>
        <AiOutlineLeftSquare
          size={36}
          onClick={prevSlide}
          className={iconHover}
        />
        <AiOutlineRightSquare
          size={36}
          onClick={nextSlide}
          className={iconHover}
        />
      </div>
    </div>
  );
};

export default Banner;

//
//-translate-x-[300vw]
