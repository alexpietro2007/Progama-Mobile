import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen')

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image source={require('./assets/Alan_Turing_az_1930-as_években.jpg')} style={styles.image} />
        <Text style={styles.title}>Alan Turing</Text>
        <Text style={styles.subtitle}>O Pai da Computação</Text>
      </View>

      {/* Conteúdo */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Alan Mathison Turing (Londres, 23 de junho de 1912 — Wilmslow, Cheshire, 7 de junho de 1954) foi um matemático,
          cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente
          no desenvolvimento da moderna ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo
          e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente
          considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações, ele nunca foi
          totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi
          coberto pela Lei de Segredos Oficiais.
        </Text>

        <Text style={styles.text}>
          Durante a Segunda Guerra Mundial, Turing trabalhou para a Escola de Código e Cifras do Governo (GC&CS) em Bletchley Park,
          o centro britânico de criptoanálise. Por um tempo, ele liderou a Hut 8, a seção responsável pela análise criptográfica
          naval alemã. Lá, desenvolveu várias técnicas para acelerar a quebra das cifras alemãs, incluindo melhorias no método de
          bombardeio polonês antes da guerra, bem como uma máquina eletromecânica que poderia encontrar configurações para a máquina Enigma.
          Seu trabalho ajudou a encurtar a guerra em mais de dois anos e salvou milhões de vidas.
        </Text>

        <Text style={styles.text}>
          Após a guerra, Turing trabalhou no Laboratório Nacional de Física, onde projetou o Mecanismo de Computação Automática,
          um dos primeiros projetos para um computador de programa armazenado. Em 1948, ingressou no Laboratório de Máquinas de Computação
          de Max Newman, na Victoria University de Manchester, onde ajudou a desenvolver os computadores de Manchester e se interessou
          por biologia matemática.
        </Text>

        <Text style={styles.text}>
          Em 1952, Turing foi processado judicialmente por atos homossexuais e condenado a um tratamento de castração química.
          Ele morreu em 1954, aos 41 anos, por envenenamento por cianeto. Décadas depois, em 2009, o governo britânico pediu desculpas
          oficiais pelo tratamento dado a Turing, e em 2013 ele recebeu um perdão póstumo da Rainha Elizabeth II.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#2c3e50',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '#fff',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  subtitle: {
    fontSize: width * 0.02,
    color: '#ecf0f1',
    fontStyle: 'italic',
  },
  textContainer: {
    padding: 20,
  },
  text: {
    fontSize: width * 0.07,
    color: '#333',
    textAlign: 'justify',
    lineHeight: width * 0.09,
    marginBottom: 40,
  },
});
