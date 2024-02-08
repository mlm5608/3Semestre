import { Button } from '../../Components/Button/style'
import { ButtonTitle } from '../../Components/ButtonTitle/style'
import { Container } from '../../Components/Container/style'
import { Input } from '../../Components/Input/style'
import { Logo } from '../../Components/Logo/style'
import { Subtitle } from '../../Components/Subtitle/style'
import { Title } from '../../Components/Title/style'


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