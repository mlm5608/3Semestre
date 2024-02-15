import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    background-color: #496bba;
    border: 1px solid #496bba;
    margin-top: 15px;
    padding: 12px 8px 12px 8px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`

export const ButtonGoogle = styled(Button)`
    border: 1px solid #496BBA;
    background-color: #FAFAFA;
    flex-direction: row;
    gap: 25px;
`

export const ButtonPerfil = styled(Button)`
    margin-top: 30px;
`

export const ButtonExitApp = styled(Button)`

    justify-content: center;
    align-items: center;
    width: 190px;
    height: 44px;
    background-color: #ACABB7;
    border: 1px solid #ACABB7;
    color: #FFFFFF;
`

export const ButtonPerfilDesativate = styled(ButtonPerfil)`
    background-color: #ACABB7;
    border: 1px solid #ACABB7;
`
export const PerfilButton = styled.TouchableOpacity`
    width: 100px;
    height: 39px;
    background-color: #FBFBFB;
    border: 1px solid #607EC5;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`

export const PerfilButtonSelected = styled(PerfilButton)`
    background-color: #607EC5;
`