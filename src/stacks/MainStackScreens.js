import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerNavigator from '../navigation/DrawerContainer';

import HomeScreen from '../screens/HomeScreen';
import LivestreamScreen from '../screens/LivestreamScreen';

const MainStack = createStackNavigator();

const MainStackScreens = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="HomeScreen" component={DrawerNavigator} />
      <MainStack.Screen name="Livestream" component={LivestreamScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
