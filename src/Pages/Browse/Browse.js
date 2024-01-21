import React from 'react';
import { BrowseGames,TopStream} from '../../sections';
import  HowToStart from '../../sections/HowTOStart/HowToStart';
const Browse = () => {
    return (
        <div>
           <BrowseGames/>
           <HowToStart/>
           <TopStream/>
        </div>
    );
}

export default Browse;
