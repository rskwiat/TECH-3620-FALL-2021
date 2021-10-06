import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import {
  Text,
  Button,
  Header
} from "react-native-elements";
import * as WebBrowser from "expo-web-browser";

const SettingsScreen = () => (
  <View>
    <Header
      centerComponent={{ 
        text: "Settings", 
        style: { 
          color: '#fff', 
          fontSize: 18
        }
      }}
      containerStyle={styles.headerBar}
    />
    <Text>Settings Screen</Text>
    <Button 
      title="Click Me" 
      onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
    />
  </View> 
);

const styles = StyleSheet.create({
  headerBar: {
    marginBottom: 20,
  }
})

export default SettingsScreen;
