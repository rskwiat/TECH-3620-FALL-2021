import React from "react";
import { useSelector } from "react-redux";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import WeatherIcon from "./WeatherIcon";
import { convertToDay, renderTempDegrees } from "../constants/utils";

const WeatherDaily =  ({ daily }) => {
	const useFahrenheit = useSelector((state) => state.weather.fahrenheit);
	const degrees = renderTempDegrees(useFahrenheit);

	return (
		<View style={styles.daily}>
			<Text style={styles.dailyHeader}>Daily Forecast</Text>
			<ScrollView>
				{daily.map((d, i) => {
					const { dt, temp, weather } = d;
					const dateOfDaytheWeek = new Date(dt * 1000).getDay();
					const day = convertToDay(dateOfDaytheWeek);
					return (
						<View key={i} style={styles.dailyRow}>
							<Text style={styles.dailyRowHeader}>{day}</Text>
							<View style={styles.dailyIconRow}>
								{weather && <WeatherIcon weather={weather} iconSize={20} />}
								<Text style={styles.dailyRowTemp}>
									{temp.min}&deg;{degrees} / {temp.max}&deg;{degrees}
								</Text>
							</View>
						</View>
					);
				})}
			</ScrollView>
		</View>
	)
};

const styles = StyleSheet.create({
	daily: {
		marginTop: 20,
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: "rgba(255, 255, 255, .45)",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, .45)",
		borderStyle: "solid",
		borderRadius: 10,
	},
	dailyHeader: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 10,
	},
	dailyRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 15,
	},
	dailyIconRow: {
		flexDirection: "row",
	},
	dailyRowHeader: {
		fontSize: 15,
		fontWeight: "bold",
	},
	dailyRowTemp: {
		marginLeft: 15,
		fontSize: 15,
	}
})

export default WeatherDaily;
