import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "./views";

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate("Settings")}
      title="Settings"
    />
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Settings">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator> 
  </NavigationContainer>
);

export default App;
