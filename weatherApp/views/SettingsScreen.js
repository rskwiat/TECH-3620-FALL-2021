import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Text, Button, Header, Switch } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";

import { urls, color } from "../constants";
import { HeaderIconButton, Container } from "../components";
import { toggle } from "../redux/reducer/weatherReducer";

const SettingsScreen = ({ navigation }) => {
	const useFahrenheit = useSelector((state) => state.weather.fahrenheit);
	const dispatch = useDispatch();

	const toggleSwitch = () => {
		dispatch(toggle(!useFahrenheit));
	};
	
	return (
		<View>
			<Header
				leftComponent={
					<HeaderIconButton
						name="chevron-left"
						color={color.white}
						size={25}
						onPress={() => navigation.navigate("Home")}
					/>
				}
				centerComponent={{ 
					text: "Settings", 
					style: { 
						color: color.white, 
						fontSize: 18
					}
				}}
				containerStyle={styles.headerBar}
			/>
			
			<Container>
				<View style={styles.toggleBar}>
					<Text>Toggle Fahrenheit</Text>
					<Switch
						onValueChange={toggleSwitch}
						value={useFahrenheit}
					/>
				</View>

				<Text>Open Weather</Text>
				<Button 
					title="Open Weather Map" 
					onPress={() => WebBrowser.openBrowserAsync(urls.weather)}
					style={styles.buttonStyles}
				/>

				<Text>Open Street Map</Text>
				<Button
					title="Open Street Map" 
					onPress={() => WebBrowser.openBrowserAsync(urls.maps)}
					style={styles.buttonStyles}
				/>
			</Container>
		</View>
  )
}

SettingsScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}),
};

const styles = StyleSheet.create({
	toggleBar: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 40,
	},
	headerBar: {
		marginBottom: 20,
	},
	buttonStyles: {
		marginVertical: 20
	}
});

export default SettingsScreen;
