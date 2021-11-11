import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Header, Text } from "react-native-elements";
import { HeaderIconButton, Weather } from "../components";
import { color, apis } from "../constants";

const HomeScreen = ({ navigation, location }) => {
	if (!location) return null;
	const [locationName, setLocationName] = useState("Loading...");
	const { latitude, longitude } = location.coords;

	useEffect(() => {
		const getUserLocation = async () => {
			const res = await fetch(`${apis.map}/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=12`, { method: "get" });
			const response = await res.json();
			setLocationName(response.display_name);
		};
		
		getUserLocation();
	}, [latitude, longitude]);

	return (
		<View>
			<Header 
				centerComponent={{
					text: locationName,
					style: {
						color: color.white,
						fontSize: 18,
					}
				}}
				rightComponent={
					<HeaderIconButton
						name="settings"
						color={color.white}
						size={25}
						onPress={() => navigation.navigate("Settings")}
					/>
				}
			/>
			<Weather longitude={longitude} latitude={latitude} />
		</View>
	);
}

export default HomeScreen;
