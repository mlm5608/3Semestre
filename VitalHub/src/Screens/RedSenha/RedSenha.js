import { Button } from '../../Components/Button/style'
import { ButtonTitle } from '../../Components/ButtonTitle/style'
import { Container } from '../../Components/Container/style'
import { IconBox } from '../../Components/IconBox/style'
import { Input } from '../../Components/Input/style'
import { LogoIcon } from '../../Components/Logo/style'
import { Subtitle } from '../../Components/Subtitle/style'
import { Title } from '../../Components/Title/style'
import { AntDesign } from '@expo/vector-icons';


export const RedSenha = ({ navigation }) => {
    return(
        <Container>
            <IconBox>
                <AntDesign name="close" size={22} color="#34898F" />
            </IconBox>

            <LogoIcon source={require('../../Assets/VitalHub_Logo.png')}/>

            <Title> Redefinir Senha </Title>

            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <Input placeholder="Nova senha" placeholderTextColor="#34898F" />
            <Input placeholder="Confirmar nova senha" placeholderTextColor="#34898F" />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Container>
    )
}