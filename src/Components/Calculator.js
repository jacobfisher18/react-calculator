import React, { Component } from 'react';
import Display from './Display';
import NumberButton from './NumberButton';
import ActionButton from './ActionButton';
import EqualsButton from './EqualsButton';
import '../App.css';

const MAX_TEXT_LENGTH = 12;

class Calculator extends Component {

  constructor() {
    super();

    this.state = {
      displayText: '',
      previousDisplayText: '',
      operator: '',
      displayTextIsOperator: false
    }
  }

  componentWillMount() {
    document.addEventListener("keypress", this.handleKeyPress.bind(this));
  }

  handleKeyPress(e) {
    switch (e.charCode) {
      case 48:
        this.handleNumberClick(0);
        break;
      case 49:
        this.handleNumberClick(1);
        break;
      case 50:
        this.handleNumberClick(2);
        break;
      case 51:
        this.handleNumberClick(3);
        break;
      case 52:
        this.handleNumberClick(4);
        break;
      case 53:
        this.handleNumberClick(5);
        break;
      case 54:
        this.handleNumberClick(6);
        break;
      case 55:
        this.handleNumberClick(7);
        break;
      case 56:
        this.handleNumberClick(8);
        break;
      case 57:
        this.handleNumberClick(9);
        break;
      case 13:
        this.handleEqualsClick();
        break;
      case 99:
        this.handleClearClick();
        break;
      case 120:
        this.handleOperatorClick("*");
        break;
      case 47:
        this.handleOperatorClick("/");
        break;
      case 61:
        this.handleOperatorClick("+");
        break;
      case 45:
        this.handleOperatorClick("-");
        break;
      default:
        break;
    }
  }

  handleNumberClick(num) {
    if (this.state.displayText.length < MAX_TEXT_LENGTH) {
      let displayText = (this.state.displayTextIsOperator) ? '' : this.state.displayText;
      displayText += String(num);
      this.setState({
        displayText,
        displayTextIsOperator: false
      });
    }
  }

  handleOperatorClick(operator) {
    if (this.state.displayTextIsOperator) {
      this.setState({
        operator,
        displayText: operator
      });
    } else {
      this.setState({
        operator,
        previousDisplayText: this.state.displayText,
        displayText: operator,
        displayTextIsOperator: true
      });
    }
  }

  handleClearClick() {
    this.setState({
      displayText: '',
      previousDisplayText: '',
      operator: '',
      displayTextIsOperator: false
    });
  }

  handleSignReverseClick() {
    if (!this.state.displayTextIsOperator) {
      let displayText = this.state.displayText;

      if (displayText[0] === '-') {
        displayText = displayText.substring(1);
      } else {
        displayText = '-' + displayText;
      }

      this.setState({
        displayText,
        displayTextIsOperator: false
      });
    }
  }

  handleEqualsClick() {
    let result;
    const previousNumber = Number(this.state.previousDisplayText);
    const currentNumber = Number(this.state.displayText);

    switch (this.state.operator) {
      case '+':
        result = previousNumber + currentNumber;
        break;
      case '-':
        result = previousNumber - currentNumber;
        break;
      case 'x':
        result = previousNumber * currentNumber;
        break;
      case '/':
        result = previousNumber / currentNumber;
        break;
      case '%':
        result = previousNumber % currentNumber;
        break;
      default:
        result = currentNumber;
        break;        
    }

    let resultText = String(result).substring(0, MAX_TEXT_LENGTH);

    this.setState({
      displayText: resultText,
      displayTextIsOperator: false
    });
  }

  render() {
    return (
      <div className="Calculator">
        <Display text={this.state.displayText} />
        <ActionButton action={'c'} clickHandler={this.handleClearClick.bind(this)}/>
        <ActionButton action={'+/-'} clickHandler={this.handleSignReverseClick.bind(this)}/>
        <ActionButton action={'%'} clickHandler={this.handleOperatorClick.bind(this, '%')}/>
        <span className='blue'>
          <ActionButton action={'/'} clickHandler={this.handleOperatorClick.bind(this, '/')} />
        </span>
        <NumberButton value={'7'} clickHandler={this.handleNumberClick.bind(this, 7)}/>
        <NumberButton value={'8'} clickHandler={this.handleNumberClick.bind(this, 8)}/>
        <NumberButton value={'9'} clickHandler={this.handleNumberClick.bind(this, 9)}/>
        <span className='green'>
          <ActionButton action={'x'} clickHandler={this.handleOperatorClick.bind(this, 'x')} />
        </span>
        <NumberButton value={'4'} clickHandler={this.handleNumberClick.bind(this, 4)}/>
        <NumberButton value={'5'} clickHandler={this.handleNumberClick.bind(this, 5)}/>
        <NumberButton value={'6'} clickHandler={this.handleNumberClick.bind(this, 6)} />
        <span className='yellow'>
          <ActionButton action={'-'} clickHandler={this.handleOperatorClick.bind(this, '-')}/>
        </span>
        <NumberButton value={'1'} clickHandler={this.handleNumberClick.bind(this, 1)} />
        <NumberButton value={'2'} clickHandler={this.handleNumberClick.bind(this, 2)}/>
        <NumberButton value={'3'} clickHandler={this.handleNumberClick.bind(this, 3)}/>
        <span className='red'>
          <ActionButton action={'+'} clickHandler={this.handleOperatorClick.bind(this, '+')} />
        </span>
        <NumberButton value={'0'} clickHandler={this.handleNumberClick.bind(this, 0)} />
        <NumberButton value={'.'} clickHandler={this.handleNumberClick.bind(this, '.')}/>
        <EqualsButton clickHandler={this.handleEqualsClick.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
