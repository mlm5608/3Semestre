import { StatusBar } from 'react-native';
import {Roboto_500Medium, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'
import { ContainerApp } from './style';
import { Header } from './src/Components/Header';
import { Home } from './src/screens/Home';

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
      <StatusBar 
      backgroundColor='#FECC2B' 
      barStyle='default'
      translucent
      />

      {/* HEADER */}
      <Header/>
      {/* HOMESCREEN */}
      <Home/>
    </ContainerApp>
  );
}
