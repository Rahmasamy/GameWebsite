import React from 'react';
import './Img.css';
const Imge = (props) => {
    return (
        <>
           <div className='threeImgs' key={props.id}>
           <img src={props.Img} alt=''/>
           
            </div> 
          
        </>
    );
}

export default Imge;
