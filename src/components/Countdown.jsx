import React, { Component } from 'react';
import { connect } from 'react-redux';
import { downCount, downCount_Minutes, downCount_Seconds, startCount } from '../redux/actions';
import './Countdown.css';
import Minutes from './Minutes';
import Seconds from './Seconds';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      count: 0,
      showInputContainer: true,
    }
  }

  handleChange = ({target}) => {
    this.setState({
      minutes: target.value,
    })
  }

  handleClick = () => {
    const { minutes, count } = this.state;
    const {startCount, downCount} = this.props;
    startCount(minutes);
    this.intervalID = setInterval((downCount),1000);
    this.setState({
      showInputContainer: false
    })
    if(count === 0) clearInterval();
  }

  render() {
    const { showInputContainer } = this.state;
    return (
      <main className='main-content'>
        <div className="countdown-timer">
          <Minutes />
          <Seconds />
        </div>
        <div className='input-container'>
          {
            showInputContainer ? (
              <>
                <label>
                  <input 
                    type="text" 
                    placeholder='Please enter the minutes amount'
                    className="input-content"
                    onChange={(event) => this.handleChange(event)}
                  />
                </label>
                <button 
                  className="button-start"
                  onClick={this.handleClick}
                >
                  Start
                </button>
              </>
            )
            : <></>
          }
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startCount: (state) => dispatch(startCount(state)),
  downCount: (state) => dispatch(downCount(state)),
  downCount_Seconds: (state) => dispatch(downCount_Seconds(state)),
  downCount_Minutes: (state) => dispatch(downCount_Minutes(state)),
})
 
export default connect(null, mapDispatchToProps)(Countdown);