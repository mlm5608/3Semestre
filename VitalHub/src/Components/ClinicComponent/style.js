import styled, { css } from "styled-components";
import { Title } from "../Title/style";


export const ClinicContent = styled.View`
    width: 90%;
    align-self: center;
    background-color: white;
    padding: 18px;
    gap: 10px;
    border-radius: 5px;
    margin-top: 12px;
    elevation: 4px;
    ${(props) => props.ClickButton ? 
    css`
        border: 2px solid #496BBA;
    `
    :
    css`
        border: 1px solid white;
    `
    }
`
export const BoxContentSC = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const StarsText = styled.Text`
    font-size: 14px;
    color: #F9A620;
    font-family: "Quicksand_600SemiBold";
`

export const LocalClinic = styled(StarsText)`
    color: #4E4B59;
`

export const TitleClinic = styled(Title)`
    font-size: 16px;
`

export const StarsBox = styled.View`
    flex-direction: row;
`