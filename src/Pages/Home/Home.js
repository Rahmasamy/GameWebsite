import './Home.css'
import React from 'react';
import {Hero,Mostpopular,GamingLibrary } from '../../sections/index';
const Home = () => {
    return (
        <>
            <Hero />
            <Mostpopular/>
            <GamingLibrary/> 
        </>
    );
}

export default Home;
