import { Button } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";
import { Container } from "../../Components/Container/style";
import { InputVerify } from "../../Components/Input/style";
import { InputsBox } from "../../Components/InputsBox/style"
import { LogoIcon } from "../../Components/Logo/style";
import { SubEmail, Subtitle } from "../../Components/Subtitle/style";
import { Title } from "../../Components/Title/style";

import { AntDesign } from '@expo/vector-icons';
import { IconBox } from "../../Components/IconBox/style";
import { LinkB } from "../../Components/Link/style";

export const Verificacao = ({ navigation }) => {
  return (
    <Container>

      <IconBox>
        <AntDesign name="close" size={22} color="#34898F" />
      </IconBox>

      <LogoIcon source={require("../../Assets/VitalHub_Logo.png")} />

      <Title> Verifique seu e-mail </Title>

      <Subtitle>Digite o código de 4 dígitos enviado para</Subtitle>
      <SubEmail>username@email.com</SubEmail>

      <InputsBox>
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
      </InputsBox>
      <Button>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <LinkB>Reenviar Código</LinkB>
    </Container>
  );
};
