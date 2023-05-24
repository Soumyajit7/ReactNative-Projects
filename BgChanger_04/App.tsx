import React, { useState } from 'react'

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'


export default function App() {

  const [bgColor, setBgColor] = useState("#fff");

  const generateBgCOlor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; ++i) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }
    setBgColor(color);
  }

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
        <View>
          <TouchableOpacity onPress={generateBgCOlor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press Me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionBtn: {
    borderRadius: 10,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },

  actionBtnTxt: {
    fontSize: 20,
    color: '#fff',
  }
})