import React, { Component } from 'react';
import { NavigatorIOS, Text, PropTypes } from 'react-native';

class Dummy extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View>
        <Text>This is a dummy component.</Text>
      </View>
    );
  }
}

export default Dummy;