import React from 'react';
import './FortniteDet.css';
import { FaStar,FaDownload } from "react-icons/fa";
import { Spancomponent } from '../../components';
const FortniteDet = () => {
    return (
        <>
          <div className='fortnite-det'>
                       <div className='title'>
                         <h6> Fortnite </h6>
                         <p style={{"color" :"darkgray"}}> Sandox</p>
                       </div>
                       <div className='title-icon'>
                         <div className='icons'>  <Spancomponent> <FaStar/></Spancomponent> <h6>4.8 </h6></div>
                         <div className='icons'>  <Spancomponent style={{"color" :"var(--light-pinky)"}}> <FaDownload/></Spancomponent> <h6>2.3M</h6></div>
                       </div>
                </div>   
        </>
    );
}

export default FortniteDet;
