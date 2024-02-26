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
            <Button
                title="Prontuario"
                onPress={() => navigation.navigate("Prontuario")}
            />
            <Button
                title="HomeMedico"
                onPress={() => navigation.navigate("HomeMedico")}
            />
            <Button
                title="HomePaciente"
                onPress={() => navigation.navigate("HomePaciente")}
            />
            <Button
                title="ClinicSelect"
                onPress={() => navigation.navigate("ClinicSelect")}
            />
            <Button
                title="MedicSelect"
                onPress={() => navigation.navigate("MedicSelect")}
            />
            <Button
                title="DateSelect"
                onPress={() => navigation.navigate("DateSelect")}
            />
            <Button
                title="LocalConsulta"
                onPress={() => navigation.navigate("LocalConsulta")}
            />
            <Button
                title="ProntuarioPaciente"
                onPress={() => navigation.navigate("ProntuarioPaciente")}
            />
        </View>
    )
}