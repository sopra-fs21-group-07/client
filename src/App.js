import React, { Component } from 'react';
import { Header } from './components/common'
import AppRouter from "./components/shared/routers/AppRouter";

/**
 * Happy coding!
 * Header imports the defined header in components
 */
class App extends Component {
  render() {
    return (
      <div>
        <Header/> 
        <AppRouter />
      </div>
    );
  }
}

export default App;
