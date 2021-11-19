import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import WeatherIcon from "./WeatherIcon";
import { convertToDay } from "../constants/utils";

const WeatherDaily =  ({ daily }) => (
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
								{temp.min}&deg;F / {temp.max}&deg;F
							</Text>
						</View>
					</View>
				);
			})}
		</ScrollView>
	</View>
);

const styles = StyleSheet.create({
	daily: {
		marginTop: 20,
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
