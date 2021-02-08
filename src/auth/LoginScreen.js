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

import I18n from '../utils/i18n';

import {FirebaseContext} from '../context/FirebaseContext';
import {UserContext} from '../context/UserContext';

import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
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
              <View>
                <Text style={styles.inputTitle}>{I18n.t('email')}</Text>
                <TextInput
                  style={styles.input}
                  placeholder={I18n.t('email')}
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />
              </View>
              <View style={{marginTop: 24}}>
                <Text style={styles.inputTitle}>{I18n.t('password')}</Text>
                <TextInput
                  style={styles.input}
                  placeholder={I18n.t('password')}
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
              <Text style={styles.logInButtonTextStyle}>
                {I18n.t('signIn')}
              </Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.createAccountButtonTextStyle}>
                  {I18n.t('forgotPassword')} {''}
                  <Icon name="external-link" size={20} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.createAccountButton}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.createAccountButtonTextStyle}>
                  {I18n.t('createAccount')}{' '}
                  <Icon name="external-link" size={20} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
    marginBottom: 120,
    flex: 1,
    justifyContent: 'flex-end',
  },

  form: {
    marginBottom: 70,
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
    backgroundColor: '#3B40B5',
    borderRadius: 6,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
  logInButtonTextStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  createAccountButtonTextStyle: {
    color: 'black',
    fontSize: 18,
  },
  forgotPasswordButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
  createAccountButton: {
    alignSelf: 'center',
    marginTop: 32,
  },
});

export default Login;
