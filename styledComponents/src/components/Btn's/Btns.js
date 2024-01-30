import styled from "styled-components";

export const BtnIncrement = styled.TouchableOpacity`
    margin-top: 15px;
    height: 80px;
    width: 110px;
    justify-content: center;
    align-items: center;
    background-color: #394657;
    padding: 10px;
    border-radius: 30px;
`

export const BtnDecrement = styled(BtnIncrement)`
    background-color: #AB4438;
`