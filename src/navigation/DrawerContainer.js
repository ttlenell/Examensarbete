import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../screens/navigation/DrawerContent';
import Settings from '../screens/navigation/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerStyle={styles.drawStyle}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawStyle: {
    width: 320,
  },
});

export default DrawerNavigator;
