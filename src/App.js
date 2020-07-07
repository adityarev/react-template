import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleText: "Hello, World!"
    };
  }

  render() {
    return (
      <div>{this.state.sampleText}</div>
    );
  }
}

export default App;
