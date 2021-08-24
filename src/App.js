import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // You have to yarn add react-router-dom
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;