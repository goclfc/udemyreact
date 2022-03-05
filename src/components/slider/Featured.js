import React from 'react';
import Slider from './Slider';

const Featured = () => {
    return(
        <div className="featured_container">
            <Slider />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        </div>
    )
}

export default Featured;