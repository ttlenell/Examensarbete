import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../utils/i18n';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{I18n.t("hello")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#3399ff',
    bottom: -10,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
