import * as React from "react";
import { View, Text, StyleSheet, Button, Tab } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

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

function NestingNavigatorScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="Create Post"
        component={CreatePostScreen}
        options={{ tabBarBadge: 3 }}
      />
    </Tab.Navigator>
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
        <Stack.Screen
          name="Nesting"
          component={NestingNavigatorScreen}
          options={{ headerShown: false }}
        />
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
