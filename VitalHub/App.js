import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/Screens/Login/Login";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold } from "@expo-google-fonts/montserrat-alternates";
import { Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { RecSenha } from "./src/Screens/RecSenha/RecSenha";
import { RedSenha } from "./src/Screens/RedSenha/RedSenha";
import { Cadastro } from "./src/Screens/Cadastro/Cadastro";
import { Verificacao } from "./src/Screens/Verificacao/Verificacao";
import { Prontuario } from "./src/Screens/ProtuarioMedico/Prontuario";
import { ClinicSelect } from "./src/Screens/ClinicSelect/ClinicSelect";
import { MedicSelect } from "./src/Screens/MedicSelect/MedicSelect";
import { DateSelect } from "./src/Screens/DateSelect/DateSelect";
import { LocalConsulta } from "./src/Screens/LocalConsulta/LocalConsulta";
import { ProntuarioPaciente } from "./src/Screens/ProntuarioPaciente/ProntuarioPaciente";
import { HomeU } from "./src/Screens/HomeU/Home";
import { Main } from "./src/Screens/Main/Main"

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
    MontserratAlternates_700Bold
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
          name="Main"
          component={Main}
          options={{ title: "Main", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="RecSenha"
          component={RecSenha}
          options={{ title: "Recuperação de senha", headerShown: false }}
        />
        <Stack.Screen
          name="RedSenha"
          component={RedSenha}
          options={{ title: "Redefinição de senha", headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro de usuario", headerShown: false }}
        />
        <Stack.Screen
          name="Verificacao"
          component={Verificacao}
          options={{ title: "Verificação de email", headerShown: false }}
        />
        <Stack.Screen
          name="Prontuario"
          component={Prontuario}
          options={{ title: "Protuário", headerShown: false }}
        />



        <Stack.Screen
          name="Home"
          component={HomeU}
          options={{ title: "Tela Home", headerShown: false }}
        />

        <Stack.Screen
          name="ClinicSelect"
          component={ClinicSelect}
          options={{ title: "Seleção de Clinica", headerShown: false }}
        />
        <Stack.Screen
          name="MedicSelect"
          component={MedicSelect}
          options={{ title: "Seleção de Médico", headerShown: false }}
        />
        <Stack.Screen
          name="DateSelect"
          component={DateSelect}
          options={{ title: "Seleção de data", headerShown: false }}
        />
        <Stack.Screen
          name="LocalConsulta"
          component={LocalConsulta}
          options={{ title: "Local da consulta", headerShown: false }}
        />
        <Stack.Screen
          name="ProntuarioPaciente"
          component={ProntuarioPaciente}
          options={{ title: "ProntuarioPaciente", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
