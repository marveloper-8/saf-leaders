import React, {useEffect} from 'react';
import Navigation from './components/Navigation'
import NavigationMobile from './components-mobile/Navigation'
import NavigationTablet from './components-tablet/Navigation'
import Footer from './components-mobile/Footer'
import ReactGa from 'react-ga'

import Home from './pages/Home'
import BooksList from './pages/BooksList'
import Account from './pages/Account'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './app.css'

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-163403119-1')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div className="App">
      <Router>
        <Navigation className="navDesktop" />
        <NavigationMobile className="navMobile" />
        <NavigationTablet className="navTablet" />
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/account' component={Account} />
          <Route path='/books' component={BooksList} />
        </Switch>

        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
