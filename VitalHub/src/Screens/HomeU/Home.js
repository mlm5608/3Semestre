import { LinearGradient } from "expo-linear-gradient"
import { ButtonsContainer, Container, ContainerFooter, ContainerHeader } from "../../Components/Container/style"
import { ImgPerfilHome } from "../../Components/ImgPerfil/style"
import { DoctorName } from "../../Components/NomeUser/style";
import { TextTemplate } from "../../Components/TextTemplate/style";
import { StyledCalendarStrip } from "../../Components/Calendar/style"
import { OptionBox, BoxContent, InfosBox, TextsBox } from "../../Components/Box/style";
import {FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
// import lib moment
import moment from "moment";
import { ButtonListAppontment } from "../../Components/BtnListApointment/style";
import { useState } from "react";
import { ListComponent } from "../../Components/List/List";
import { CardComponent, CardComponentP } from "../../Components/Card/Card";
import { CancelattionModal } from "../../Components/CancelattionModal/CancelattionModal";
import { AppointmentModal, ConsultLocalModal } from "../../Components/AppointmentModal/AppointmentModal";
import { ScheduleConsultModal } from "../../Components/ScheduleConsultModal/ScheduleConsultModal";
import { ButtonScheduleConsult } from "../../Components/Button/style";




export const HomeMedico = ({ navigation }) => {

    const [showModalCancel, setShowModalCancel] = useState(false)
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    const [nomePaciente, setNomePaciente] = useState("")
    const [PacienteOuN, setPacienteOuN] = useState(false)
    const [medicInfos, setMedicInfos] = useState({})
    const [showConsultLocalModal, setShowConsultLocalModal] = useState(false)
    const [showScheduleConsultModal, setShowScheduleConsultModal] = useState(false)

    const [statusLista, setStatusLista] = useState("pendente")
    const [dadosPaciente, setDadosPaciente] = useState([
        {
            id: "1",
            name: "Vagner Soares",
            type: "Rotina",
            age: "22",
            horario: "14:00",
            srcImage: 'fotoNiccole',
            situacao: "pendente"
        },
        {
            id: "2",
            name: "Kleber Kosta",
            type: "Urgência",
            age: "28",
            horario: "15:00",
            srcImage: 'fotoRichard',
            situacao: "cancelado"
        },
        {
            id: "3",
            name: "Robinho Carl",
            type: "Rotina",
            age: "22",
            horario: "14:00",
            srcImage: 'fotoNiccole',
            situacao: "realizado"
        },
        {
            id: "4",
            name: "Valdisney de Souza",
            type: "Urgência",
            age: "28",
            horario: "15:00",
            srcImage: 'fotoRichard',
            situacao: "cancelado"
        },
        {
            id: "5",
            name: "Jobson Azevedo",
            type: "Rotina",
            age: "22",
            horario: "14:00",
            srcImage: 'fotoNiccole',
            situacao: "cancelado"
        },
        {
            id: "6",
            name: "Vilma Ribeiro",
            type: "Urgência",
            age: "28",
            horario: "15:00",
            srcImage: 'fotoRichard',
            situacao: "realizado"
        },
        {
            id: "7",
            name: "Samanda Guimarães",
            type: "Rotina",
            age: "22",
            horario: "14:00",
            srcImage: 'fotoNiccole',
            situacao: "pendente"
        },
        {
            id: "8",
            name: "Robson Queirós",
            type: "Urgência",
            age: "28",
            horario: "15:00",
            srcImage: 'fotoRichard',
            situacao: "pendente"
        },
    ]);
    const [dadosConsulta, setDadosConsulta] = useState([
        {
          id: "1",
          name: "Dr. Claudio",
          type: "Rotina",
          age: "22",
          horario: "14:00",
          situacao: "pendente",
          crm: "13490",
          especialidade: "cardiologista",
          email:"Claudiomedic@gmail.com"
        },
        {
          id: "2",
          name: "Dr. Robs",
          type: "Urgência",
          age: "28",
          horario: "15:00",
          situacao: "cancelado",
          crm: "13490",
          especialidade: "cardiologista",
          email:"Robsmedic@gmail.com"
        },
        {
          id: "3",
          name: "Dra. Ursûla",
          type: "Rotina",
          age: "26",
          horario: "14:00",
          situacao: "realizado",
          crm: "13490",
          especialidade: "cardiologista",
          email:"Ursulamedic@gmail.com"
        },
    ]);

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
            {PacienteOuN ?
                <ListComponent
                    data={dadosConsulta}
                    renderItem={({ item }) => statusLista === item.situacao ?
                        <CardComponentP
                            situação={statusLista}
                            onpressCancel={() => setShowModalCancel(true)}
                            onPressInfo={() => { setShowConsultLocalModal(true); setMedicInfos(item); }}
                            onPressPront={() => { {/*Navega para a tela de Prontuario*/ } }}
                            dados={item} />
                        :
                        <></>}
                    keyExtractor={item => { item.id }}
                    showsVerticalScrollIndicator={false}
                />
                :
                <ListComponent
                    data={dadosPaciente}
                    renderItem={({ item }) => statusLista === item.situacao ?
                        <CardComponent
                            situação={statusLista}
                            onpressCancel={() => setShowModalCancel(true)}
                            onPressApointment={() => {
                                setShowModalAppointment(true)
                                setNomePaciente(item.name)
                            }}
                            dados={item} />
                        :
                        <></>}

                    keyExtractor={item => { item.id }}
                    showsVerticalScrollIndicator={false}
                />
            }


            {PacienteOuN ?
                <ButtonScheduleConsult onPress={() => setShowScheduleConsultModal(true)}>
                    <FontAwesome6 name="stethoscope" size={32} color="#FBFBFB" />
                </ButtonScheduleConsult>
                :
                <></>
            }

            {/* modal cancelar */}
            {PacienteOuN ?
                <CancelattionModalP
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />
                :
                <CancelattionModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
                />
            }
            
            {/* modal ver prontuario */}
            <AppointmentModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
                NomePaciente={nomePaciente}
            />

            <ConsultLocalModal
                visible={showConsultLocalModal}
                setOnpress={setShowConsultLocalModal}
                item={medicInfos}
            />

            <ScheduleConsultModal
                visible={showScheduleConsultModal}
                setOnpress={setShowScheduleConsultModal}
                navigateMedic={{/*função de navegação para tela de selecionar médico*/ }}
                navigateLocal={{/* função de navegação para a tela de slecionar clinica*/ }}
            />

        </Container>
    );
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