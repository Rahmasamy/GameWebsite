import React from 'react';
import { SectionHeader,LiveStreams, ButtonBrowse,ButtonContainer } from '../../components';
import StreamData from '../../Data/LiveStreamsData';

import './TopStreams.css';
const TopStreams = () => {
    const StreamsLives=StreamData.map(stream => {
         return <div key={stream.id}> <LiveStreams  big_img={stream.big_img} topPlayer={stream.topPlayer } para={stream.para} avatar={stream.avatar} /></div> 
    }
    
    )
    console.log(StreamsLives);
    return (
        <div className='Top-streams-container'>
            <SectionHeader>
           <span style={{"color" : "var(--page"}}>Most Popular</span>  Live Stream
            </SectionHeader>
            <div className='stream-container'>
               {StreamsLives}
            </div>
            <ButtonContainer>
                <ButtonBrowse text="Discover All Streams"/>
            </ButtonContainer>
           
        </div>
    );
}

export default TopStreams;
