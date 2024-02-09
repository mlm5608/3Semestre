import { ButtonPerfil, ButtonPerfilDesativate } from "../../Components/Button/style"
import { ButtonTitle } from "../../Components/ButtonTitle/style"
import { Container, ContainerScroll } from "../../Components/Container/style"
import { ImgPerfil } from "../../Components/ImgPerfil/style"
import { InputPerfil, InputPerfilBig } from "../../Components/Input/style"
import { Label } from "../../Components/Label/style"
import { NomeUser } from "../../Components/NomeUser/style"
import { LinkB } from "../../Components/LinkB/style";
import { EmaiUserShort } from "../../Components/EmailUser/style"
import { AgeUser } from "../../Components/AgeUser/style"
import { InfosBox } from "../../Components/InfosBox/style"

export const Prontuario = ({ navigation }) => {
    return (
        <ContainerScroll>
            <Container>
                <ImgPerfil source={require("../../Assets/Rectangle 425.png")} />

                <NomeUser>Richard Kosta</NomeUser>

                <InfosBox>
                    <AgeUser>22 Anos</AgeUser>
                    <EmaiUserShort>richard.kosta@gmail.com</EmaiUserShort>
                </InfosBox>

                <Label>Descrição da consulta:</Label>
                <InputPerfilBig placeholder={`O paciente possuí uma infecção no
ouvido. Necessário repouse de 2 dias
e acompanhamento médico 
constante`}     
                placeholderTextColor="rgba(51, 48, 62, 0.5)"/>

                <Label>Diagnóstico do Paciente:</Label>
                <InputPerfil placeholder="Ex.: Infecção no ouvido" placeholderTextColor="rgba(51, 48, 62, 0.5)"/>

                <Label>Prescrição médica:</Label>
                <InputPerfilBig placeholder={`Ex.: Medicamento: Advil 
Dosagem: 50 mg 
Frequência: 3 vezes ao dia 
Duração: 3 dias`} placeholderTextColor="rgba(51, 48, 62, 0.5)"/>

                <ButtonPerfil>
                    <ButtonTitle>Salvar</ButtonTitle>
                </ButtonPerfil>

                <ButtonPerfilDesativate>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonPerfilDesativate>

                <LinkB>Cancelar</LinkB>
            </Container>
        </ContainerScroll>
    )
}