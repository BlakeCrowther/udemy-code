import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
  return (
    <div className="CharComponent" onClick={props.clicked}>
      <h1>{props.letter}</h1>
    </div>
  );
}

export default CharComponent;