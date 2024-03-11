import { Button, IconBox } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";
import { Container } from "../../Components/Container/style";
import { InputVerify } from "../../Components/Input/style";

import { LogoIcon } from "../../Components/Logo/style";
import { SubEmail, Subtitle } from "../../Components/Subtitle/style";
import { Title } from "../../Components/Title/style";
import { AntDesign } from '@expo/vector-icons';

import { LinkB } from "../../Components/Link/style";
import {InputsBox } from "../../Components/Box/style";

export const Verificacao = ({ navigation }) => {
  return (
    <Container>

      <IconBox onPress={() => navigation.navigate("RecSenha")}>
        <AntDesign name="close" size={22} color="#34898F" />
      </IconBox>

      <LogoIcon source={require("../../Assets/VitalHub_Logo.png")} />

      <Title> Verifique seu e-mail </Title>

      <Subtitle>Digite o código de 4 dígitos enviado para <SubEmail>username@email.com</SubEmail> </Subtitle>
      

      <InputsBox>
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
        <InputVerify placeholder="0" placeholderTextColor="#34898F" />
      </InputsBox>
      <Button onPress={() => navigation.navigate("RedSenha")}>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <LinkB>Reenviar Código</LinkB>
    </Container>
  );
};
