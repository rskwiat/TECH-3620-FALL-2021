import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Location from "expo-location";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { HomeScreen, SettingsScreen, ErrorScreen } from "./views";

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
		<Provider store={store}>
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
		</Provider>
	);
};

export default App;
