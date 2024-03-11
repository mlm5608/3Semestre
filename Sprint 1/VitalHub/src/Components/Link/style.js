import styled, { css } from "styled-components";

export const LinkMedium = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_500Medium";
    text-decoration: underline;
    align-self: flex-start;
    margin-top: 10px;
    color: #8C8A97;
    margin-left: 20px;
    margin-bottom: 15px;
`

export const LinkB = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 14px;
    color: #344F8F;
    text-decoration: underline;
    margin-top: 30px;
    margin-bottom: 33px;
` 
export const LinkAccount = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 12px;
    color: #4D659D;
    text-decoration: underline;
`

export const LinkCard = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_500Medium";
    

    ${props => props.listFunction === "pendente" ? css`color: #C81D25;`: props.listFunction === "realizado" ? css`color: #344F8F;`: css`color: red;` }
`

export const LinkCancel = styled.Text`
    font-size: 12px;
    font-family: "MontserratAlternates_500Medium";
    color: #C81D25;
`