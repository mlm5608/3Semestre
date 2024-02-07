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
        </View>
    )
}