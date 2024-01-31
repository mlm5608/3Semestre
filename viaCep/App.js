import { StatusBar } from 'react-native';
import {Roboto_500Medium, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'
import { ContainerApp } from './style';
import { Header } from './src/Components/Header';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerApp>
      <StatusBar backgroundColor='#FECC2B' />

      {/* HEADER */}
      <Header/>
      {/* HOMESCREEN */}
    </ContainerApp>
  );
}
