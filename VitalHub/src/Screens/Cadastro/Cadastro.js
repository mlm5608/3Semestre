import { Button } from "../../Components/Button/style"
import { ButtonTitle } from "../../Components/ButtonTitle/style"
import { Container } from "../../Components/Container/style"
import { Input } from "../../Components/Input/style"
import { LinkB } from "../../Components/LinkB/style"
import { Logo } from "../../Components/Logo/style"
import { Subtitle } from "../../Components/Subtitle/style"
import { Title } from "../../Components/Title/style"


export const Cadastro = ({navigation}) =>{
    return(
        <Container>
            <Logo source={require('../../Assets/VitalHub_Logo.png')}/>

            <Title> Redefinir Senha </Title>

            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <Input placeholder="Nova senha" placeholderTextColor="#34898F" />
            <Input placeholder="Confirmar nova senha" placeholderTextColor="#34898F" />

            <Button>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </Button>

            <LinkB>Cancelar</LinkB>
        </Container>
    )
}