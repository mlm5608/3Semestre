import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const logIn = () =>{
    alert("formulário enviado!!")
    setEmail("")
    setSenha("")
  }
  return (
    <View style={styles.container}>

      <LinearGradient
        colors={['#A2FDDC', '#2284AE']}
        style={styles.background}
      />

      <View style={styles.box}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://w7.pngwing.com/pngs/972/761/png-transparent-stethoscope-medicine-nursing-health-care-physician-health-blue-logo-medical-care.png',
          }}
        />

        <View style={styles.textBox}>
          <Text style={styles.Text}>Bem vindo!</Text>
          <Text style={styles.Text}>Faça seu login!</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.textInput}> Email: </Text>
          <TextInput style={styles.input} placeholder='Digite seu email' value={email} onChangeText={() => {setEmail()}} />
          <Text style={styles.textInput}> Senha: </Text>
          <TextInput style={styles.input} placeholder='Digite sua senha' value={senha} onChangeText={() => {setSenha()}} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => {logIn()}}>
          <Text style={styles.textButton}> enviar </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: '100%',
    alignItems: 'center',
    padding: 60
  },

  textBox: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 25,
  },

  inputBox: {
    width: '100%',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%'
  },

  logo: {
    height: 150,
    width: 150,
    borderRadius: 85,
    marginBottom: 30,
  },

  Text: {
    color: 'white',
    fontSize: 30,
  },

  input: {
    width: 270,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingLeft: 10
  },

  textInput: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },

  button: {
    height: 45,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5CCDDD',
    marginTop: 30,
  },

  textButton: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 20
  }
});
