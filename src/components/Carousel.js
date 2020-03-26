import React, { useEffect, useState } from 'react';
import { searchImages } from '../utils/api';
import CarouselItem from './CarouselItem';
import CarouselButton from './CarouselButton';

function Carousel(props) {
  const { numberOfItems = 6, title = 'Carousel test' } = props;

  const [currentItem, setCurrentItem] = useState(0);
  const [items, setItems] = useState();

  useEffect(
    () => {
      searchImages({ per_page: numberOfItems }).then(response => {
        setItems(response.data.hits);
      });
    },
    // eslint-disable-next-line
    []
  );

  const handleNext = () => {
    let nextItem = Math.min(currentItem + 1, numberOfItems);
    if (nextItem === numberOfItems) {
      nextItem = 0;
    }

    setCurrentItem(nextItem);
  };

  const handlePrevious = () => {
    let previousItem = Math.max(currentItem - 1, 0);
    if (previousItem === 0) {
      previousItem = numberOfItems - 1;
    }

    setCurrentItem(previousItem);
  };

  const noItems = () => {
    return <div>Fetching items....</div>;
  };

  if (!items) return noItems();

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">{title}</h2>

      <ul className="carousel">
        <CarouselButton direction="previous" handleClick={handlePrevious} />
        {items.map((item, index) => {
          return <CarouselItem item={item} index={index} currentItem={currentItem} />;
        })}
        <CarouselButton direction="next" handleClick={handleNext} />
      </ul>
    </div>
  );
}

export default Carousel;
