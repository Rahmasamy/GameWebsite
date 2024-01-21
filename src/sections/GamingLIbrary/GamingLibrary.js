import React from 'react';
import './GamingLibrary.css';
import { SectionHeader,SectionWrapper,GammingCard} from '../../components/index';
import GamesLibrary from '../../Data/GamingLibraryData';

const GamingLibrary = () => {
    const Games=GamesLibrary.map(game => {
        return <div key={game.id}>  <GammingCard key ={game.id} img={game.img} title={game.title} category={game.category} dataAdd={game.dataAdd} hoursPlayed={game.hoursPlayed} currenty={game.currenty}/></div>
      })
    return (
       
        <>
           <SectionWrapper>
            <SectionHeader>
             Gaming Library
            </SectionHeader>  
            
            <div className='gaming-library-items'> 
                 {Games}
            </div>
        </SectionWrapper>  
        </>
    );
}

export default GamingLibrary;
