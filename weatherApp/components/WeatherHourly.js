import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import WeatherIcon from "./WeatherIcon";

const WeatherHourly =  ({ hourly }) => (
	<View style={styles.hourly}>
		<Text style={styles.hourlyHeader}>Hourly Forecast</Text>
		<ScrollView horizontal>
		{hourly.map((hour, i) => {
			const { weather, feels_like } = hour; 
			return (
				<View key={i} style={styles.hourView}>
					{weather && <WeatherIcon weather={weather} iconSize={26} />}
					<Text style={styles.hourRowTemp}>{feels_like}&deg;F</Text>
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
		marginBottom: 15,
	},
	hourView: {
		marginRight: 10,
	},
	hourRowTemp: {
		paddingTop: 10,
		fontSize: 15,
	}
});

export default WeatherHourly;
