import React from "react";
import { Container, LeftIcon } from "../components";
import {
  Text,
  Header,
  Button,
} from "react-native-elements";
import { StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";


const SettingsScreen = ({ navigation }) => {
  return (
    <>
      <Header
        leftComponent={
          <LeftIcon navigation={navigation} navigateTo="Home" />
        }
        centerComponent={{  
          text: 'Settings', 
          style: styles.headerText
        }}
        containerStyle={styles.headerBar}
      />
    <Container>
      <View style={styles.infoBlock}>
        <Text h4 h4Style={styles.h4Text}>Open Weather Map</Text>
        <Text style={styles.text}>Weather Data supplied by Open Weather Map. Make one API call and get current, forecast and historical weather data.</Text>
        <Button
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          title="Learn More"
          onPress={() => WebBrowser.openBrowserAsync("https://openweathermap.org/about-us")}
        />
      </View>


      <View style={styles.infoBlock}>
        <Text h4 h4Style={styles.h4Text}>Location Data</Text>
        <Text style={styles.text}>Location Data supplied by OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright</Text>
        <Button
          containerStyle={styles.button}
          titleStyle={styles.buttonText}
          title="Learn More"
          onPress={() => WebBrowser.openBrowserAsync("https://www.openstreetmap.org/about")}
        />
      </View>



    </Container>
  </>
  )
};

const styles = StyleSheet.create({
  button: {
    width: 200,
  },
  buttonText: {
    margin: 5
  },
  headerText: { 
    color: '#fff',
    fontSize: 18  
  },
  headerBar: {
    marginBottom: 20
  },
  h4Text: {
    marginBottom: 10
  },
  text: {
    marginBottom: 20,
  },
  infoBlock: {
    marginBottom: 20
  }
})

export default SettingsScreen;