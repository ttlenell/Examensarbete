import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function LivestreamScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>livestream!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
