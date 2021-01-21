import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackScreens from './src/stacks/AppStackScreens';
import {FirebaseProvider} from './src/context/FirebaseContext';
import {UserProvider} from './src/context/UserContext';

export default App = () => {
  return (
    <FirebaseProvider>
      <UserProvider>
        <NavigationContainer>
          <AppStackScreens />
        </NavigationContainer>
      </UserProvider>
    </FirebaseProvider>
  );
};
