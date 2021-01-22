import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/staylivelogo6_ring.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F57B4',

    padding: 10,
    flex: 1,
    marginBottom: 50,
  },

  image: {
    alignSelf: 'center',
    marginTop: 50,
    width: 270,
    height: 270,
    resizeMode: 'stretch',
  },
});
