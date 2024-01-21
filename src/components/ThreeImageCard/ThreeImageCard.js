import React from 'react';
import details_01 from '../../assets/images/details-01.jpg';
import details_02 from '../../assets/images/details-02.jpg';
import details_03 from '../../assets/images/details-03.jpg';
import Imge from '../Imge/Imge';
import './ThreeImageCard.css';
const ThreeImageCard = () => {
    return (
    
        <div className='DetailsImg'>
           <Imge Img= {details_01}/>
           <Imge Img= {details_02}/>
           <Imge Img= {details_03}/>
           
        </div>
    );
}

export default ThreeImageCard;
