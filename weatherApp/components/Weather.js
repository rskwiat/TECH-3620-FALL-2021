import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Container from "./Container";
import WeatherAlerts from "./WeatherAlerts";
import WeatherDaily from "./WeatherDaily";
import WeatherHourly from "./WeatherHourly";
import { apis } from "../constants";
import keys from "../constants/keys";

const Weather = ({ longitude, latitude }) => {
	if (!longitude || !latitude) return null;
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const res = await fetch(`${apis.weather}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${keys.appId}&units=imperial&exclude=minutely`, { method: "GET" });
			const response = await res.json();
			setData(response);
		};

		fetchWeather();
	}, [longitude,  latitude]);

	if (!data || !data.current) return null;

	const { temp, feels_like, humidity, uvi, wind_speed, weather } = data.current;
	const { daily, hourly, alerts } = data;
	
	return (
		<Container>
			<View style={styles.description}>
				<Text>Current Weather</Text>
				<Text h1 h1Style={styles.tempStyles}>{temp} &deg;F</Text>
				{weather.map((w, i) => {
					return <Text key={i}>{w.description}</Text>
				})}
				<Text h3 h3Style={styles.feelsLikeStyles}>Feels Like: {feels_like}&deg;F</Text>
			</View>
			{alerts && <WeatherAlerts alerts={alerts} />}
			<View style={styles.infoBlock}>
				<Text style={styles.infoBlockText}>Wind Speed: {wind_speed}</Text>
				<Text style={styles.infoBlockText}>Humidity: {humidity}%</Text>
				<Text style={styles.infoBlockText}>UV Index: {uvi}</Text>
			</View>
			<WeatherHourly hourly={hourly} />
			<WeatherDaily daily={daily} />
		</Container>
	);
};

const styles = StyleSheet.create({
	description: {
		marginTop: 40,
		flexDirection: "column",
		alignItems: "center",
	},
	infoBlock: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 40,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderWidth: 1,
		borderColor: "#000",
		borderStyle: "solid"
	},
	infoBlockText: {
		fontSize: 16
	},
	tempStyles: {
		paddingVertical: 30,
		fontSize: 65,
		fontWeight: 'bold',
	},
	feelsLikeStyles: {
		fontSize: 20,
		paddingTop: 20,
	},
})

export default Weather;