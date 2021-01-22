/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import I18n from '../utils/i18n';
import {UserContext} from '../context/UserContext';
import {FirebaseContext} from '../context/FirebaseContext';

export default function Header() {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const logOut = async () => {
    const loggedOut = await firebase.logOut();

    if (loggedOut) {
      setUser((state) => ({...state, isLoggedIn: false}));
    }
  };
  return (
    <View style={styles.container}>
      <Button title="Logga ut" onPress={() => logOut()} />
      <Image
        style={{width: 50, height: 50, alignSelf: 'center'}}
        resizeMode="center"
        source={{
          uri:
            'https://image.staylive.se/resources/logotypes/staylivelogo_white_bg_no_text.png',
        }}
      />

      <Text style={styles.title}>{I18n.t('headerAppName')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingTop: 0,
    backgroundColor: 'blue',
    bottom: 0,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-evenly'
  },
  title: {
    // textAlign: 'center',
    top: 30,
    right: -10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageLogo: {
    marginBottom: 10,
  },
});
