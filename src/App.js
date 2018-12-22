import React, { Component } from 'react';
import Users from './users/list'

class App extends Component {
  render() {
    return (
      <div>
        <h2> Hello React</h2>

        <Users />
      </div>
    );
  }
}

export default App;
