import React, { useEffect, useState } from 'react';
import {searchImages} from '../utils/api';

function Carousel (props) {
    const {numberOfItems = 6} = props;

    const [currentItem, setCurrentItem] = useState(0);
    const [items, setItems] = useState();

    useEffect(() => {
        // get images if not passed in
        if (items) return;

        searchImages({per_page:numberOfItems}).then((response) => {
            setItems(response.hits);
        });

    }, 
    // eslint-disable-next-line
    [])

    return (
        <div>This is the carousel</div>
    )

}

export default Carousel;