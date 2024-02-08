import { Button, View } from "react-native"

export const Navegacao = ({navigation}) =>{
    return(
        <View>
            <Button
                title="login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="RecSenha"
                onPress={() => navigation.navigate("RecSenha")}
            />
            <Button
                title="RedSenha"
                onPress={() => navigation.navigate("RedSenha")}
            />
            <Button
                title="Cadastro"
                onPress={() => navigation.navigate("Cadastro")}
            />
            <Button
                title="Verificacao"
                onPress={() => navigation.navigate("Verificacao")}
            />
            <Button
                title="PerfilPaciente"
                onPress={() => navigation.navigate("PerfilPaciente")}
            />
        </View>
    )
}