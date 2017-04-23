import React, { Component } from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
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
      <View>
        <Text>Anyone out there?</Text>
        <NavigatorIOS
          initailRoute={{
            title: 'Login',
            component: Login,
            //passProps: { logIn: this.logIn.bind(this) }
          }}
        />
      </View>
    );
  }
}

export default App;