import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Topbar = () => {
  return (
    <View style={styles.container}>
        <Text>Hello, I am your Top Bar!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      color: 'red',
      backgroundColor: 'red'
    },
  });
export default Topbar;