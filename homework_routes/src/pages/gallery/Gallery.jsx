import React from 'react';
import imageList from './images';
import './gallery.css'

const Gallery = () => {
    return (
        <div>
            <div className='grid'>
            {
              imageList.map((index) => (
                <div >
                    <img src={index} alt='pict'/>
                </div>
                ))
            }
            </div>
        </div>
    );
};

export default Gallery;