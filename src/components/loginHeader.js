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
    backgroundColor: '#3B40B5',
    padding: 0,
    flex: 1,
    marginBottom: 140,
  },

  image: {
    alignSelf: 'center',
    marginTop: 25,
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});
