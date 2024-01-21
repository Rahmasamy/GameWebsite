import React from "react";
import Card from "../Card/Card";
import CarsualItems from "../../Data/CarsualData";
import './Carsual.css';
const Carsual = () => {
  const carsualitems = CarsualItems.map((carsualItem) => {
    return (
      <div key={carsualItem.id}>
        <Card
        key={carsualItem.id}
        img={carsualItem.img}
        title={carsualItem.title}
        category={carsualItem.category}
        rate={carsualItem.rate}
        download={carsualItem.download}
      />
      </div>
      
    );
  });

  return (
    <>
    <div className="slider" style={{"display":"flex"}}>
   
      {
        carsualitems.map( item => {
               return <div key={item.k}> {item}</div>
        })
      }
    </div>   
    </>
  );
};

export default Carsual;
