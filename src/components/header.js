/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import I18n from "../utils/i18n";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={{ width: 50, height: 50, alignSelf: "center" }}
        resizeMode="center"
        source={{
          uri:
            "https://image.staylive.se/resources/logotypes/staylivelogo_white_bg_no_text.png",
        }}
      />

      <Text style={styles.title}>{I18n.t("headerAppName")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 0,
    backgroundColor: "blue",
    bottom: 0,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    // justifyContent: 'space-evenly'
  },
  title: {
    // textAlign: 'center',
    top: 30,
    right: -10,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  imageLogo: {
    marginBottom: 10,
  },
});
