import React from 'react';
import './personal.css';
import profile from '../../assets/images/profile.jpg'
import { Black, ButtonBrowse,ButtonContainer, ParagraphComponet, SectionHeader } from '../index';
import Smallcomponet from '../SmallComponent/Smallcomponet';
import paraNumbers from '../../Data/ParaNumber';
const data=paraNumbers.map(item => {
    return <div key={item.id}>
         <Smallcomponet parag={item.parag} number={item.number} />
    </div>
}

)
const Personal = () => {
    return (
        <div className='personInfoParent'>
            <div className='Infoimg-div'>
             <img src={profile} alt=''/>
            </div>
            <div className='About'>
            <ButtonContainer>
                      <ButtonBrowse text="Load More Streams"/>
             </ButtonContainer> 
            <SectionHeader>
            Alan Smithee
            </SectionHeader>
            <ParagraphComponet text="You Haven't Gone Live yet. Go Live By Touching The Button Below."/>
            <ButtonContainer>
                <Black text ="Start Live Stream"/>
            </ButtonContainer>

            </div>
            <div className='cardInfo'>
             {data}
            </div>
        </div>
    );
}

export default Personal;
