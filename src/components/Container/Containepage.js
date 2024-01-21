import React from 'react';
import './Container.css';



const ContainerPage = (props) => {
    return (
        <div className='container main-container'> 
        {props.children}
        </div>
    );
}

export default ContainerPage;
