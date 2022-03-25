import React, { Component } from 'react';
import './Countdown.css';
import Minutes from './Minutes';
import Seconds from './Seconds';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 3,
      seconds: 60,
    }
  }

  // componentDidMount() {
  //   this.minutes = setInterval(() => {
  //     let { minutes } = this.state;
  //     this.setState({
  //       minutes: minutes - 1,
  //     })
  //   }, 3000)

  //   this.seconds = setInterval(() => {
  //     let { seconds } = this.state;
  //     this.setState({
  //       seconds: seconds - 1,
  //     })
  //   }, 1000)
  // }

  // componentDidUpdate(_prevProps, prevState) {
  //   if(prevState.minutes !== this.state.minutes && this.state.minutes === 0){
  //     clearInterval(this.minutes)
  //   }
    
  //   if(prevState.seconds !== this.state.seconds && this.state.seconds === 0){
  //     clearInterval(this.seconds)
  //   }
  // }
  
  render() {
    // const {minutes, seconds} = this.state;
    return (
      <main className='main-content'>
        <div className="countdown-timer">
          <Minutes 
            // minutes={minutes}
          />
          <Seconds 
            // seconds={seconds}
          />
        </div>
        <div className='input-container'>
          <label>
            <input type="text" placeholder='Please enter the minutes amount'className="input-content"/>
          </label>
          <button className="button-start">Start</button>
        </div>
      </main>
    );
  }
}
 
export default Countdown;