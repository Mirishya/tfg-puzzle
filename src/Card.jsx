import React from 'react';
import './Card.css';
import Scroll from "./Scroll.js";

function Card(props) {
  return (
    <div className="card">
        
      <img src={props.image} alt={props.title} />
        <div className="card-content">
          <h2>{props.title}</h2>
            <p>{props.description}</p>
              <Scroll> </Scroll>
        </div>
    </div>
  );
}

export default Card;