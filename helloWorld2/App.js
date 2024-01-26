import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* imagem */}
      <Image
        style={styles.imagem}
        source={{
          uri: 'https://cdn.ome.lt/WGgEhHRE4VMczZJK2P1NSUqcwaA=/1200x630/smart/extras/conteudos/god-of-war-home-1200.jpg'
        }}
      />

      <Text style={styles.text}>HELLO WORLD !</Text>

      <TextInput
        style={styles.input}
        defaultValue='exemplo de input'
      />

      <TouchableOpacity style={styles.button} onPress = {() => alert("Clicado!!") }> 
        <Text style={styles.textButton}> Clica aqui </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },

  text:{
    color:'black',
    fontSize: 20,
  },

  input:{
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
  },

  imagem:{
    width: 100,
    height: 100,
    borderRadius: 30,
  },

  button:{
    height: 80,
    width: 200, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderWidth: 1, 
  },

  textButton:{
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: '500',
    fontSize: 24
  }
});