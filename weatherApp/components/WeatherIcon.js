// cloud
// cloud-drizzle
// cloud-lightning
// cloud-rain
// cloud-snow
// sun
// wind
// moon

import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

const iconName = (value) => {
	switch (value) {
		case "Clouds":
			return "cloud";
		case "Rain":
			return "cloud-rain";
		case "Snow":
			return "cloud-snow";
		case "Windy":
			return "wind";
		default:
			return "sun";
	};
};

const WeatherIcon = ({ weather, description }) => (
	<View>
		{weather.map((w, i) => {
			const { main } = weather;
			const name = iconName(main);
			return (
				<View>
					<Icon name={name} type="feather" />
					{description && <Text key={i}>{w.description}</Text>}
				</View>
			);
		})}
	</View>
);

export default WeatherIcon;
