import React from 'react';
import { FaStar,FaDownload } from "react-icons/fa";
import { SiBytedance } from "react-icons/si";
import { GrTransaction } from "react-icons/gr";
import { Spancomponent} from '../../components';
import './JustIcons.css';
const JustIcons = () => {
    return (
        <>
              <div className='details-icons'>
                    <div className='just-icons'>
                       <Spancomponent> <FaStar/></Spancomponent> 
                       <Spancomponent>   <FaDownload/></Spancomponent>
                       <Spancomponent> <SiBytedance /></Spancomponent> 
                       <Spancomponent > <GrTransaction /> </Spancomponent>
                    </div>
                    <div className='icons-information'>
                        <p> 4.8</p>
                        <p> 2.3M</p>
                        <p> 36GB</p>
                        <p style={{"marginRight" : "25px"}}> Action</p>
                    </div>
                   
                </div>
        </>
    );
}

export default JustIcons;
