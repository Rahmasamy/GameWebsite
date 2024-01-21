import React from 'react';
import './GamingCard.css';

const GamingCard = (props) => {
    return (
        <>
          <div className='main-gaming-card'>
             <ul className='list'>
                <li> <img src={props.img} alt=""/></li>
                <li><h4> {props.title}</h4> <span> {props.category}</span></li>
                <li><h4> Data Added</h4> <span> {props.dataAdd}</span></li>
                <li><h4> Hours Played</h4> <span> {props.hoursPlayed}</span></li>
                <li><h4> Currently</h4> <span> {props.currenty}</span></li>
                
                
             </ul>
             <div className='main-button-new'>
                <a href='/#' className="a">Download</a>
             </div>
          </div>
        </>
    );
}

export default GamingCard;
