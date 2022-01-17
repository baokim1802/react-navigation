import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const CreatePostScreen = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState("");
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.input}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // pass and merge params back to home screen
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 200,
    padding: 10,
    backgroundColor: "white",
  },
});

export default CreatePostScreen;
