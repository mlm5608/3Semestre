import { Button, Text } from "react-native"
import { Container } from "../../Components/Container/Style"
import { Logo } from "../../Components/Logo/style"
import { Title } from "../../Components/Title/Style"
import { Input } from "../../Components/Input/style"


export const Login = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require('../../Assets/VitalHub_Logo.png')}/>

            <Title> Entrar ou criar conta </Title>
            
            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#34898F"/>
            <Input placeholder="Senha" placeholderTextColor="#34898F"/>
            {/*
            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem uma conta? Crie uma conta agora!</TextAccount>
            </ContentAccount> */}
        </Container>
    )
}