import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./views/SettingsScreen";
import HomeScreen from "./views/HomeScreen";
import * as Location from "expo-location";

const Stack = createNativeStackNavigator();

const App = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission Denied");
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
    }; 

    getLocation();
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} location={location} />}
        </Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
};

export default App;
