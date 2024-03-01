import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { HomeU } from '../HomeU/Home';
import { PerfilPaciente } from '../PerfilPaciente/PerfilPaciente';
import { ButtonFooter } from '../../Components/ButtonFooter/ButtonFooter';

const Tab = createBottomTabNavigator();

export function Main() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarActiveTintColor: "#607EC5",
                tabBarInactiveTintColor: "#4E4B59",
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: "Quicksand_500Medium"
                },
                headerShown: false,
            }}
            initialRouteName='Home'
            backBehavior='initialRoute'
            detachInactiveScreens={true}
        >
            <Tab.Screen name="Agenda" component={HomeU} options={{
                tabBarIcon:
                    ({ focused }) => (
                        <ButtonFooter
                            selected={focused}
                            isPerfil={false}
                            title={"Agenda"}
                        />
                    ),
                tabBarLabelStyle: { color: 'transparent' }
            }} />
            <Tab.Screen name="Perfil" component={PerfilPaciente} options={{
                tabBarIcon:
                    ({ focused, name }) => (
                        <ButtonFooter
                            selected={focused}
                            isPerfil={true}
                            title={"Perfil"}
                        />
                    ),
                tabBarLabelStyle: { color: 'transparent' }
            }} />
        </Tab.Navigator>
    );
}