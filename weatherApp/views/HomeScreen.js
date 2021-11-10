import React, { useState, useEffect } from "react";
import { Text, Header, Button } from "react-native-elements";
import { View, StyleSheet } from "react-native";

import { HeaderIconButton, Container } from "../components";
import { color, apis } from '../constants';

const HomeScreen = ({ navigation, location }) => {
	if (!location) return null;
	const [locationTitle, setLocationTitle] = useState("Loading...");
	const { latitude, longitude } = location.coords;

	useEffect(() => {
		const fetchCity = async () => {
			const res = await fetch(`${apis.map}/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=12`, { method: 'get' });
			const response = await res.json();
			setLocationTitle(response.display_name);
		};

		fetchCity();
	}, []);

	return (
		<View>
			<Header
				centerComponent={{ 
					text: locationTitle, 
					style: { 
						color: color.white, 
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
				containerStyle={styles.headerBar}
			/>

			<Container>
				<Text>Home Screen</Text>
			</Container>

		</View>
	);
}

const styles = StyleSheet.create({
	headerBar: {
		marginBottom: 20,
	}
});

export default HomeScreen;

