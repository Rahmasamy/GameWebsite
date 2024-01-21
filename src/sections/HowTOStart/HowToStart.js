import React from "react";

import "./HowToStart.css";
import  HowToData from '../../Data/HowToStartData';
import { TestMonialContainer,ButtonBrowse,ButtonContainer } from "../../components";

const HowToStart = () => {
  const TestmonialData=HowToData.map ( testmon => {
    return <div key={testmon.id}><TestMonialContainer key={testmon.id} img={testmon.img} paragraph={testmon.paragraph} title={testmon.title} /></div>
  }

  )
  return (
    <>
      <div className="How-to">
        <h2>
          How To Start Your {" "}
          <span style={{ color: "var(--light-pinky)" }}> Live Stream</span>{" "}
        </h2>
        <div className="Main-Container-Testmonial">
        {TestmonialData}
        </div>
        <ButtonContainer>
             <ButtonBrowse text="Go to Profile"/>
        </ButtonContainer>
           
        
        
      </div>
    </>
  );
};

export default HowToStart;
