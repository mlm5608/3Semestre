import { InputBox, InputsBox } from "../../Components/Box/style"
import { ButtonExitApp, ButtonPerfil } from "../../Components/Button/style"
import { ButtonTitle } from "../../Components/ButtonTitle/style"
import { Container, ContainerScroll } from "../../Components/Container/style"
import { EmailUser } from "../../Components/EmailUser/style"
import { ImgPerfil } from "../../Components/ImgPerfil/style"
import { InputPerfil, InputPerfilShort } from "../../Components/Input/style"
import { Label } from "../../Components/Label/style"
import { NomeUser } from "../../Components/NomeUser/style"


export const PerfilPaciente = ({ navigation }) => {
    return (
        <ContainerScroll>
            <Container>
                <ImgPerfil source={require("../../Assets/Rectangle 425.png")} />

                <NomeUser>Richard Kosta</NomeUser>
                <EmailUser>richard.kosta@gmail.com</EmailUser>

                <Label>Data de nascimento:</Label>
                <InputPerfil placeholder="Ex.: 04/05/1999" placeholderTextColor="rgba(51, 48, 62, 0.5)"/>

                <Label>CPF:</Label>
                <InputPerfil placeholder="Ex.: 859********" placeholderTextColor="rgba(51, 48, 62, 0.5)"/>

                <Label>Endereço:</Label>
                <InputPerfil placeholder="Ex.: Rua Vicenso Silva, 987" placeholderTextColor="rgba(51, 48, 62, 0.5)"/>

                <InputsBox>

                    <InputBox>
                        <Label>Cep</Label>
                        <InputPerfilShort placeholder="Ex.: 06548-909" placeholderTextColor="rgba(51, 48, 62, 0.5)"/>
                    </InputBox>

                    <InputBox>
                        <Label>Cidade</Label>
                        <InputPerfilShort placeholder="Ex.: Moema-SP" placeholderTextColor="rgba(51, 48, 62, 0.5)"/>
                    </InputBox>

                </InputsBox>

                <ButtonPerfil>
                    <ButtonTitle>Salvar</ButtonTitle>
                </ButtonPerfil>

                <ButtonPerfil>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonPerfil>

                <ButtonExitApp onPress={() => navigation.navigate("Login")}>
                    <ButtonTitle>Sair do APP</ButtonTitle>
                </ButtonExitApp>
            </Container>
        </ContainerScroll>
    )
}