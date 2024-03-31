import styled from "styled-components";

export const Btn = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    background-color: #496BBA;
    border: solid 1px #496BBA;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
`

export const BtnCardSub = styled(Btn)`
    background-color: transparent;
    border: none;
    margin-top: 30px;
`

export const BtnModalCard = styled(Btn)`
    width: 80%;
    margin-top: 30px;
`

export const BtnSubText = styled.Text`
    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
`