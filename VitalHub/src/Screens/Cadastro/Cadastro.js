import { Container } from "../../Components/Container/style"
import { Logo } from "../../Components/Logo/style";
import { Subtitle } from "../../Components/Subtitle/style";
import { InputSingIn } from "../../Components/Input/style";
import { Button } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";

import { Title } from "../../Components/Title/style"
import { LinkB } from "../../Components/Link/style";

export const Cadastro = ({ navigation }) => {
    return (
        <Container>

            <Logo source={require('../../Assets/VitalHub_Logo.png')} />

            <Title> Criar conta </Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>

            <InputSingIn placeholder="Usuário ou E-mail" placeholderTextColor="#49B3BA" />
            <InputSingIn placeholder="Senha" placeholderTextColor="#49B3BA" />
            <InputSingIn placeholder="Confirmar senha" placeholderTextColor="#49B3BA" />

            <Button onPress={() => navigation.navigate("Main")}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkB onPress={() => navigation.navigate("Login")}>Cancelar</LinkB>
        </Container>
    )
}