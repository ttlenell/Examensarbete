import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import I18n from "../utils/i18n";

export default function BroadcastList() {
  const [stream, setStream] = useState([
    { name: "Bandy", id: "0" },
    { name: "Hockey", id: "1" },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={stream}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text style={styles.item}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    height: 400,
    width: 400,
    borderWidth: 10,
    borderColor: "black",
  },
  title: {
    textAlign: "center",
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
  item: {
    backgroundColor: "pink",
    marginTop: 24,
    fontSize: 24,
    marginHorizontal: 10,
    padding: 30,
  },
});
