import { AgeUser } from "../../Components/AgeUser/style";
import { ButtonsBox, InfosBox } from "../../Components/Box/style";
import { ButtonSave } from "../../Components/Button/style";
import { TextButtonSave } from "../../Components/ButtonTitle/style";
import { Container, ContainerScroll } from "../../Components/Container/style";
import { EmaiUserShort } from "../../Components/EmailUser/style";
import { ImgPerfil } from "../../Components/ImgPerfil/style";
import { InputMedium, InputPerfil, InputPerfilBig } from "../../Components/Input/style";
import { Label } from "../../Components/Label/style";
import { Line } from "../../Components/Line/style";
import { LinkB, LinkCancel } from "../../Components/Link/style";
import { NomeUser } from "../../Components/NomeUser/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ProntuarioPaciente = ({navigation}) => {
  return (
    <ContainerScroll>
      <Container>
        <ImgPerfil source={require("../../Assets/Rectangle 426.png")} />

        <NomeUser>Dr.Claudio</NomeUser>

        <InfosBox>
          <AgeUser>Clinico Geral</AgeUser>
          <EmaiUserShort>CRM-15432</EmaiUserShort>
        </InfosBox>

        <Label>Descrição da consulta:</Label>
        <InputPerfilBig
          placeholder={`O paciente possuí uma infecção no
ouvido. Necessário repouse de 2 dias
e acompanhamento médico 
constante`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <Label>Diagnóstico do Paciente:</Label>
        <InputPerfil
          placeholder="Ex.: Infecção no ouvido"
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <Label>Prescrição médica:</Label>
        <InputPerfilBig
          placeholder={`Ex.: Medicamento: Advil 
Dosagem: 50 mg 
Frequência: 3 vezes ao dia 
Duração: 3 dias`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <Label>Exames Medicos:</Label>
        <InputPerfilBig
          placeholder={`          [!] Nenhuma foto informada`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <ButtonsBox>
          <ButtonSave>
            <MaterialCommunityIcons
              name="camera-plus-outline"
              size={24}
              color="white"
            />
            <TextButtonSave>Salvar</TextButtonSave>
          </ButtonSave>

          <LinkCancel>Cancelar</LinkCancel>
        </ButtonsBox>

        <Line />

        <InputMedium
          placeholder={`Resultado do exame de sangue:
tudo normal`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <LinkB onPress={() => navigation.navigate("Home")}>voltar</LinkB>
      </Container>
    </ContainerScroll>
  );
};
