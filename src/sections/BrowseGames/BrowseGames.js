import React from "react";

import { SectionHeader, SectionWrapper } from "../../components/index";
import './BrowseGames.css';
import {Carsual} from '../../components/index';
import { TopDownloadLibrary} from '../../sections/index';

const LeftBrowse = () => {
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
     
      
       
        
     
    </>
  );
};

export default LeftBrowse;
