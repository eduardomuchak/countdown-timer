import React, { Component } from 'react';
import { connect } from 'react-redux';

class Seconds extends Component {
  render() { 
    const {seconds} = this.props;
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

const mapStateToProps = (state) => ({
  seconds: state.countDownReducer.seconds,
})
 
export default connect(mapStateToProps)(Seconds);