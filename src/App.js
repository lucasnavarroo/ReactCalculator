import React, { Component } from 'react';
import Display from './components/Display.js';
import Buttons from './components/Buttons.js';

export default class App extends Component {

  render() {

    return (
      <div>
        <Display/>
        <Buttons/>
      </div>
    );
  }

}

