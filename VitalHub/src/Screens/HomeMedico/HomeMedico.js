import { LinearGradient } from "expo-linear-gradient"
import { ButtonsContainer, Container, ContainerFooter, ContainerHeader } from "../../Components/Container/style"
import { ImgPerfilHome, ImgPerfilHomeCard } from "../../Components/ImgPerfil/style"
import { DoctorName, PacientName } from "../../Components/NomeUser/style";
import { TextTemplate } from "../../Components/TextTemplate/style";
import { InfosBox } from "../../Components/InfosBox/style";
import { TextsBox } from "../../Components/TextsBox/style";
import { BoxContent } from "../../Components/BoxContent/style";
import { StyledCalendarStrip } from "../../Components/Calendar/style"
import { AgeETypeBox, BoxContent2, CardBox, HourELinkBox, OptionBox, } from "../../Components/Box/style";
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { PacientAge } from "../../Components/AgeUser/style";
import { HourComponent } from "../../Components/HourComponent/style";
import { TipoConsulta } from "../../Components/TypeConsult/style";
import { StyleSheet } from 'react-native';
// import lib moment
import moment from "moment";
import { ButtonListAppontment } from "../../Components/BtnListApointment/style";
import { useState } from "react";
import { LinkComponent } from "../../Components/LinkComponent/style";
import { LinkCard } from "../../Components/Link/style";




export const HomeMedico = ({ navigation }) => {
    const [statusLista, setStatusLista] = useState("pendente")

    moment.updateLocale("pt-br", {

        //meses
        months:
            "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
                "_"
            ),
        //abreviação dias da semana
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),

        //abreviação dias da semana 
        weekdaysMin: 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
    });

    //instância da data atual
    const currentDate = new Date();

    //define a data inicial como sendo o primeiro dia do mês
    const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    //define a data final como sendo o último dia do mês
    const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    //retorna o componente StyleCalendarStrip

    return (
        <Container>
            <ContainerHeader>
                <LinearGradient colors={['rgba(96,191,197,1)', 'rgba(73,107,186,1)']} flex={1} start={{ x: -0.05, y: 1.08 }} end={{ x: 1, y: 0 }}>
                    <BoxContent>
                        <InfosBox>
                            <ImgPerfilHome source={require("../../Assets/ImgPerfilHome.png")} />

                            <TextsBox>

                                <TextTemplate>bem vindo</TextTemplate>
                                <DoctorName>Dr. Claudio</DoctorName>

                            </TextsBox>
                        </InfosBox>

                        <MaterialIcons name="notifications" size={24} color="white" />
                    </BoxContent>
                </LinearGradient>
            </ContainerHeader>

            <StyledCalendarStrip
                // animação e seleção de cada data
                calendarAnimation={{ type: "sequence", duration: 30 }}
                daySelectionAnimation={styles.selectedAnimationStyle}

                // seta esquerda e direita para avançar e voltar(aqui como display none)
                iconLeftStyle={styles.iconsStyle}
                iconRightStyle={styles.iconsStyle}

                // deixa uma marcação default - data atual
                selectedDate={currentDate}
                // dia que começamos a visualizar a barra
                startingDate={moment()}

                //data min e max - início do mês e final do mês
                minDate={startingDate}
                maxDate={endingDate}

                //estilização dos itens que não estão selecionados
                calendarHeaderStyle={styles.calendarHeaderStyle}
                dateNumberStyle={styles.numberDateStyle}
                dateNameStyle={styles.nameDateStyle}

                // estilização do item que está selecionado - efeito do item marcado
                highlightDateNameStyle={styles.selectedDateNameStyle}
                highlightDateNumberStyle={styles.selectedDateNumberStyle}
                highlightDateContainerStyle={styles.selectedContainerStyle}

                //tamanho do container
                iconContainer={{ flex: 0.1 }}

                //scroll da barra
                scrollable={true}
            />

            <ButtonsContainer>

                <ButtonListAppontment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />
                <ButtonListAppontment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                <ButtonListAppontment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </ButtonsContainer>

            <CardBox>
                <ImgPerfilHomeCard source={require("../../Assets/fotoNiccole.png")} />

                <BoxContent2>
                    <PacientName>Niccole Sarga</PacientName>
                    <AgeETypeBox>
                        <PacientAge>22 anos</PacientAge>
                        <FontAwesome name="circle" size={3} color="#D9D9D9" alignSelf={"center"} />
                        <TipoConsulta>Rotina</TipoConsulta>
                    </AgeETypeBox>

                    <HourELinkBox>

                        <HourComponent 
                        Time='14:00'
                        listAg={statusLista === "pendente"}
                        />

                        <LinkComponent
                        listFunction={statusLista}
                        title= {statusLista === "pendente" ? "Cancelar": statusLista === "realizado" ? "Ver Prontuário" : "Cancelar" }
                        />

                    </HourELinkBox>
                </BoxContent2>
            </CardBox>

            <CardBox>
                <ImgPerfilHomeCard source={require("../../Assets/fotoRichard.png")} />

                <BoxContent2>
                    <PacientName>Richard Kosta</PacientName>
                    <AgeETypeBox>
                        <PacientAge>28 anos</PacientAge>
                        <FontAwesome name="circle" size={3} color="#D9D9D9" alignSelf={"center"} />
                        <TipoConsulta>Urgência</TipoConsulta>
                    </AgeETypeBox>

                    <HourELinkBox>
                        <HourComponent 
                            Time='14:00'
                            listAg={statusLista === "pendente"}
                        />

                        <LinkCard>Cancelar</LinkCard>

                    </HourELinkBox>
                </BoxContent2>
            </CardBox>

            <ContainerFooter>
                <OptionBox>
                    <FontAwesome name="calendar" size={22} color="#607EC5" />
                    {/* <TitleOption>Agenda</TitleOption> */}
                </OptionBox>

                <OptionBox>
                    <FontAwesome5 name="user-circle" size={22} color="#4E4B59" />
                </OptionBox>

            </ContainerFooter>

        </Container>
    )
}

const styles = StyleSheet.create({
    iconsStyle: {
        display: 'none'
    },
    calendarHeaderStyle: {
        fontSize: 22,
        textAlign: "center",
        alignSelf: 'flex-start',
        color: '#4E4B59',
        fontFamily: "MontserratAlternates_600SemiBold",
        paddingHorizontal: 16
    },
    nameDateStyle: {
        color: "#ACABB7",
        fontSize: 12,
        textTransform: 'capitalize'
    },
    numberDateStyle: {
        color: "#5F5C6B",
        fontSize: 16
    },
    selectedDateNameStyle: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },
    selectedDateNumberStyle: {
        color: "white",
        fontSize: 14
    },
    selectedContainerStyle: {
        backgroundColor: `#60BFC5`
    },
    selectedAnimationStyle: {
        type: "border",
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: "#49B3BA"
    }
})