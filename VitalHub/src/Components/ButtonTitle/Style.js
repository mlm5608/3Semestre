import styled, { css } from "styled-components";

export const ButtonTitle = styled.Text`
    font-family: "MontserratAlternates_600SemiBold";
    color: white;
    font-size: 14px;
    text-transform: uppercase;

`

export const ButtonTitleGoogle = styled(ButtonTitle)`
    color: #496bba;
`

export const TextPerfilButton = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';
    align-self: center;
    
    ${props => props.clickButton ? css`
    color: #fbfbfb; ` 
    : css`
        color: #607ec5;
    `}
`

