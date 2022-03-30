import { DOWN_COUNT, START_COUNT } from '../actions';

const INITIAL_STATE = {
  minutes: 0,
  seconds: 0,
  count: 0,
}

function countDownReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_COUNT: 
      return {
        minutes: action.minutes,
        seconds: 0,
        count: action.minutes * 60,
      }

    case DOWN_COUNT: 
    return {
      ...state,
      count: state.count - 1, 
      minutes: Math.floor(state.count / 60),
      seconds: state.seconds === 0 ? 59 : state.seconds - 1 ,
    }
    
    default:
      return state;
  }
}

export default countDownReducer;