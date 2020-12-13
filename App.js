import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cat from "./src/component/Cat"
import Topbar from "./src/component/Topbar"
import BottomNavigation from "./src/component/BottomNavigation"
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Marius NIEMET!</Text>
      <StatusBar style="auto" />
      <Topbar />
      <Cat />
      <BottomNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
});
