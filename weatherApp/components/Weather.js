import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Container from "./Container";
import keys from "../constants/keys";

const Weather = ({ latitude, longitude }) => {
	if (!longitude || !latitude) return null;
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchWeather = async () => {
			const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=imperial&appid=${keys.appId}`);
			const response = await res.json();
			setData(response);
		};

		fetchWeather();
	}, []);

	if (!data) return null;

	return (
		<Container>
			<View>
				<Text h1>{data.current.temp}</Text>
				<Text h3>{data.current.feels_like}</Text>
			</View>
		</Container>
	);
};

export default Weather;
