import {Container} from "../../Components/Container/style"
import {Logo} from "../../Components/Logo/style"
import { Title } from "../../Components/Title/style"
import {Input} from "../../Components/Input/style"
import {Button, ButtonGoogle} from "../../Components/Button/style"
import {ButtonTitle, ButtonTitleGoogle} from "../../Components/ButtonTitle/style"
import {ContentAccount} from "../../Components/ContentAccount/style"
import {TextAccount} from "../../Components/TextAccount/style"
import { AntDesign } from '@expo/vector-icons';
import { LinkAccount, LinkMedium } from "../../Components/Link/style"



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