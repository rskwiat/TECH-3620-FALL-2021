import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-elements";
import { iconName } from "../constants/utils";

const WeatherIcon = ({ weather, iconSize, showDescription }) => (
	<View>
		{weather.map((w, i) => {
			const { description, main } = w;
			const icon = iconName(main);
			return (
				<View key={i}>
					<Icon type="feather" size={iconSize} name={icon} />
					{showDescription && <Text style={styles.description}>{description}</Text>}
				</View>
			);
		})}
	</View>
);

const styles = StyleSheet.create({
	description: {
		marginTop: 10,
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "capitalize"
	}
})

export default WeatherIcon;
