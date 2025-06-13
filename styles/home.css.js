import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#111216",
  },
  logo: {
    backgroundColor: "#111216",
    width: 300,
    height: 50,
    marginTop: 70,
  },
  museu: {
    height: 150,
    width: 150,
    marginTop: 100,
  },
  button: {
    width: 250,
    height: 75,
    borderColor: "#69E1F5",
    borderRadius: 50,
    marginTop: 70,  // use com cuidado
    borderWidth: 2,  // para borda aparecer, defina a largura da borda
    justifyContent: 'center', // para centralizar o texto verticalmente
    alignItems: 'center',     // para centralizar o texto horizontalmente
  },
  menu: {
    fontSize: 45,
    color: "#fff",
    fontFamily: "Hubballi",
  },
  cog: {
    position: "absolute",
    top: 725,
    left: 0,
  },
  predio: {
    position: "absolute",
    top: 692,
    right: 0
  },
});