import React, { useState, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from "../assets/One.png";
import DiceTwo from "../assets/Two.png";
import DiceThree from "../assets/Three.png";
import DiceFour from "../assets/Four.png";
import DiceFive from "../assets/Five.png";
import DiceSix from "../assets/Six.png";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {

  const diceAnimations = useRef(new Animated.Value(0)).current;
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    // Animate dice rolling
    Animated.sequence([
      Animated.timing(diceAnimations, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.delay(200),
      Animated.timing(diceAnimations, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();

    // Update dice image after animation completes
    setTimeout(() => {
      switch (randomNumber) {
        case 1:
          setDiceImg(DiceOne);
          break;
        case 2:
          setDiceImg(DiceTwo);
          break;
        case 3:
          setDiceImg(DiceThree);
          break;
        case 4:
          setDiceImg(DiceFour);
          break;
        case 5:
          setDiceImg(DiceFive);
          break;
        case 6:
          setDiceImg(DiceSix);
          break;
        default:
          setDiceImg(DiceOne);
          break;
      }
    }, 1200);

    ReactNativeHapticFeedback.trigger("impactLight", options);
  };

  const diceRotation = diceAnimations.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF2F2" barStyle="dark-content" />
      <Animated.View style={[styles.diceContainer, { transform: [{ rotate: diceRotation }] }]}>
        <Dice imageUrl={diceImg} />
      </Animated.View>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
