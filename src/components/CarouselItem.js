import React from 'react';
import classNames from 'classnames';

function CarouselItem(props) {
  const { item = {}, index = 0, currentItem } = props;
  const { previewURL, tags } = item;

  const itemClasses = classNames('carousel-item', {
    'current': index === currentItem,
    'not-current': index !== currentItem
  })

  return (
    <li className={itemClasses}>
      <img src={previewURL} alt={tags} />
      <p>{index}-{tags}</p>
    </li>
  );
}

export default CarouselItem;
