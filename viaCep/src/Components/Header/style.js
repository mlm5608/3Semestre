import { Platform } from "react-native";
import styled from "styled-components";

//criar componentes estilizados
export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 20%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 20px 20px;
    elevation: 15;
`
export const HeaderContent = styled.SafeAreaView`
    width: 100%;
    height: 65%;
    align-items: center;
    justify-content: center;
`
export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: 'Roboto_500Medium';
    color: #333E33;
`