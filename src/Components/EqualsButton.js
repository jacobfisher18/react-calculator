import React from 'react';
import '../App.css';

const EqualsButton = ({ clickHandler }) => {

  return (
    <div className="Button EqualsButton" onClick={clickHandler}>
      =
    </div>
  );
}

export default EqualsButton;