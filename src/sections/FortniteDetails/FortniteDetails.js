import React from 'react';
import feature_left from '../../assets/images/feature-left.jpg';
import feature_right from '../../assets/images/feature-right.jpg';
import { RxVideo } from "react-icons/rx";
import './FortniteDetails.css';
const FortniteDetails = () => {
    return (
        <>
            <div className='fornite-container'>
             <div className='img-video'>
               
                <div className='img-container-fort'>
                  <img src={feature_left} alt=""/>
                </div>
                <div className='vedio-container-fort'>
                  <img src={feature_right} alt="err"/>
                  <div className='icon'>
                  <a className='icon-link' href='https://www.youtube.com/watch?v=r1b03uKWk_M'> <RxVideo /></a> 
                  </div>
                   
                 </div>
             </div>
               
            <div className='fortnite-title'>
                    <h3> FORTNITE DETAILS</h3>
            </div>
            </div>
        </>
    );
}

export default FortniteDetails;
