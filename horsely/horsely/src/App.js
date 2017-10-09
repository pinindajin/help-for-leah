import React, { Component } from 'react';
import './App.css';
import BarnList from './Components/BarnList/BarnList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container-fluid">
            <div className="row">
              <div className="clearfix">
                <div className="pad-left pull-left header-title">
                  Horsely
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="content-pad-top">
          <BarnList/>
        </div>
      </div>
    );
  }
}

export default App;
