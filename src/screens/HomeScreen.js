import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // post update, do something
      console.log("New post", route.params.post);
    }
  }, [route.params?.post]);
  return (
    <View style={styles.screenStyle}>
      <Text>Home Screennnnn</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 18,
            otherParam: "Kim Kim Kim",
          })
        }
      />
      <Button
        title="Create Post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Button
        title="Go to Nesting"
        onPress={() => navigation.navigate("Nesting")}
      />
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

export default HomeScreen;
