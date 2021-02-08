import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
// import Orientation from 'react-native-orientation-locker';
import Header from '../components/header';
import I18n from '../utils/i18n';
import BroadcastList from '../components/broadcastList';

// import {UserContext} from '../context/UserContext';
// import {FirebaseContext} from '../context/FirebaseContext';

export default function HomeScreen({navigation}) {
  // const [user, setUser] = useContext(UserContext);
  // const firebase = useContext(FirebaseContext);

  // const logOut = async () => {
  //   const loggedOut = await firebase.logOut();

  //   if (loggedOut) {
  //     setUser((state) => ({...state, isLoggedIn: false}));
  //   }
  // };
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <View style={styles.broadcastDash}>
          <Text style={styles.chooseBroadcastText}>
            {I18n.t('chooseBroadcast')}
          </Text>
          hejsan
          {/* will add clickable text/button for dashboard link */}
          <Text style={styles.buttonText}>{I18n.t('dashboardInfo')}</Text>
        </View>
        <BroadcastList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#3399ff',
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 10,
    width: '100%',
    height: '100%',
  },
  broadcastDash: {
    alignItems: 'center',
    flexDirection: 'column',
    // borderWidth: 10,
    // borderColor: 'black',
    bottom: 370,
  },
  chooseBroadcastText: {
    fontSize: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },

  button: {
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export default class HomeScreen extends Component {
//   state = {};

//   componentDidMount() {
//     Orientation.lockToPortrait();
//   }

//   render() {
//     return (
//       <SafeAreaView>
//         <Header />
//         <View style={styles.container}>
//           <View style={styles.broadcastDash}>
//             <Text style={styles.chooseBroadcastText}>
//               {I18n.t('chooseBroadcast')}
//             </Text>
//             {/* will add clickable text/button for dashboard link */}
//             <Text style={styles.buttonText}>{I18n.t('dashboardInfo')}</Text>
//           </View>
//           <BroadcastList />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,

//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundColor: '#3399ff',
//     backgroundColor: 'grey',
//     borderColor: 'black',
//     borderWidth: 10,
//     width: '100%',
//     height: '100%',
//   },
//   broadcastDash: {
//     alignItems: 'center',
//     flexDirection: 'column',
//     // borderWidth: 10,
//     // borderColor: 'black',
//     bottom: 370,
//   },
//   chooseBroadcastText: {
//     fontSize: 20,
//     alignItems: 'center',
//     paddingBottom: 20,
//   },

//   button: {
//     alignItems: 'center',
//     elevation: 8,
//     backgroundColor: '#009688',
//     borderRadius: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     marginBottom: 50,
//   },
//   buttonText: {
//     fontSize: 18,
//     color: '#fff',
//   },
//   listItem: {
//     marginTop: 8,
//     marginBottom: 8,
//     borderRadius: 10,
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
