import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import Header from '../components/header';

export default class HomeScreen extends Component {
  static navigationsOptions = {
    title: 'StayLive Producer App',
    headerShown: false,
  };

  state = {};

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <View>
      <Header />
      <View style={styles.container}>
        
        <Text>HEJ</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3399ff',
    borderColor: 'black',
    borderWidth: 10,
    width: '100%',
    height: '100%',
  },
  textInfo: {
    fontSize: 20,
    fontStyle: 'italic',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
