import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    // <Image
    //   style={{ width: 50, height: 50 }}
    //   source={require("@expo/snack-static/react-native-logo.png")}
    // />
    <Text>Alo!</Text>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          title: "App cua tui",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // title: "Overview",
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button onPress={() => alert("This is a button!")} title="Info" />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerTintColor: "whitesmoke",
          })} // this will overwrite "App cua tui"
          initialParams={{ itemId: 81, msg: "hehehe" }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
