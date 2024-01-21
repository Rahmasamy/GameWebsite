import React from 'react';

const NavDropDown = (props) => {
    return (
        <>
         <li className="nav-item dropdown">
               {props.children}
         </li>
            
        </>
    );
}

export default NavDropDown;
