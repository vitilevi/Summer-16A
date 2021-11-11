import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/user/:user" component={ User } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
