import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const { itemId, otherParam, msg } = route.params;
  return (
    <View style={styles.screenStyle}>
      <Text>Details Screen</Text>
      <Text>ID: {itemId}</Text>
      <Text>Name: {otherParam}</Text>
      <Text>Message: {msg}</Text>
      <Button
        title="Update title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DetailsScreen;
