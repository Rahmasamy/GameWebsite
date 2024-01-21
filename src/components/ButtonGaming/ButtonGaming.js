import React from 'react';
import './ButtonGaming.css';
const ButtonGaming = (props) => {
    return (
        <div>
            <div className='main-button'>
               {props.children}
            </div>
        </div>
    );
}

export default ButtonGaming;
