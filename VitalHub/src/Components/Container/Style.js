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
    width: 100%;
    height: 102px;
    background-color: blue;
    border-radius: 0 0 7px 7px;
    overflow: hidden;
`

export const ButtonsContainer = styled.View`
    flex-direction:row;
    gap: 10px;
    margin-top: 38px;
    margin-bottom: 8px;
`