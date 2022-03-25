import React, { Component } from 'react';

class Minutes extends Component {
  constructor(props) {
    super(props);

    this.state = { minutes: 2}
  }

  componentDidMount() {
    this.minutes = setInterval(() => {
      let { minutes } = this.state;
      this.setState({
        minutes: minutes - 1,
      })
    }, 60000)
  }

  componentDidUpdate(_prevProps, prevState) {
    if(prevState.minutes !== this.state.minutes && this.state.minutes === 0){
      clearInterval(this.minutes)
    }
  }
  render() { 
    const {minutes} = this.state;
    return (
      <>
      { (minutes > 1 
        ? <><span className="ms-2">{minutes}</span><span className="ms-2">minutes</span></>
        : (minutes === 1 
          ? <><span className="ms-2">{minutes}</span><span className="ms-2">minute</span></>
          : <></>
          )
        ) 
      }
      </>
    );
  }
}
 
export default Minutes;