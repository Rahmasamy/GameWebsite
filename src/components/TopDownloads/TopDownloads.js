import React from 'react';
import { FaStar,FaDownload } from "react-icons/fa";
import './TopDownloads.css';

const TopDownloads = (props) => {
    return (
        <>
            <div className='top-download-item'>
                    <div className='top-download-card-wrapper'style={{"display":"flex"}}>
                        <div className='img-card' style={{ "width":"60px","height":"60px"}}>
                        <img src= {props.img} className='most-popular-img' alt="err"/>
                        </div>
                        
                        <div className='most-popular-item-content'>
                            <h4 className='most-popular-item-title'>
                                {props.title}
                                <br/>
                                <span> {props.category}</span>
                            </h4>
                            <ul>
                                <li><span style={{"color":"yellow"}}> <FaStar/></span> {props.rate}</li>
                                <li><span style={{"color":"var(--light-pinky)"}}> <FaDownload/></span> {props.download}</li>
                            </ul>
                            
                        </div>

                    </div>
                    <hr style={{"color":"var(--page)"}}/>
            </div>  
          
        </>
    );
}

export default TopDownloads;
