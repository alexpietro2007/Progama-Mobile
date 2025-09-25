import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 10,
    minHeight: "100vh",
  },
  chat: {
    flex: 1,
    marginBottom: 10,
    maxHeight: "80vh",
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#1e3a8a",
    padding: 12,
    marginVertical: 5,
    borderRadius: 20,
    maxWidth: "70%",
    color: "#fff",
  },
  assistantBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#334155",
    padding: 12,
    marginVertical: 5,
    borderRadius: 20,
    maxWidth: "70%",
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "#1e293b",
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#334155",
    marginRight: 5,
    color: "#fff",
  },
  button: {
    backgroundColor: "#0ea5e9",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
