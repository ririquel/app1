import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { request } from './src/location_request';

const App = () => {
  const help = () => {
    console.log("help");
    request()
  }
  return (
    <View style={styles.center}>
      <Text>Alert-SOS</Text>
      <Button onPress={help} title='help'>AYUDA</Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  center: { alignItems: 'center', justifyContent: "center", flex: 1 }
})
