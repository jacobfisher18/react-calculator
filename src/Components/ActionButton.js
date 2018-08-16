import React from 'react';
import '../App.css';

const ActionButton = ({ action, clickHandler }) => {

  return (
    <div className="Button ActionButton" onClick={clickHandler}>
      { action }
    </div>
  );
}

export default ActionButton;