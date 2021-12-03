import React from "react";
import PropTypes from "prop-types";
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

WeatherIcon.propTypes = {
	weather: PropTypes.array.isRequired,
	iconSize: PropTypes.number,
	showDescription: PropTypes.bool
};

WeatherIcon.defaultProps = {
	iconSize: 18,
	showDescription: false
};

const styles = StyleSheet.create({
	description: {
		marginTop: 10,
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "capitalize"
	}
});

export default WeatherIcon;
