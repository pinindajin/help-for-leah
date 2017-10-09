import React, { Component } from 'react';
import './App.css';
import BarnList from './Components/BarnList/BarnList.js';
import Stall from './Components/StallList/StallList';
import { HashRouter, Route } from 'react-router-dom';


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
          <HashRouter>
            <div>
              <Route exact path="/" component={ BarnList }></Route>
              <Route exact path="/stall/:id" component={ Stall }></Route>
            </div>
          </HashRouter>
        </div>
      </div>
    );
  }
}

export default App;
