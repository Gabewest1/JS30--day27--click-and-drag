import React, { Component } from 'react';

import HorizontalScroller from "./components/HorizontalScroller"
import Items from "./components/Items"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HorizontalScroller>
          <Items numItems={ 30 } />
        </HorizontalScroller>
      </div>
    );
  }
}

export default App;
