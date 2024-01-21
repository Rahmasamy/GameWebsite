import React from 'react';
import './Black.css';
import { Link } from 'react-router-dom';
const Black = (props) => {
    return (
        <>
          
          <button className='Button-Black'>
                 
                 <Link to={"/"}> {props.text}  </Link>
          </button>   
        </>
    );
}

export default Black;
