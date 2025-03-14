import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [resul, setResul] = useState();

  const somar = ()=>{
    const r = parseInt(n1) + parseInt(n2);
    setResul(r)
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Somando dois Valores
        </Text>
      </View>
      <View>
        <Text style=>Primeiro Número</Text>
      </View>
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
});
