import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/Screens/Navegacao/Navegacao";
import { Login } from "./src/Screens/Login/Login";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates";
import {Quicksand_500Medium} from "@expo-google-fonts/quicksand";
import { RecSenha } from "./src/Screens/RecSenha/RecSenha";


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }

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
        <Stack.Screen
        name="RecSenha" 
        component={RecSenha}
        options={{title:"Recuperação de senha"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
