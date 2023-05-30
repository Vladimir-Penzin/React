import React from 'react';
import image from './spa-image.png'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <span>SPA - Single Pape Application</span>
            <div className='home-img' >
                <img src={image} alt='SPA'/>
            </div>
        </div>
    );
};

export default Home;