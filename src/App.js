import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  async componentDidMount() {
    const response = await fetch('https://portfolio-diana-eu-1.herokuapp.com/');
    const json = await response.json();
    this.setState({ data: json.data });
  }
  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {data ? <p>The data is {data}</p> : <p>No data yet</p>}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
