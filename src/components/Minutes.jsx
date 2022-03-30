import React, { Component } from 'react';
import { connect } from 'react-redux';

class Minutes extends Component {
  render() { 
    const { minutes } = this.props;
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

const mapStateToProps = (state) => ({
  minutes: state.countDownReducer.minutes,
})
 
export default connect(mapStateToProps)(Minutes);