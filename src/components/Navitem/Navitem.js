import React from 'react';

const Navitem = (props) => {
    return (
        <>
            <li className='nav-item'>
                {props.children}
            </li>
        </>
    );
}

export default Navitem;
