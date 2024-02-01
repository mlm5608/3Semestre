import { Platform } from "react-native";
import styled from "styled-components";

//criar componentes estilizados
export const HeaderContainer = styled.View`
    background-color: #FECC2B;
    height: 25%;
    width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 15px 15px;
    shadow-color: 'black';
    shadow-opacity: 0.20;
    shadow-radius: 10px;
    shadow-offset: 0px 4px;
    elevation: 30;
    
`
export const HeaderContent = styled.SafeAreaView`
    margin-top: 30px;
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