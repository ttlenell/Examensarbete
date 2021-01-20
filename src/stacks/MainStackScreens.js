import React from 'react';

export default MainStackScreens = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Livestream" component={LivestreamScreen} />
      {/* <MainStack.Screen name="Search" component={SearchScreen} /> */}
    </MainStack.Navigator>
  );
};
