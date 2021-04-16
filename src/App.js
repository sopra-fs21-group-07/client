
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/navigation/Navbar';
import AppRouter from "./components/shared/routers/AppRouter";
import {Redirect} from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import ProfilePage from './components/profilePage/ProfilePage';
import Dashboard from "./components/dashboard/Dashboard";
import CreateTour from './components/Tour/CreateTour';
import ConfirmTour from './components/Tour/ConfirmTour';

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
            <Route exact path="/" render={() => (
                <Redirect to="/home"/>
            )}/>
            <Route path='/home' exact component={Home} />
          <Route path='/registration' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/newTour' component={CreateTour} />
          <Route path='/confirmTour/:id' component={ConfirmTour} />
          <Route path='/profilePage/:username' component={ProfilePage} />
          {/* <Route href="#" onClick={this.logout} Logout/>*/}
          </Switch>
      </Router>
    </>
  );
}
}

export default App;
