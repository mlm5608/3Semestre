import styled from "styled-components";

export const Input = styled.TextInput `
    width: 90%;
    height: 53px;
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    border-radius: 5px;
    border-color: #49B3BA;
    border-width: 2px;
    background-color: white;
    margin-top: 15px;
    padding: 16px;
    color: #34898F;
`

export const InputVerify= styled(Input)`
    width: 18%;
    height: 65px;
    font-size: 40px;
    font-family: "Quicksand_600SemiBold";
    border-color: #77CACF;
    padding: 0px;
    text-align: center;
`
export const InputSingIn= styled(Input)`
    color: #49B3BA;
`
export const InputPerfil= styled(Input)`
    font-family: "MontserratAlternates_500Medium";
    border-color: #F5F3F3;
    background-color: #F5F3F3;
    margin-top: 6px;
    color: #33303E;
`
export const InputPerfilShort = styled(InputPerfil)`
    width: 45%;
`