import React from 'react';
import './MostPopular.css';
import SectionHeader from '../sctionheader/SectionHeader';
import MostPopularClips from '../../Data/MostPopularClips';
import { ButtonBrowse, ButtonContainer, ImgInfoCard} from '../index';
const MostPopular = () => {
    const clips=MostPopularClips.map(clip => {
        return <div key={clip.id}> <ImgInfoCard img={clip.img} views={clip.views} order={clip.order} /> </div>
    }
   
    )
    
    return (
        <div className='MostPopular'>
            
                <SectionHeader >
                Your Most Popular Clips
                </SectionHeader>
                <div className='Clips-container'>
                    <div className='center'>
                    {clips}
                    </div>
                   
                
                </div>
                <ButtonContainer>
                        <ButtonBrowse text= "Load More Clips"/>
                </ButtonContainer>
            
        </div>
    );
}

export default MostPopular;
