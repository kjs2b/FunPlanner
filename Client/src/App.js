import React, { Component } from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
import Login from './components/Login';
//import { StackNavigator } from 'react-navigation';

class App extends Component {
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

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { loggedIn: false };
//     this.login = this.logIn.bind(this);
//   }

//   logIn() {
//     this.setState({ loggedIn: true });
//   }

//   render() {
//     if (this.state.loggedIn !== null) {
//       if (!this.state.loggedIn) {
//         return (
//           <Login onLogin={this.logIn} />
//         );
//       }
//         return (
//           <View>
//             <Checker />
//           </View>
//         );
//     }
//   }
// }

export default App;
