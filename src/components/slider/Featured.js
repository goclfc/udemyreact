import React from 'react';
import Slider from './Slider';
import TimeUntill from './TimeUntill';

const Featured = () => {
    return(
        <div className="featured_container">
            <Slider />
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
        <TimeUntill />
        </div>
    )
}

export default Featured;