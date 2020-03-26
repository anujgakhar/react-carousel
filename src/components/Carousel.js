import React, { useEffect, useState } from 'react';
import { searchImages } from '../utils/api';
import CarouselItem from './CarouselItem';

function Carousel(props) {
  const { numberOfItems = 6 , title = 'Carousel test'} = props;

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

  const noItems = () => {
    return <div>Fetching items....</div>;
  };

  if (!items) return noItems();

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel">
        {items.map(item => (
          <CarouselItem item={item} />
        ))}
      </div>
      <div className="action-bar"></div>
    </div>
  );
}

export default Carousel;
