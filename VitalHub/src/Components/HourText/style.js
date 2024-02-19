import styled, { css } from "styled-components";
export const HourText  = styled.Text`
    font-size: 14px;
    font-family: "Quicksand_600SemiBold";

    ${props => props.listAg ? css`
        color: #49B3BA;`
    :
    css`
        color: #4E4B59;
    `
    }
`