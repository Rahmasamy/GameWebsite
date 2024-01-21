import React from 'react';
import './TestMonialContainer.css';
const TestMonialContainer = (props) => {
    return (
        <>
          <div className="testmonial-container">
          <div className="img-content">
            <img src={props.img} alt="..." />
            <div className="content">
              <h4> {props.title} </h4>
              <p>
                {props.paragraph}
              </p>
            </div>
          </div>
          </div>   
        </>
    );
}

export default TestMonialContainer;
