import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
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

	const { hourly, daily } = data;

	return (
		<Container>
			<View>
				<Text h1>{data.current.temp}</Text>
				<Text h3>{data.current.feels_like}</Text>
			</View>

			<ScrollView horizontal>
			{hourly.map((hour, i) => {
				return <Text key={i}>{hour.feels_like}</Text>
			})}
			</ScrollView>

			<ScrollView>
			{daily.map((dail, i) => {
				return <Text key={i}>{dail.temp.day}</Text>
			})}
			</ScrollView>

		</Container>
	);
};

export default Weather;
