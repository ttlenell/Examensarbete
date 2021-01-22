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
  Keyboard,
  TextInput,
} from 'react-native';
import LoginHeader from '../components/loginHeader';
import loginHeader from '../components/loginHeader';

import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';

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
          <LoginHeader />
          <View style={styles.inner}>
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
                  placeholder={'Lösenord'}
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
              style={styles.loginButton}
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
                Har du inget konto? {''}
                <Text style={{fontWeight: '500', color: '#E9446A'}}>
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
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
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
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
    // fontFamily: 'ProximaNova-Regular',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    fontSize: 18,
  },
  loginButton: {
    marginHorizontal: 30,
    backgroundColor: '#3F57B4',
    borderRadius: 6,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
