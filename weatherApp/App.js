import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./views/SettingsScreen";
import * as Location from "expo-location";

const HomeScreen = ({ navigation, location }) => {
  if (!location) return null;
  const { latitude, longitude } = location.coords;
  // console.log(latitude)
  const [locationTitle, setLocationTitle] = useState("Loading...");
  // console.log(location.coords.latitude);

  useEffect(() => {
    const getUserLocation = async () => {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse&format=json&lat=${latitude}1&lon=${longitude}`, { method: "GET" });
			
      const response = await res.json();

      console.log(response);

      // setLocationTitle(response);
    };

      
    getUserLocation();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Settings")}
        title="Settings"
      />
    </View>
  );
}













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
