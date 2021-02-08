import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
  function DrawerButton() {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.headerMenu}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={45} color="#FFFF" />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogo}
        resizeMode="center"
        source={require('../assets/images/staylivelogo8.png')}
      />
      <DrawerButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#3B40B5',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  imageLogo: {
    marginBottom: 10,
    width: 150,
    height: 150,
    left: 55,
    alignSelf: 'center',
  },

  headerMenu: {
    margin: 10,
    marginTop: 15,
    left: 110,
    width: 70,
    height: 70,
  },
});
