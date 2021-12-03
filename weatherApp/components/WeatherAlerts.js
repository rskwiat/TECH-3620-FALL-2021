import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { color } from "../constants";

const WeatherAlerts = ({ alerts }) => (
	<View style={styles.alert}>
		{alerts.map((alert, i) => {
			return <Text style={styles.alertText} key={i}>{alert.event}</Text>
		})}
	</View>
);

WeatherAlerts.propTypes = {
	alerts: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
	alert: {
		backgroundColor: color.alertBackground,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: color.alertBorder,
		padding: 10,
		marginTop: 40,
		alignItems: "center",
	},
	alertText:{
		fontWeight: "bold",
		fontSize: 18,
		color: color.alertText
	}
});

export default WeatherAlerts;