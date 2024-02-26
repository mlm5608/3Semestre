import { BoxInfosClinic, InputBox, InputsBox } from "../../Components/Box/style";
import { Container } from "../../Components/Container/style";
import { ImgMap } from "../../Components/ImgPerfil/style";
import { InputPerfil, InputPerfilShort } from "../../Components/Input/style";
import { Label, LabelInputSmall } from "../../Components/Label/style";
import { Title } from "../../Components/Title/style"
import { CidadeClinic } from "../../Components/TypeConsult/style";

export const LocalConsulta = ({}) => {
  return (
    <Container>
      {/* Mapa */}
      <ImgMap source={require("../../Assets/imageMap.png")}/>

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

      </BoxInfosClinic>
    </Container>
  );
};
