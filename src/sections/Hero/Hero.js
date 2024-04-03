import React from 'react';
import './Hero.css';
const Hero = () => {
    return (
    < div className='hero-container'>
        <div className='hero-main'>
            <div className='hero-text'>
                <h6>Welcome To Cyborg</h6>
                <h4 className='hero-title'>
                <em>BROWSE</em> OUR POPULAR GAMES HERE
                </h4>
                <div className='main-button'>
                    <a href='browse.html' className='a'>Browse Now</a>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default Hero;
