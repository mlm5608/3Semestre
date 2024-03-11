import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado para: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>Contador: {count}</Text>
        <TouchableOpacity onPress={increment} style={styles.buttonUp}>
          <Text style={styles.textButton}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.buttonDown}>
          <Text style={styles.textButton}>Decrementar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
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
  container2: {
    height:'50%',
    width: '80%',
    backgroundColor: '#c1c1c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:20,
    textTransform: 'capitalize'
  },
  textButton: {
    fontSize:14,
    textTransform: 'uppercase'
  },
  buttonUp: {
    marginTop: 15,
    height: 80,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17fcf5',
    padding: 10,
    borderWidth: 1,
  },
  buttonDown: {
    marginTop: 15,
    height: 80,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f76d16',
    padding: 10,
    borderWidth: 1,
  },
});