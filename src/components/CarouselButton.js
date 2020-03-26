import React from 'react';
import Arrow from '../images/arrow.svg';
import classNames from 'classnames';

function CarouselButton(props) {
  const { direction = 'next', handleClick } = props;

  const buttonClasses = classNames('carousel-button', {
    previous: direction === 'previous',
    next: direction === 'next'
  });

  return (
    <div className={buttonClasses} role="button">
      <img src={Arrow} alt="arrow" onClick={handleClick} />
    </div>
  );
}

export default CarouselButton;
