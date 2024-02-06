import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/Screens/Navegacao/Navegacao";
import { Login } from "./src/Screens/Login/Login";
import { useFonts, MontserratAlternates_600SemiBold } from "@expo-google-fonts/montserrat-alternates";


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold
  })

  return (
    
    //container - envolve toda a estrutura de navegação
      //navigator - component para a navegação
        //tela - tela
          //name: nome da tela
          //component: componente que será chamado
          //options(title): titulo da tela

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Navegação" 
        component={Navegacao}
        options={{title:"Navegação"}}
        />
        <Stack.Screen
        name="Login" 
        component={Login}
        options={{title:"Login"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
