import React from 'react';
import './PersonalInfo.css';
import Personal from '../../components/personal/personal';
import { MostPopular } from '../../components';
const PersonalInfo = () => {
    return (
        <>
         <Personal/> 
        <div className='hr'>
            <hr/>
        </div>
        <MostPopular/>
        </>
    );
}

export default PersonalInfo;
