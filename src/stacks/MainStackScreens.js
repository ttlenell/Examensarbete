import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import LivestreamScreen from '../screens/LivestreamScreen';

const MainStackScreens = () => {
  const MainStack = createStackNavigator();

  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Livestream" component={LivestreamScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreens;
