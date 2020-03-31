import React from 'react';
import Navigation from './components/Navigation'
import NavigationMobile from './components-mobile/Navigation'
import NavigationTablet from './components-tablet/Navigation'

import Home from './pages/Home'
import Books from './pages/Books'
import Account from './pages/Account'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './app.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation className="navDesktop" />
        <NavigationMobile className="navMobile" />
        <NavigationTablet className="navTablet" />
        
        <Route exact path='/' component={Home} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/books' component={Books} />
      </Router>
    </div>
  );
}

export default App;
