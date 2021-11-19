export const convertToDay = (date) => {
	switch (date) {
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}
};

export const iconName = (name) => {
	switch (name) {
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
	}
};

export const imageBackground = (name) => {
	switch (name) {
		case "Clouds":
			return "CloudyImage";
		case "Rain":
			return "RainImage";
		case "Snow":
			return "SnowImage";
		case "Windy":
			return "WindyImage";
		default:
			return "SunnyImage";
	}
};