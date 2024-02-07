import {Container } from "../../Components/Container/Style"
import { Logo } from "../../Components/Logo/Style"
import { Title } from "../../Components/Title/Style"
import { Input } from "../../Components/Input/Style"
import { LinkMedium } from "../../Components/LinkAccount/Style"
import { Button, ButtonGoogle } from "../../Components/Button/Style"
import { ButtonTitle, ButtonTitleGoogle } from "../../Components/ButtonTitle/Style"
import { AntDesign } from '@expo/vector-icons';
import { ContentAccount } from "../../Components/ContentAccount/Style"
import { TextAccount } from "../../Components/TextAccount/Style"
import { LinkAccount } from "../../Components/LinkAccount/Style"


export const Login = ({ navigation }) => {
    return (
        <Container>
            <Logo source={require('../../Assets/VitalHub_Logo.png')} />

            <Title> Entrar ou criar conta </Title>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#34898F" />
            <Input placeholder="Senha" placeholderTextColor="#34898F" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            
            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>
            
            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496bba"/>
                <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem uma conta?</TextAccount>
                <LinkAccount>Crie uma conta agora!</LinkAccount>
            </ContentAccount>
        </Container>
    )
}