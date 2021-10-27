// Starting template of the ErrorScreen this is just a way to show an error to the user if they did not share the correct permissions for location and we will be displaying some dummy data here. 

//There will be no way to navigate to this screen.

import React from "react";
import { View, ImageBackground, StyleSheet, Linking } from "react-native"; 
import { Header, Text, Button } from "react-native-elements";

import Container from "../components/Container";
import { color } from "../constants";
import ErrorScreenBackground from "../assets/ErrorScreenBackground.jpg";

const ErrorScreen = () => (
  <>
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

      <View style={styles.warning}>
        <Text style={styles.warningText}>
          This application uses your location to serve the most reliable information for you. We do not track or read any other information from your device. Please enable Location Services in Settings.
        </Text>
      </View>
      <Button title="Open Settings" onPress={() => Linking.openSettings()} />
    </Container>
    </ImageBackground>

  </>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  warningHeader: {
    backgroundColor: color.white,
    borderBottomColor: color.black,
  },
  warning: {
    backgroundColor: color.warningBackground,
    borderColor: color.warningBorder,
    borderWidth: 1,
    padding: 15,
    marginVertical: 20,
  },
  warningText: {
    fontSize: 15,
    lineHeight: 20,
    color: color.warningText,
  }
});

export default ErrorScreen;
