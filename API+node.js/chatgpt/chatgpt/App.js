import React, { useState, useRef, useEffect } from "react";
import { Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "./styles";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá! Sou o ChatGPT do Google AI Studio." }
  ]);
  const [input, setInput] = useState("");
  const scrollViewRef = useRef();

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("http://localhost:3000/chat", {
        messages: newMessages,
      });

      setMessages([...newMessages, { role: "assistant", content: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        { role: "assistant", content: "❌ Erro ao conectar com o servidor." }
      ]);
    }
  }

  // Scroll automático
  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} style={styles.chat}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={msg.role === "user" ? styles.userBubble : styles.assistantBubble}
          >
            <Text style={{ color: "#fff" }}>{msg.content}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#94a3b8"
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
