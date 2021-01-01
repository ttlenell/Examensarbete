import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import I18n from '../utils/i18n';

export default function BroadcastList() {
    return (
        <View>

         <View style={styles.container}>
          
           <View>
         
         
         
         <Text style={styles.textInfo}>
               Klicka på en stream för att öppna kameran och börja streama!
             </Text>
           <Text style={styles.buttonText}>{I18n.t("hello")}</Text>
           <Text style={styles.buttonText}>{I18n.t("hej")}</Text>
           <Text style={styles.buttonText}>{I18n.t("hello")}</Text>
           
         </View>
         </View>
         </View>
       );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 0,
    backgroundColor: 'grey',
    bottom: 0,
    marginBottom: 0,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
