import React from 'react';

function CarouselItem(props) {
    const {item = {}} = props;
    const { previewURL, tags} = item;


    return (<div><img src={previewURL}/></div>)
}

export default CarouselItem;