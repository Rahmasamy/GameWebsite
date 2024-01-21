import React from 'react';
import './ParagraphComponent.css';
const ParagraphComponet = (props) => {
    return (
        <div className='paragraphClass'>
         <p > 
         {props.text}
         </p>   
        </div>
    );
}

export default ParagraphComponet;
