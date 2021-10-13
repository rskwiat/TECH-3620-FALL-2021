import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import {
  Text,
  Button,
  Header,
} from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import { urls, color } from "../constants";
import HeaderIconButton from "../components/HeaderIconButton";
import Container from "../components/Container";

const SettingsScreen = ({ navigation }) => (
  <View>
    <Header
      leftComponent={
        <HeaderIconButton
          name="chevron-left"
          color={color.white}
          size={25}
          onPress={() => navigation.navigate("Home")}
        />
      }
      centerComponent={{ 
        text: "Settings", 
        style: { 
          color: color.white, 
          fontSize: 18
        }
      }}
      containerStyle={styles.headerBar}
    />
    
    <Text>Open Weather</Text>
    <Button 
      title="Open Weather Map" 
      onPress={() => WebBrowser.openBrowserAsync(urls.weather)}
    />

    <Text>Open Street Map</Text>
    <Button   
      title="Open Street Map" 
      onPress={() => WebBrowser.openBrowserAsync(urls.maps)}
    />
  </View> 
);

const styles = StyleSheet.create({
  headerBar: {
    marginBottom: 20,
  }
})

export default SettingsScreen;
