import React, { Component } from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();

    this.state = { loggedIn: false };
    this.login = this.logIn.bind(this);
  }

  logIn() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <NavigatorIOS
        initailRoute={{
          title: 'login',
          component: Login
        }} />
      )
  }
}

export default App;
