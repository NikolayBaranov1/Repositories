import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Favourites from './components/Favourites';
import Error from './components/Error';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Favourites" component={Favourites} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
