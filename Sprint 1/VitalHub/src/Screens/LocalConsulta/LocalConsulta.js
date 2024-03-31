import { BoxInfosClinic, InputBox, InputsBox } from "../../Components/Box/style";
import { Container } from "../../Components/Container/style";
import { InputPerfil, InputPerfilShort } from "../../Components/Input/style";
import { Label, LabelInputSmall } from "../../Components/Label/style";
import { Title } from "../../Components/Title/style"
import { CidadeClinic } from "../../Components/TypeConsult/style";
import { LinkB } from "../../Components/Link/style";
import {MapaGps} from "../../Components/GPS/Gps";

export const LocalConsulta = ({navigation}) => {
  return (
    <Container>
      <MapaGps/>

      {/* ContentBox */}
      <BoxInfosClinic>
        <Title>Clínica Natureh</Title>
        <CidadeClinic>Santo André, SP</CidadeClinic>

        <Label>Endereço:</Label>
        <InputPerfil
          placeholder="Ex.: Rua Vicenso Silva"
          placeholderTextColor="rgb(51, 48, 62)"
        />

        <InputsBox>
          <InputBox>
            <LabelInputSmall>Número</LabelInputSmall>
            <InputPerfilShort
              placeholder="578"
              placeholderTextColor="rgb(51, 48, 62)"
            />
          </InputBox>

          <InputBox>
            <LabelInputSmall>Bairro</LabelInputSmall>
            <InputPerfilShort
              placeholder="Jdm. Bela Vista"
              placeholderTextColor="rgb(51, 48, 62)"
            />
          </InputBox>
        </InputsBox>

        <LinkB onPress={() => {navigation.navigate("Home")}}>Voltar</LinkB>

      </BoxInfosClinic>
    </Container>
  );
};
