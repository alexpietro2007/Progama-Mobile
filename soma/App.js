import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resul, setResul] = useState('');

  const somar = () => {
    const r = parseInt(n1) + parseInt(n2);
    setResul(r.toString());
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Somando dois Valores</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.subtitle}>Primeiro Número</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={n1}
          onChangeText={setN1}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Segundo Valor</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={n2}
          onChangeText={setN2}
        />
      </View>
      <Button title="Somar" onPress={somar}/>
      {resul !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Resultado: {resul}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: 35,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 500,
    height: 50,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 55,
  },
  resultContainer: {
    marginTop: 20,
  },
  result: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'green',
  },
});
