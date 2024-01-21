import React from 'react';
import './LiveStreams.css';
import { GrValidate } from "react-icons/gr";
const LiveStreams = (props) => {
    return (
        <>
           <div className='avatar-img-content'>
                    <div className='bigimg-container'>
                    <img src={props.big_img} alt=""/>
                    </div>
                    <div className='avatar-top-player'>
                      <div className='avatarimg-container'>
                        <img src={props.avatar} alt=""/>
                      </div>
                      <div className='text-icon-cont'>
                     <div className='text-icon'>
                       <span style={{"margin":" 0 3px"}}> <GrValidate /></span> 
                        <p>{props.topPlayer}</p>
                      </div>
                      <div className='fans'>
                      <h4> {props.para}</h4>
                      </div>
                     
                     
                    </div>
                   

                </div>
            </div>  
        </>
    );
}

export default LiveStreams;
