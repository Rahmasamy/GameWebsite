import React from 'react';
import { SectionHeader, SectionWrapper,Card,ButtonBrowse,ButtonContainer } from "../../components/index";
import '../BrowseGames/BrowseGames.css';
import MostPopularItems from '../../Data/MostPopularData';
import {Carsual} from '../../components/index';
import { TopDownloadLibrary} from '../../sections/index';
const Stream = () => {
    const Cards=MostPopularItems.map(card => {return <div key={card.id}>
        <Card  img={card.img} title={card.title} category={card.category} rate={card.rate} download={card.download}
        />
    </div>
      })
    return (
        <>
           <SectionHeader >
                <span style={{"color":"var(--page)","paddingBottom":"7px"}}>Feature</span> <span style={{"color":"var(--pinky)"}}> Games</span>
        </SectionHeader>
     
        <div className="main-features-games">
        <SectionWrapper>
          
            <Carsual/>
          
         </SectionWrapper>
         </div>
         <TopDownloadLibrary/>
         
        <SectionHeader>
             Most popular
        </SectionHeader>  
            
        <div className='most-popular-items'> 
        <div className='flex'>
        {Cards}  
        </div>
                 
        </div>
        <ButtonContainer>
                      <ButtonBrowse text="Load More Streams"/>
        </ButtonContainer>
        
       
        </>
    );
}

export default Stream;
