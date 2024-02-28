import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`

export const ContainerScroll = styled.ScrollView`
   height: 100%;
   width: 100%;
`
export const ContainerHeader = styled.View`
    margin-top: 20px;
    width: 100%;
    height: 102px;
    background-color: blue;
    border-radius: 0 0 7px 7px;
    overflow: hidden;
`

export const ButtonsContainer = styled.View`
    flex-direction:row;
    margin-top: 38px;
    margin-bottom: 8px;
    width: 90%;
    justify-content: space-around;
`

export const ContainerFooter = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 26px;
    background-color: #FFFFFF;
    border-radius: 10px 10px 0px 0px;
`

export const COntentSelect = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`