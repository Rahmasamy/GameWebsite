import React from 'react';
import './Smallcomponet.css';
const Smallcomponet = (props) => {
    return (
        <div className='Small-Componet'>
        <div className='paragraph-info'>
        <p style={{"color":"darkgray"}} > {props.parag}</p>
        </div>
        <div className='number-info'>
        <p style={{"color":"var(--light-pinky"}} > {props.number}</p>
        </div>
       
       <span style={{"color":"darkgray"}} > <hr /></span> 
        </div> 
    );
}

export default Smallcomponet;
