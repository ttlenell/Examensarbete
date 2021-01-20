import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Image,
  Keyboard,
  TextInput,
} from 'react-native';
import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';
import {Button, Icon} from 'native-base';

// eslint-disable-next-line no-undef
export default Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const signIn = async () => {
    setLoading(true);

    try {
      await firebase.signIn(email, password);

      const uid = firebase.getCurrentUser().uid;

      const userInfo = await firebase.getUserInfo(uid);

      setUser({
        username: userInfo.username,
        email: userInfo.email,
        uid,
        // profilePhotoUrl: userInfo.profilePhotoUrl,
        isLoggedIn: true,
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={styles.container}>
          <View style={styles.inner}>
            <Text style={styles.greeting}>The Recipe App</Text>
            <View style={styles.imageLogo}>
              //{' '}
              <Image
                style={{width: 250, height: 250, alignSelf: 'center'}}
                resizeMode="center"
                source={{
                  uri:
                    'https://image.staylive.se/resources/logotypes/staylivelogo_white_bg_no_text.png',
                }}
              />
            </View>

            <View style={styles.form}>
              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Email-adress</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Email'}
                  // inlineImageLeft={'account'}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>
              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Lösenord</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Password'}
                  // inlineImageLeft={'account'}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                padding: 10,
                justifyContent: 'center',
                backgroundColor: 'green',
              }}
              onPress={() => signIn()}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 25,
                }}>
                Logga in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 32,
              }}
              onPress={() => navigation.navigate('Register')}>
              <Text style={{color: 'black', fontSize: 13}}>
                Har du inget konto?
                <Text style={{fontWeight: '500', color: '#E9446A'}}>
                  {' '}
                  Registrera dig här
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 25,
                  }}
                />
              </Text>
            </TouchableOpacity>
            <View style={{flex: 1}} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
  },
  greeting: {
    marginTop: 32,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    // color: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    fontSize: 18,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { SafeAreaView } from "react-navigation";

// export default class LoginScreen extends React.Component {
//   static navigationOptions = { title: "Login", headerShown: false };

//   state = {
//     email: "",
//     password: "",
//     errorMessage: null,
//   };

//   render() {
//     return (
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <KeyboardAvoidingView
//           style={{ flex: 1 }}
//           enabled
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//         >
//           <SafeAreaView style={styles.container}>
//             <View style={styles.inner}>
//               <Text style={styles.greeting}>StayLive</Text>
//               <View style={styles.imageLogo}>
//                 <Image
//                   style={{ width: 250, height: 250, alignSelf: "center" }}
//                   resizeMode="center"
//                   source={{
//                     uri:
//                       "https://image.staylive.se/resources/logotypes/staylivelogo_white_bg_no_text.png",
//                   }}
//                 />
//               </View>
//               <View style={styles.errorMessage}>
//                 {/* {this.state.errorMessage && (
//                   <Text style={styles.error}>{this.state.errorMessage}</Text>
//                 )} */}
//               </View>
//               <View style={styles.form}>
//                 <View style={{ marginTop: 32 }}>
//                   <Text style={styles.inputTitle}>Email-adress</Text>
//                   <TextInput
//                     blurOnSubmit={false}
//                     returnKeyType={"next"}
//                     style={styles.input}
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                     onChangeText={(email) => this.setState({ email })}
//                     onSubmitEditing={() => {
//                       this.secondInput.focus();
//                     }}
//                     value={this.state.email}
//                   />
//                 </View>
//                 <View style={{ marginTop: 32 }}>
//                   <Text style={styles.inputTitle}>Lösenord</Text>
//                   <TextInput
//                     ref={(ref) => {
//                       this.secondInput = ref;
//                     }}
//                     style={styles.input}
//                     autoCapitalize="none"
//                     autoCorrect={false}
//                     onChangeText={(password) => this.setState({ password })}
//                     value={this.state.password}
//                   />
//                 </View>
//               </View>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={this.handleLogin}
//               >
//                 <Text style={{ color: "#FFF", fontWeight: "500" }}>
//                   Logga in
//                 </Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   alignSelf: "center",
//                   marginTop: 32,
//                 }}
//                 onPress={() => this.props.navigation.navigate("Register")}
//               >
//                 <Text style={{ color: "black", fontSize: 13 }}>
//                   Har du inget konto?
//                   <Text style={{ fontWeight: "500", color: "#E9446A" }}>
//                     {" "}
//                     Registrera dig här
//                   </Text>
//                 </Text>
//               </TouchableOpacity>
//               <View style={{ flex: 1 }} />
//             </View>
//           </SafeAreaView>
//         </KeyboardAvoidingView>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: 50,
//   },
//   greeting: {
//     marginTop: 32,
//     fontSize: 22,
//     fontWeight: "400",
//     textAlign: "center",
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: "flex-end",
//   },
//   errorMessage: {
//     height: 72,
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: 30,
//   },
//   error: {
//     color: "#E9446A",
//     fontSize: 13,
//     fontWeight: "600",
//     textAlign: "center",
//   },
//   form: {
//     marginBottom: 48,
//     marginHorizontal: 30,
//   },
//   inputTitle: {
//     // color: '#8A8F9E',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     height: 40,
//     fontSize: 15,
//     color: "#161F3D",
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 5,
//     height: 35,
//     fontSize: 18,
//   },
//   button: {
//     marginHorizontal: 30,
//     backgroundColor: "#E9446A",
//     borderRadius: 4,
//     height: 52,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   imageLogo: {
//     marginBottom: 10,
//   },
// });
