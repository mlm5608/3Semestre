import styled, { css } from "styled-components";

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
export const PerfilButton = styled.TouchableHighlight`
    border-radius: 5px;
    width: 100px;
    height: 40px;
    justify-content: center;

    ${props => props.clickButton ? css`
    background-color: #496bba; `
        : css`
        background-color: transparent;
        border: 2px solid #607ec5;
    `}
`

export const ButtonModal = styled(Button)`
    width: 95%;
    margin-top: 30px;
`

export const ButtonScheduleConsult = styled.TouchableOpacity`
    background-color: #49B3BA;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    align-self: flex-end;
    margin-right: 21px;
    margin-bottom: 14px;
    border: 1px solid #49B3BA;
    border-radius: 7px;
    elevation: 4px;
`

export const TypeConsultButton = styled.TouchableHighlight`
    width: 88px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #60BFC5;
    justify-content: center;
    align-items: center;

    ${props => props.clickButton ?
        css`
        background-color: #60BFC5;
        
    `
        :
        css`
        background-color: white;
    `}
`

export const ButtonSave = styled.TouchableOpacity`
    width: 170px;
    height: 45px;
    background-color: #49B3BA;
    border: 1px solid #49B3BA; 
    border-radius: 5px;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const IconBox = styled.TouchableOpacity`
    margin-top: 20px;
    height: 30px;
    width: 30px;
    background-color: rgba(73, 179, 186, .15);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
`