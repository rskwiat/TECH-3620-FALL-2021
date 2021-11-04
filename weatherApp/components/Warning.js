import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "../constants";

const Warning = ({ text }) => (
	<View style={styles.warning}>
		<Text style={styles.warningText}>{text}</Text>
	</View>
);

const styles = StyleSheet.create({
	warning: {
		backgroundColor: color.warningBackground,
		borderColor: color.warningBorder,
		borderWidth: 1,
		padding: 10,
		marginVertical: 20,
	},
	warningText: {
		color: color.warningText,
		fontSize: 14
	},
});

export default Warning;
