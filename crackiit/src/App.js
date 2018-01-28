import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {html: []}
  componentDidMount() {
    fetch('/some')
      .then(res => res.text())
      .then(html => this.setState({ html }));
  }

  render() {
    return (
      <div className="App">
      {this.state.html}
      </div>
    );
  }
}

export default App;
