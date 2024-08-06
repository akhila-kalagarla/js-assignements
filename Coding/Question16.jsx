// 16. Write a React component that implements a carousel.

import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <div>{items[currentIndex]}</div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
