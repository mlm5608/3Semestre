import styled from "styled-components";
import { ImageBackground } from "react-native";

export const Container = styled(ImageBackground)`
    flex: 1;
    align-items: center;
    justify-content: center;
`
export const Div = styled.View`
    height: 50%;
    width: 80%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
`

export const DivBtns = styled(Div)`
    background-color: transparent;
    height: 50%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction:row-reverse;
`
