import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {UserContext} from '../../context/UserContext';
import {FirebaseContext} from '../../context/FirebaseContext';
import I18n from '../../utils/i18n';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerContent = (props) => {
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
      <View style={styles.logOutButtonView}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => logOut()}>
          <Text style={styles.drawerText}>{I18n.t('signOut')}</Text>
          <Icon name="sign-out" size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8490B8',
  },
  logOutButtonView: {
    bottom: 25,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
  logoutButton: {
    justifyContent: 'center',
    top: 320,
    alignItems: 'center',
  },
  drawerText: {
    alignSelf: 'center',
    fontSize: 25,
  },
});

export default DrawerContent;
