import React from 'react';

function CarouselItem(props) {
  const { item = {} } = props;
  const { previewURL, tags } = item;

  return (
    <div className="carousel-item">
      <img src={previewURL} alt={tags} />
      <p>{tags}</p>
    </div>
  );
}

export default CarouselItem;
