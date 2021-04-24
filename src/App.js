
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
import Chat from './components/chat/Chat';

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
          <Route path='/chat' component={Chat} />
          {/* <Route href="#" onClick={this.logout} Logout/>*/}
          </Switch>
      </Router>
    </>
  );
}
}

export default App;


/**
 * 
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
import Chat from './components/chat/containers/Chat/Chat';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import UserList from './components/chat/containers/UserList/UserList';
import Singleton from './socket';
import MessageType from './components/chat/containers/Chat/SendMessage/MessageType';

import Dialog from '@material-ui/core/Dialog';
import RaisedButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import { userJoined, userJoinedAck, userLeft, messageReceived } from './components/chat/actions/index';
import { bindActionCreators } from 'redux';


class App extends Component {

  constructor() {
    super();

    this.state = {
      modalOpen: true,
      usernameInput: ''
    }
  }

  render() {
    const modalActions = [
      <RaisedButton
        label="Choose"
        primary={true}
        onClick={() => this.onChooseName()}
      />
    ];

    const modalStyle = {
      width: '600px'
    };

    const chat = this.state.modalOpen ? '' : <Chat />

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
          <Route path='/chat' component={Chat} />
        
          </Switch>
      </Router>

      <MuiThemeProvider>
        <div className="App">
          <UserList users={this.state.users} />
          {chat}
          <Dialog
            title="Choose your name"
            actions={modalActions}
            modal={true}
            open={this.state.modalOpen}
            contentStyle={modalStyle}>
            <TextField
              autoFocus
              hintText="Write your name here..."
              value={this.state.usernameInput}
              onChange={(event) => this.updateInputValue(event.target.value)}
              onKeyPress={this.handleKeyPress}
            />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
    </>

  );
}

registerSocket() {
  let self = this;
  this.socket = Singleton.getInstance();

  this.socket.onmessage = (response) => {
    let message = JSON.parse(response.data);
    let users;

    switch (message.type) {
      case MessageType.TEXT_MESSAGE:
        self.props.messageReceived(message);
        break;
      case MessageType.USER_JOINED:
        users = JSON.parse(message.data);
        self.props.userJoined(users);
        break;
      case MessageType.USER_LEFT:
        users = JSON.parse(message.data);
        self.props.userLeft(users);
        break;
      case MessageType.USER_JOINED_ACK:
        let thisUser = message.user;
        self.props.userJoinedAck(thisUser);
        break;
      default:
    }
  }

  this.socket.onopen = () => {
    this.sendJoinedMessage();
  }

  window.onbeforeunload = () => {
    let messageDto = JSON.stringify({ user: this.props.thisUser, type: MessageType.USER_LEFT });
    this.socket.send(messageDto);
  }
}

sendJoinedMessage() {
  let messageDto = JSON.stringify({ user: this.state.usernameInput, type: MessageType.USER_JOINED });
  this.socket.send(messageDto);
}

onChooseName() {
  this.registerSocket();
  this.setState({ modalOpen: false });
}

updateInputValue(value) {
  this.setState({ usernameInput: value });
}

handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    this.onChooseName();
  }
}
}

function mapStateToProps(state) {
return {
  messages: state.message,
  users: state.users,
  thisUser: state.thisUser
}
}

function mapDispatchToProps(dispatch, props) {
return bindActionCreators({
  userJoined: userJoined,
  userJoinedAck: userJoinedAck,
  userLeft: userLeft,
  messageReceived: messageReceived
}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

 */
