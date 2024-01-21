import React from 'react';
import './Card.css';
import { FaStar,FaDownload } from "react-icons/fa";
const Card = (props) => {
    return (
        <>
             <div className="most-popular-item">
                    <div className='card-wrapper'>
                        <img src= {props.img} className='most-popular-img' alt="err"/>
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
                    </div>  
        </>
    );
}

export default Card;
