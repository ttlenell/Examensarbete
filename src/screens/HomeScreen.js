import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import Header from '../components/header';
import I18n from '../utils/i18n';
import BroadcastList from '../components/broadcastList';

export default class HomeScreen extends Component {


  state = {};

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
     <SafeAreaView>
        <Header />
      <View style={styles.container}>
      <BroadcastList />
    
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#3399ff',
    backgroundColor: 'grey',
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
