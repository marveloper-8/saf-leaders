import React, {useEffect, createContext, useReducer, useContext} from 'react';
// import Navigation from './components/Navigation'
// import NavigationTablet from './components-tablet/Navigation'
import NavigationMobile from './Navigation'
import Footer from './Footer'
import ReactGa from 'react-ga'

import Home from './Home'
import BooksList from './BooksList'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'

import {reducer, initialState} from './../../reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type: "USER", payload: user})
    } else{
      history.push('/login')
    }
  }, [history, dispatch])

  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/books' component={BooksList} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  )
}

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-163403119-1')

    // to report page view
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value={{state, dispatch}}>
        <Router>
          <NavigationMobile className="navMobile" />
          <Routing />
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
