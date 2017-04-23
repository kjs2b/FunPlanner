import React, { Component } from 'react';
import { Text, Navigator } from 'react-native';
//import Login from './components/Login';
import Dummy from './components/Dummy';

class App extends Component {
  constructor() {
    super();

    this.state = { loggedIn: false };
  }

  logIn() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <Navigator
        initailRoute={{ title: 'Dummy', index: 0 }}
        renderScene={(route, navigator) =>
          <Text>Hello {route.title}!</Text>
        }
        style={{padding:100}}
      />
    );
  }
}

export default App;