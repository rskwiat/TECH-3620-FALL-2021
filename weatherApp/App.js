import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate("About")}
      title="Settings"
    />
  </View>
);

const AboutScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator> 
  </NavigationContainer>
);

export default App;
