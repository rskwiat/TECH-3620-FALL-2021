import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = ({ loadingData }) => {
	const pageStyles = loadingData ? styles.loadingData : styles.loadingView;
	return (
		<View style={pageStyles}>
			<ActivityIndicator size="large" />
		</View>
	);
};

const styles = StyleSheet.create({
	loadingView: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	loadingData: {
		marginTop: 80,
	}
})

export default LoadingScreen;
