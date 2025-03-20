import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');
  const [n4, setN4] = useState('');
  const [resul, setResul] = useState('');
  const [error, setError] = useState('');

  const verificarNota = (nota) => {
    const notaNumerica = parseFloat(nota);
    return !isNaN(notaNumerica) && notaNumerica >= 0 && notaNumerica <= 10;
  }

  const calcularMedia = () => {
    if (!verificarNota(n1) || !verificarNota(n2) || !verificarNota(n3) || !verificarNota(n4)) {
      setError("As notas devem ser números válidos entre 0 e 10.");
      setResul('');
      return;
    }

    const r = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
    if (r >= 6) {
      setResul(`Média: ${r} - Aprovado`);
      setError('');
    } else {
      setResul(`Média: ${r} - Reprovado`);
      setError('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descubra se Passou de Ano ou Não:</Text>
      <Text style={styles.subtitle}>1° Nota</Text>
      <TextInput style={styles.input} value={n1} onChangeText={setN1} keyboardType="numeric" />
      <Text style={styles.subtitle}>2° Nota</Text>
      <TextInput style={styles.input} value={n2} onChangeText={setN2} keyboardType="numeric" />
      <Text style={styles.subtitle}>3° Nota</Text>
      <TextInput style={styles.input} value={n3} onChangeText={setN3} keyboardType="numeric" />
      <Text style={styles.subtitle}>4° Nota</Text>
      <TextInput style={styles.input} value={n4} onChangeText={setN4} keyboardType="numeric" />
      <Button title="Calcular" onPress={calcularMedia} />
      {error && <Text style={styles.error}>{error}</Text>}
      {resul && <Text style={[styles.resultado, resul.includes("Aprovado") ? styles.aprovado : styles.reprovado]}>{resul}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faebd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 55,
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 45,
    color: 'black', 
  },
  title: {
    fontSize: 40,
    marginBottom: 35,
  },
  subtitle: {
    fontSize: 30,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25,
  },
  aprovado: {
    color: 'green',
  },
  reprovado: {
    color: 'red',
  },
  error: {
    color: 'red',
    fontSize: 40,
    marginTop: 20,
  },
});
