import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Settings = () => {
  return (
    <View>
      <Text style={styles.container}>Drawer Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Settings;
