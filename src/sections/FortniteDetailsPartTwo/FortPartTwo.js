import React from 'react';
import './FortPartTwo.css';
import { ButtonBrowse, ButtonContainer, FortniteDet,JustIcons, ParagraphComponet, ThreeImageCard } from '../../components';

const FortPartTwo = () => {
    return (
        <div className='fort-two'>
            <div className='header-details'>
                <FortniteDet/>
                <JustIcons/>  
            </div>
            <div className='img-paragraoh-button'>
                <ThreeImageCard/>
                <ParagraphComponet text ="
                Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout.
                 You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting.
                  If you want to get the PSD source files, please contact us.
                 Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor
                "/>
                <ButtonContainer>
                      <ButtonBrowse text="Download Fortnite Now"/>
                 </ButtonContainer>
            </div>
            
        </div>
    );
}

export default FortPartTwo;
