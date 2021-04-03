
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/navigation/Navbar';
import AppRouter from "./components/shared/routers/AppRouter";


import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Profile from './components/profilePage/ProfilePage';
import Dashboard from "./components/dashboard/Dashboard";

/**
 * Happy coding!
 * Header imports the defined header in components
 */
class App extends Component {
  render() {
    return (
      <>

        <Router>
          <Navbar />
          <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/registration' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          {/*<Route path='/profile' component={Profile} />*/}
          {/* <Route href="#" onClick={this.logout} Logout/>*/}
          </Switch>
      </Router>
    </>
  );
}
}

export default App;
