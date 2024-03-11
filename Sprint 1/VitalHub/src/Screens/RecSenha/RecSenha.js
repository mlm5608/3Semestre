import { Container } from "../../Components/Container/style"
import { LogoIcon } from "../../Components/Logo/style"
import { Title } from "../../Components/Title/style"
import { Subtitle } from "../../Components/Subtitle/style"
import { Input } from "../../Components/Input/style"
import { Button, IconBox } from "../../Components/Button/style"
import { ButtonTitle } from "../../Components/ButtonTitle/style"
import { AntDesign } from '@expo/vector-icons';


export const RecSenha = ({ navigation }) => {
    return (
        <Container>
            <IconBox onPress={() => navigation.navigate("Login")}>
                <AntDesign name="arrowleft" size={22} color="#34898F" />
            </IconBox>

            <LogoIcon source={require('../../Assets/VitalHub_Logo.png')} />

            <Title> Recuperar Senha </Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#34898F" />

            <Button onPress={() => navigation.navigate("Verificacao")}>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}