import React, { useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { Text } from "react-native-elements";
import Container from "./Container";
import WeatherAlerts from "./WeatherAlerts";
import WeatherDaily from "./WeatherDaily";
import WeatherHourly from "./WeatherHourly";
import WeatherIcon from "./WeatherIcon";
import { apis } from "../constants";
import keys from "../constants/keys";
import { imageBackground } from "../constants/utils";

import CloudyImage from "../assets/backgrounds/cloudy.jpg";
import RainImage from "../assets/backgrounds/raining.jpg";
import SnowImage from "../assets/backgrounds/snow.jpg";
import SunnyImage from "../assets/backgrounds/sunny.jpg";
import WindyImage from "../assets/backgrounds/windy.jpg";

const backgrounds = {
	CloudyImage,
	RainImage,
	SnowImage,
	SunnyImage,
	WindyImage,
};

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

	const bgi = imageBackground(weather[0].main);
	
	return (
		<ImageBackground source={backgrounds[bgi]} resizeMode="cover" style={styles.imageBackground}>
			<Container>
				<View style={styles.description}>
					<Text>Current Weather</Text>
					<Text h1 h1Style={styles.tempStyles}>{temp} &deg;F</Text>
					{weather && <WeatherIcon iconSize={42} weather={weather} showDescription />}
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
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		height: Dimensions.get("window").height,
	},
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
		paddingHorizontal: 10,
		backgroundColor: "rgba(255, 255, 255, .45)",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, .45)",
		borderStyle: "solid",
		borderRadius: 10,
	},
	infoBlockText: {
		fontSize: 16
	},
	tempStyles: {
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 65,
		fontWeight: 'bold',
	},
	feelsLikeStyles: {
		fontSize: 20,
		paddingTop: 20,
	},
})

export default Weather;