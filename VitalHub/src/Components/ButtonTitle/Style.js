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

export const TextTypeConsultButton = styled.Text`
    font-size: 13px;
    font-family: 'MontserratAlternates_600SemiBold';

    ${props => props.clickButton ? 
    css`
        color: white;
        
    `
    :
    css`
        color: #34898F;
    `}
`
<<<<<<< HEAD


export const TextButtonSave = styled.Text`
    color: white;
    font-size: 14px;
    font-family: "MontserratAlternates_700Bold";
`
=======
>>>>>>> 739be4765e9108948839652a4a97675cf1af981b
