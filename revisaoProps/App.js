import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/person/Person';
import Game from './src/components/game/Game';
import { useFonts, Poppins_300Light } from '@expo-google-fonts/poppins';
import { SingleDay_400Regular } from '@expo-google-fonts/single-day';


export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    SingleDay_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const peopleList = [
    { id: 1, name: 'miguel', age: '17' },
    { id: 2, name: 'walter', age: '63' },
    { id: 3, name: 'clebin', age: '20' }
  ]
  const gameList = [
    { id: 1, name: 'GTA5', value: '$150,00', stars: '4,8' },
    { id: 2, name: 'Ea FC 24', value: '$250,00', stars: '4,3' },
    { id: 3, name: 'Valorant', value: 'free', stars: '4,0' }
  ]

  return (
    <SafeAreaView>

      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Person name={item.name} age={item.age} />
        )}
      />

      <FlatList
        data={gameList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Game name={item.name} value={item.value} stars={item.stars} />
        )}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

