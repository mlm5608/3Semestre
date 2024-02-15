import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/Screens/Navegacao/Navegacao";
import { Login } from "./src/Screens/Login/Login";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates";
import {Quicksand_500Medium, Quicksand_600SemiBold} from "@expo-google-fonts/quicksand";
import { RecSenha } from "./src/Screens/RecSenha/RecSenha";
import { RedSenha } from "./src/Screens/RedSenha/RedSenha";
import { Cadastro } from "./src/Screens/Cadastro/Cadastro";
import { Verificacao } from "./src/Screens/Verificacao/Verificacao";
import { PerfilPaciente } from "./src/Screens/PerfilPaciente/PerfilPaciente";
import { Prontuario } from "./src/Screens/Protuario/Prontuario";
import { HomeMedico } from "./src/Screens/HomeMedico/HomeMedico";


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold
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
        <Stack.Screen
        name="RedSenha" 
        component={RedSenha}
        options={{title:"Redefinição de senha"}}
        />
        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title:"Cadastro de usuario"}}
        />
        <Stack.Screen
        name="Verificacao"
        component={Verificacao}
        options={{title:"Verificação de email"}}
        />
        <Stack.Screen
        name="PerfilPaciente"
        component={PerfilPaciente}
        options={{title:"Tela de perfil Paciente"}}
        />
        <Stack.Screen
        name="Prontuario"
        component={Prontuario}
        options={{title:"Tela de Protuário"}}
        />
        <Stack.Screen
        name="HomeMedico"
        component={HomeMedico}
        options={{title:"Tela de Home do Medico"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
