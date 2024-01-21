import React from 'react';
import './ButtonBrowse.css'
import { Link } from 'react-router-dom';
const ButtonBrose = (props) => {
    return (
        <>
           <button className='Button-Browse'>
                 
                 <Link to={"/profile"}> {props.text}  </Link>
            </button> 
        </>
    );
}

export default ButtonBrose;
