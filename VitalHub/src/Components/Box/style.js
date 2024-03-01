import styled, { css } from "styled-components";

export const BoxContent = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center ;
    justify-content: space-between;
    padding: 20px;
`

export const ProfileContent = styled.View`
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
    margin: 0px auto;
    margin-bottom: 12px;
    border-radius: 5px;
    elevation: 4px;
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
    width: 206px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`

export const OptionBox = styled.View`
    height: 100%;
    width: 50px;
    align-items: center;
    justify-content: center;
`

export const InfosBox = styled.View`
    flex-direction: row;
    gap: 20px;
`

export const TextsBox = styled.View`
    gap: 3px;
    height: 41px;
`

export const InputsBox = styled.View`
    flex-direction: row;
    gap: 20px;
    width: 90%;
    margin-top: 24px;

`

export const InputBox = styled.View`
    flex-direction: column;
    width: 45%;
`
export const CardBoxColored = styled(CardBox)`
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

export const BoxContentMc = styled(BoxContent)`
    flex-direction: column;
    gap: 10px;
    padding: 0px;
    justify-content: center;
`

export const InputSelectBox = styled.View`
    width: 90%;
    height: 55px;
    border: 2px solid #60BFC5;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 27px;
`

export const BoxInfosClinic = styled.View`
    width: 100%;
    height: 54%;
    border-radius: 10px 10px 0px 0px;
    background-color: white;
    elevation: 15px;
    align-items: center;
    align-self: flex-end;
`
export const ButtonsBox = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    gap: 60px;
`