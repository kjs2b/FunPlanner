import React, { Component } from 'react';
import { NavigatorIOS, Text } from 'react-native';

class Dummy extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Text>This is a dummy component.</Text>
    );
  }
}

export default Dummy;