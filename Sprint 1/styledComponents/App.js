import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container, Div, DivBtns } from './src/components/Container/Container';
import { Title, TitleBtn } from './src/components/Title/Title';
import { BtnDecrement, BtnIncrement } from './src/components/Btn\'s/Btns';

export default function App() {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }else{
      alert("Não é possível o contador ser menor que 0")
    }
    
  }

  useEffect(() => {
    console.warn(`Contador atualizado para: ${count}`)
  }, [count])

  return (
    <Container source={require('./assets/f.webp')}>
        <Div>
          <Title>Contador:</Title>
          <Title>{count}</Title>
          <DivBtns >

            <BtnIncrement onPress={increment}>

              <TitleBtn>Incrementar</TitleBtn>

            </BtnIncrement>

            <BtnDecrement onPress={decrement}>

              <TitleBtn>Decrementar</TitleBtn>

            </BtnDecrement>

          </DivBtns>

          <StatusBar style="auto" />

        </Div>
    </Container>
  );
}
