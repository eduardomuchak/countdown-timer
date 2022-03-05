import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {
  state = {  } 
  render() { 
    return (
      <div className="countdown-timer">
        <span className="ms-2">00</span>
        <span className="ms-2">hours</span>
        <span className="ms-2">00</span>
        <span className="ms-2">minutes</span>
        <span className="ms-2">00</span>
        <span className="ms-2">seconds</span>
      </div>
    );
  }
}
 
export default Countdown;