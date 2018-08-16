import React from 'react';
import '../App.css';

const NumberButton = ({ value, clickHandler }) => {

  return (
    <div className="Button NumberButton" onClick={clickHandler}>
      {value}
    </div>
  );
}

export default NumberButton;