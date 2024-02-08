import { Button } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";
import { Container } from "../../Components/Container/style";
import { Input, InputVerify } from "../../Components/Input/style";
import { InputsBox } from "../../Components/InputsBox/style";
import { LinkAccount } from "../../Components/LinkAccount/style";
import { LinkB } from "../../Components/LinkB/style";
import { Logo } from "../../Components/Logo/style";
import { SubEmail, Subtitle } from "../../Components/Subtitle/style";
import { Title } from "../../Components/Title/style";

export const Verificacao = ({ navigation }) => {
  return (
    <Container>
      <Logo source={require("../../Assets/VitalHub_Logo.png")} />

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
