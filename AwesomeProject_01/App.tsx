import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'


function App(): JSX.Element {

  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>Hello World!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  darkText: {
    color: "black",
    fontSize: 30,
  },

  lightText: {
    color: "white",
    fontSize: 30,
  }
})

export default App;