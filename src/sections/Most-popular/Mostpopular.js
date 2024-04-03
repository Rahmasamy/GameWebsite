import React from 'react';
import './Mostpopular.css';
import MostPopularItems from '../../Data/MostPopularData';
import { SectionHeader,Card,SectionWrapper } from '../../components/index';
const Mostpopular = () => {
 
      const Cards=MostPopularItems.map(card => {return <Card key ={card.id} img={card.img} title={card.title} category={card.category} rate={card.rate} download={card.download}
        />
      })
    return (
        <SectionWrapper>
            <SectionHeader>
             Most popular
            </SectionHeader>  
            
            <div className='most-popular-items'> 
              <div className='flex'>
              {Cards}  
              </div>
                  
            </div>
        </SectionWrapper>
    );
}

export default Mostpopular;
