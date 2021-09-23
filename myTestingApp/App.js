import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from "./components/Header";

export default function App() {
  const onPress = () => {
    console.log("button Press")
  }

  return (
    <View>
      <Header text="Hello World" />
      <Text>Open up App.js to start working on your app!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>My Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  button: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#3498DB",
    borderRadius: 10,
    marginTop: 20,
  }
});
