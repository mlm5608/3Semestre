import { Button } from "../../Components/Button/Style"
import { ButtonTitle } from "../../Components/ButtonTitle/Style"
import { Container } from "../../Components/Container/Style"
import { Input } from "../../Components/Input/Style"
import { Logo } from "../../Components/Logo/Style"
import { Subtitle } from "../../Components/Subtitle/Style"
import { Title } from "../../Components/Title/Style"

export const RecSenha = ({ navigation }) => {
    return(
        <Container>
            <Logo source={require('../../Assets/VitalHub_Logo.png')}/>

            <Title> Recuperar Senha </Title>

            <Subtitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</Subtitle>

            <Input placeholder="Usuário ou E-mail" placeholderTextColor="#34898F" />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>
        </Container>
    )
}