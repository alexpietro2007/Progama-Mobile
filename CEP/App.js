import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import styles from "./style/home.css";

export default function Form() {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState(null); // guarda os dados preenchidos + resultado da API

  const handleSubmit = async () => {
    try {
      // Chamada à API ViaCEP
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      if (response.data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      // Monta objeto final com os dados digitados + endereço do ViaCEP
      setDados({
        nome,
        nascimento,
        estadoCivil,
        cep,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        uf: response.data.uf,
      });
    } catch (error) {
      alert("Erro ao buscar o CEP!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      {/* Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Nascimento */}
      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder="DD/MM/AAAA"
        value={nascimento}
        onChangeText={setNascimento}
      />

      {/* Estado Civil */}
      <Text style={styles.label}>Estado Civil</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={estadoCivil}
          onValueChange={(itemValue) => setEstadoCivil(itemValue)}
        >
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Solteiro(a)" value="solteiro" />
          <Picker.Item label="Casado(a)" value="casado" />
          <Picker.Item label="Divorciado(a)" value="divorciado" />
          <Picker.Item label="Viúvo(a)" value="viuvo" />
        </Picker>
      </View>

      {/* CEP */}
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="00000-000"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />

      {/* Botão */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar</Text>
      </Pressable>

      {/* Exibe resultado */}
      {dados && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Dados Inseridos:</Text>
          <Text>📛 Nome: {dados.nome}</Text>
          <Text>🎂 Nascimento: {dados.nascimento}</Text>
          <Text>💍 Estado Civil: {dados.estadoCivil}</Text>
          <Text>📮 CEP: {dados.cep}</Text>

          <Text style={styles.resultTitle}>Endereço (ViaCEP):</Text>
          <Text>🏠 Logradouro: {dados.logradouro}</Text>
          <Text>📍 Bairro: {dados.bairro}</Text>
          <Text>🏙️ Cidade: {dados.cidade}</Text>
          <Text>🗺️ UF: {dados.uf}</Text>
        </View>
      )}
    </ScrollView>
  );
}
