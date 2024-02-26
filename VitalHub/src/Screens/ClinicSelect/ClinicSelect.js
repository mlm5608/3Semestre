import { useState } from "react"
import { COntentSelect, Container } from "../../Components/Container/style"
import { ListComponent } from "../../Components/List/List";
import { Button } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";
import { LinkB } from "../../Components/Link/style";
import { ClinicComponent } from "../../Components/ClinicComponent/ClinicComponent";
import { TitleSc } from "../../Components/Title/style";

export const ClinicSelect = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    const [nameClinic, setNameClinic] = useState("")

    const [dadosClinica, setDadosClinica] = useState([
        {
            id: "1",
            name: "Clinica 1",
            star: "4,4",
            local: "Santo André, SP",
            operatingDays: "Seg-Sex"
        },
        {
            id: "2",
            name: "Clinica 2",
            star: "4,8",
            local: "Santo André, SP",
            operatingDays: "Seg-Sex"
        },
        {
            id: "3",
            name: "Clinica 3",
            star: "5,0",
            local: "Santo André, SP",
            operatingDays: "Seg-Sex"
        },
        {
            id: "3",
            name: "Clinica 4",
            star: "5,0",
            local: "Santos, SP",
            operatingDays: "Seg-Sex"
        },
    ]);

    return (
        <Container>
            <COntentSelect>
                <TitleSc>Selecionar clínica</TitleSc>

                <ListComponent
                    data={dadosClinica}
                    renderItem={({ item }) =>
                        <ClinicComponent
                            name={item.name}
                            stars={item.star}
                            local={item.local}
                            operatingDays={item.operatingDays}
                            selected={item.name === selected}
                            onPress={() => { setSelected(item.name); setNameClinic(item.name)}}
                        />}
                    keyExtractor={item => { item.id }}
                    showsVerticalScrollIndicator={false}
                />

                <Button onPress={() => {/*Volta para a tela de agendar com o nome da clinica no input*/
                    alert(nameClinic)
                }}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </Button>

                <LinkB onPress={() => {{/*volta para a tela anterior*/}}}>Cancelar</LinkB>
            </COntentSelect>
        </Container>
    )
}