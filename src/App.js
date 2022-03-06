import React, { Component } from 'react';
import './App.css';
import Countdown from './components/Countdown';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() { 
    return (
      <Container fluid="md" className="container-main">
        <Countdown />
      </Container>
    );
  }
}
 
export default App;
