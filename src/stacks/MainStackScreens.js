import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import Livestream from '../screens/LivestreamScreen';

export default MainStackScreens = () => {
  const MainStack = createStackNavigator();
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Livestream" component={LivestreamScreen} />
      {/* <MainStack.Screen name="Search" component={SearchScreen} /> */}
    </MainStack.Navigator>
  );
};
