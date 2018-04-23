import React, { Component } from 'react';

import Items from "./components/Items"

import './App.css';

class App extends Component {
  state = { mouseStart: 0, isMouseDown: false }

  render() {
    return (
      <div className="App">
        <div 
          className="scroll-container"
          onMouseMove={ this._handleMouseMove }
          onMouseDown={ this._handleMouseDown }
          onMouseUp={ this._handleMouseUp }
          onMouseLeave={ this._handleMouseUp }
          ref={ el => this.scroller = el }
        >
          <Items numItems={ 30 } />
        </div>
      </div>
    );
  }
  _handleMouseDown = (e) => {
    console.log(("_onMouseDown"))
    this.setState({ isMouseDown: true, mouseStart: e.clientX })
  }
  _handleMouseUp = (e) => {
    console.log(("_onMouseUp"))
    this.setState({ isMouseDown: false })
  }
  _handleMouseMove = (e) => {
    console.log(("_onMouseMove"))
    const { mouseStart, isMouseDown } = this.state

    if (!isMouseDown) return

    const movement = mouseStart - e.clientX

    this.scroller.scrollLeft += movement * 1.3

    this.setState({ mouseStart: e.clientX })
  }
}

export default App;
