import React, { Component } from 'react';

class Seconds extends Component {
  constructor(props) {
    super(props);

    this.state = { seconds: 10}
  }

  componentDidMount() {
    this.seconds = setInterval(() => {
      let { seconds } = this.state;
      this.setState({
        seconds: seconds - 1,
      })
    }, 1000)
  }
  
  componentDidUpdate(_prevProps, prevState) {  
    if(prevState.seconds !== this.state.seconds && this.state.seconds === 0){
      clearInterval(this.seconds)
    }
  }

  render() { 
    const {seconds} = this.state;
    return (
      <>
      { (seconds > 1 
        ? <><span className="ms-2">{seconds}</span><span className="ms-2">seconds</span></>
        : <><span className="ms-2">{seconds}</span><span className="ms-2">second</span></>
        ) 
      }
      </>
    );
  }
}
 
export default Seconds;