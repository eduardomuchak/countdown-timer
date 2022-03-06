import React, { Component } from 'react';
import './Countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 1,
      seconds: 60,
      plural: false,
      minutesIsVisible: false,
    }
  }

  componentDidMount() {
    this.minutes = setInterval(() => {
      let { minutes } = this.state;
      this.setState({
        minutes: minutes - 1,
      })
    }, 60000)
    this.handlePlural()
    this.handleVisibleMinutes()

    this.seconds = setInterval(() => {
      let { seconds } = this.state;
      this.setState({
        seconds: seconds - 1,
      })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.minutes !== this.state.minutes && this.state.minutes === 0){
      clearInterval(this.minutes)
    }
    
    if(prevState.seconds !== this.state.seconds && this.state.seconds === 0){
      clearInterval(this.seconds)
      // alert('One day, all your hard work will pay off')
    }
  }

  handlePlural = () => {
    const { minutes } = this.state;
    if (minutes > 1) {
      this.setState({ 
        plural: true,
      })
    }
  }

  handleVisibleMinutes = () => {
    const { minutes } = this.state;
    if (minutes >= 1) {
      this.setState({ 
        minutesIsVisible: true,
      })
    }
  }
  
  render() { 
    const { minutes, seconds, plural, minutesIsVisible } = this.state; 
    return (
      <div className="countdown-timer">
        { minutesIsVisible 
        ? ( plural 
            ? <><span className="ms-2">{minutes}</span><span className="ms-2">minutes</span></>
            : <><span className="ms-2">{minutes}</span><span className="ms-2">minute</span></> 
          )
        : <></> }
        <span className="ms-2">{seconds}</span>
        <span className="ms-2">seconds</span>
      </div>
    );
  }
}
 
export default Countdown;