import React from "react";
import { ImageBackground, StyleSheet, Linking } from "react-native"; 
import { Header, Button } from "react-native-elements";

import Container from "../components/Container";
import Warning from "../components/Warning";
import { color } from "../constants";
import ErrorScreenBackground from "../assets/ErrorScreenBackground.jpg";

const ErrorScreen = () => (
  <ImageBackground source={ErrorScreenBackground} resizeMode="cover" style={styles.image}>
    <Header
      centerComponent={{ 
        text: "Error", 
        style: { 
          color: color.black, 
          fontSize: 18
        }
      }}
      containerStyle={styles.warningHeader}
    />

    <Container>
      <Warning text="This application uses your location to serve the most reliable information for you. We do not track or read any other information from your device. Please enable Location Services in Settings." />
      <Button title="Open Settings" onPress={() => Linking.openSettings()} />
    </Container>
  </ImageBackground>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  warningHeader: {
    backgroundColor: color.white,
    borderBottomColor: color.black,
  },
});

export default ErrorScreen;
