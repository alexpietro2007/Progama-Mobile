import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import styles from '../styles/home.css';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Image source={require("../assets/museu.png")} style={styles.museu}/>
      <Pressable onPress={console.log("clicou")} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed,]}><Text style={styles.menu}>Menu</Text></Pressable>
      <Image source={require("../assets/cog.png")} style={styles.cog}></Image>
      <Image source={require("../assets/predio.png")} style={styles.predio}></Image>
    </View>
  );
}