import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';

class LoadingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.marginBottom}>
          <Text style={styles.txt}>Welcome to Stack Overflow</Text>
        </View>
        <View>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  marginBottom: {
    marginBottom: 20,
  },
  txt: {
    color: '#000000',
    fontSize: 20,
  },
});

export default LoadingPage;
