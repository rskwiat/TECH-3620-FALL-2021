import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";

import SettingsScreen from "./views/SettingsScreen";
import ErrorScreen from "./views/ErrorScreen";

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

  	if (error) return <ErrorScreen />;

	return (
		<NavigationContainer>
			<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
			>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Settings" component={SettingsScreen} />
			</Stack.Navigator> 
		</NavigationContainer>
	);
};

export default App;
