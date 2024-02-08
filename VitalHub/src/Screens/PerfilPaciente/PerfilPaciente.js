import { Button } from "../../Components/Button/style"
import { ButtonTitle } from "../../Components/ButtonTitle/style"
import { Container } from "../../Components/Container/style"
import { EmailUser } from "../../Components/EmailUser/style"
import { ImgPerfil } from "../../Components/ImgPerfil/style"
import { InputPerfil, InputPerfilShort } from "../../Components/Input/style"
import { InputsBox } from "../../Components/InputsBox/style"
import { Label } from "../../Components/Label/style"
import { NomeUser } from "../../Components/NomeUser/style"


export const PerfilPaciente = ({ navigation }) => {
    return (
        <Container>
            <ImgPerfil source={require("../../Assets/Rectangle 425.png")} />

            <NomeUser>Richard Kosta</NomeUser>
            <EmailUser>richard.kosta@gmail.com</EmailUser>

            <Label>Data de nascimento:</Label>
            <InputPerfil />

            <Label>CPF:</Label>
            <InputPerfil />

            <Label>Endereço:</Label>
            <InputPerfil />

            <InputsBox>
                <Label>Cep</Label>
                <InputPerfilShort />

                <Label>Cidade</Label>
                <InputPerfilShort />
            </InputsBox>

            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>
            <Button>
                <ButtonTitle>Editar</ButtonTitle>
            </Button>
        </Container>
    )
}