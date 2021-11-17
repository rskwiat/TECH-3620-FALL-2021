import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const WeatherHourly =  ({ hourly }) => (
	<View style={styles.hourly}>
		<Text style={styles.hourlyHeader}>Hourly Forecast</Text>
		<ScrollView horizontal>
		{hourly.map((hour, i) => {
			return (
				<View key={i} style={styles.hourView}>
					<Text style={styles.hourRowTemp}>{hour.feels_like}&deg;F</Text>
				</View>
			);
		})}
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	hourly: {
		marginTop: 20,
	},
	hourlyHeader: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	hourView: {
		marginRight: 10,
	},
	hourRowTemp: {
		paddingTop: 15,
		fontSize: 15,
	}
});

export default WeatherHourly;
