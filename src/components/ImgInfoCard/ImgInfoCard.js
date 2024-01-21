import React from 'react';
import { RxVideo } from 'react-icons/rx';
import { BsEyeFill } from 'react-icons/bs';
import './ImgINfo.css';
const ImgInfoCard = (props) => {
    return (
        <>
        <div className='img-icon-info'>
                         <img src={props.img} alt=".."/>
                         <div className='icon'>
                         <a className='icon-link' href='https://www.youtube.com/watch?v=r1b03uKWk_M'> <RxVideo /></a> 
                        </div>
        </div>
            <div className='informationAboutClip'>
                     <p> {props.order}</p>
                    <div className='icon-view'>
                    <span  style={{"color":"var(--light-pinky"}}> <BsEyeFill/> </span>
                    <div> <p> {props.views}</p></div>
                    </div> 
            </div>
        </>
    );
}

export default ImgInfoCard;
