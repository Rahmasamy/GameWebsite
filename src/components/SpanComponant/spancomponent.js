import React from 'react';

const Spancomponent = (props) => {
    return (
        <>
           <span style={{"color" :"yellow"}} className='span-componet'> 
                {props.children}
            </span>
        </>
        
    );
}

export default Spancomponent;
