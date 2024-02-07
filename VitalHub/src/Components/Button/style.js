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