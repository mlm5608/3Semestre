import { Modal } from "react-native"
import { PatientModalH } from "../CancelattionModal/style"
import { LinkB } from "../Link/style"
import { Title } from "../Title/style"
import { Input } from "../Input/style"
import { Button } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ButtonContent, LabelModal, ModalContentM } from "./style"
import { TypeConsult } from "../BtnListApointment/style"
import { useState } from "react"



export const ScheduleConsultModal = ({
    visible,
    setOnpress,
    navigateLocal,
    ...rest
}) => {
    const [selected, setSelected] = useState("")
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            {/* container */}
            <PatientModalH>
                <ModalContentM>
                    <Title>Agendar Consulta</Title>

                    <LabelModal>Qual o nível da consulta</LabelModal>
                    <ButtonContent>

                        <TypeConsult
                            textButton = "Rotina"
                            clickButton = {selected === "Rotina"}
                            onPress={() => setSelected("Rotina")}
                        />
                        <TypeConsult
                            textButton = "Exame"
                            clickButton = {selected === "Exame"}
                            onPress={() => setSelected("Exame")}
                        />
                        <TypeConsult
                            textButton = "Urgência"
                            clickButton = {selected === "Urgência"}
                            onPress={() => setSelected("Urgência")}
                        />

                    </ButtonContent>

                    <LabelModal>Qual o nível da consulta</LabelModal>
                    <Input
                        placeholder="Informe a localização"
                        placeholderTextColor="#34898F"
                        value={null}
                    />

                    <Button onPress={navigateLocal}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    <LinkB onPress={() => setOnpress(false)}>Cancelar</LinkB>
                </ModalContentM>
            </PatientModalH>
        </Modal>
    )
}