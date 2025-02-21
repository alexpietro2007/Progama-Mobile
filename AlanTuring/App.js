import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Texto}>
        <Text style={styles.Titulo}>Alan Turing   </Text>
        foi um matemático e criptógrafo inglês considerado atualmente como o pai da computação, uma vez que, por meio de suas ideias, foi possível desenvolver o que chamamos hoje de computador. Turing também ficou muito conhecido como um dos responsáveis por decifrar o código utilizado pelas comunicações nazistas durante a Segunda Guerra Mundial.
        Por meio do seu trabalho, foi desenvolvida uma máquina conhecida como “bomba eletromecânica” (The Bombe, em inglês), que decifrou o código da máquina Enigma utilizado pelos alemães, e permitiu que os Aliados tivessem acesso a informações privilegiadas ao longo da guerra. Turing morreu em 1954, provavelmente tendo cometido suicídio."
        Veja mais sobre "Alan Turing"
      </Text>
      <StatusBar style="auto" />
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
  Texto:{
    width: 400,
  },
  Titulo:{
    fontWeight: 'bold' ,
    fontSize: 15,
  }
});
