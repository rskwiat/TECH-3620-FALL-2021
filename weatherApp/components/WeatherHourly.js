import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import WeatherIcon from "./WeatherIcon";
import { renderTempDegrees } from "../constants/utils";

const WeatherHourly =  ({ hourly }) => {
	const useFahrenheit = useSelector((state) => state.weather.fahrenheit);
	const degrees = renderTempDegrees(useFahrenheit);

	return (
		<View style={styles.hourly}>
			<Text style={styles.hourlyHeader}>Hourly Forecast</Text>
			<ScrollView horizontal>
			{hourly.map((hour, i) => {
				const { weather, feels_like } = hour; 
				return (
					<View key={i} style={styles.hourView}>
						{weather && <WeatherIcon weather={weather} iconSize={26} />}
						<Text style={styles.hourRowTemp}>{feels_like}&deg;{degrees}</Text>
					</View>
				);
			})}
			</ScrollView>
		</View>
	)
};

const styles = StyleSheet.create({
	hourly: {
		marginTop: 20,
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: "rgba(255, 255, 255, .45)",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, .45)",
		borderStyle: "solid",
		borderRadius: 10,
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
