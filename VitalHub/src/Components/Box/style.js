import styled, { css } from "styled-components";

export const BoxContent2 = styled.View`
    flex-direction: column;
`

export const CardBox = styled.View`
    width: 90%;
    height: 102px;
    background-color: #FFFFFF;
    flex-direction: row;
    gap:10px;
    justify-content: center;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    overflow: scroll;
`
export const AgeETypeBox = styled.View`
    gap: 7px;
    margin-top: 5px;
    flex-direction: row;
`

export const HourBox = styled.View`
    width: 100px;
    height: 26px;
    border-radius: 5px;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
    align-items: center;

    
    ${props => props.listAg ? css`
    border: 1px solid #E8FCFD;
    background-color: #E8FCFD;
    `
    :
    css`
    border: 1px solid #F1F0F5;
    background-color: #F1F0F5;
    `}
`

export const HourELinkBox = styled.View`
    flex-direction: row;
    gap: 47px;
    margin-top: 15px;
`
export const OptionBox = styled.View`
    height: 100%;
    width: 50px;
    align-items: center;
    justify-content: center;
`

