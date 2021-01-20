// /* eslint-disable prettier/prettier */
// import {
//   createAppContainer,
//   createSwitchNavigator,
// } from '@react-navigation/native';
// import React, {Component} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// // import LivestreamScreen from './screens/LivestreamScreen';
// import LoginScreen from './auth/LoginScreen';
// // import RegisterScreen from './screens/Auth/RegisterScreen';

// const AppStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: () => ({
//       headerShown: false,
//     }),
//   },
//   // Form: StreamFormScreen,
//   //   Detail: StreamDetailScreen,
//   // Live: LivestreamScreen,
// });

// const AuthNavigator = createStackNavigator({
//   LoginRoute: {
//     screen: LoginScreen,
//     navigationOptions: () => ({
//       headerShown: false,
//     }),
//   },
// });

// const AppContainer = createAppContainer(
//   createSwitchNavigator(
//     {
//       App: AppStack,
//       Auth: AuthNavigator,
//     },
//     {
//       // change App to Auth for login
//       initialRouteName: 'App',
//     },
//   ),
// );

// export default class App extends Component {
//   render() {
//     return <AppContainer screenProps={{appName: 'ProducerApp'}} />;
//   }
// }
