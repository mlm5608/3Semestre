import { Modal } from "react-native"
import { AgeUser } from "../AgeUser/style"
import { ButtonModal } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ModalContent, PatientModal } from "../CancelattionModal/style"
import { EmaiUserShort } from "../EmailUser/style"
import { LinkB } from "../Link/style"
import { ImgModal, InfosBoxModal } from "./style"
import { Title } from "../Title/style"

export const AppointmentModal = ({
    visible,
    setShowModalAppointment,
    NomePaciente,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            {/* container */}
            <PatientModal>
                <ModalContent>
                    <ImgModal source={require("../../Assets/ModalImage.png")} />
                    <Title>{NomePaciente}</Title>

                    <InfosBoxModal>
                        <AgeUser>22 Anos</AgeUser>
                        <EmaiUserShort>emailpaciente@gmail.com</EmaiUserShort>
                    </InfosBoxModal>

                    <ButtonModal>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModal>

                    <LinkB onPress={() => setShowModalAppointment(false)}>Cancelar</LinkB>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}

export const ConsultLocalModal = ({
    visible,
    setOnpress,
    item,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            {/* container */}
            <PatientModal>
                <ModalContent>
                    <ImgModal source={require("../../Assets/ModalImage2.png")} />
                    <Title>{item.name}</Title>

                    <InfosBoxModal>
                        <AgeUser>{item.age} Anos</AgeUser>
                        <EmaiUserShort>{item.email}</EmaiUserShort>
                    </InfosBoxModal>

                    <ButtonModal>
                        <ButtonTitle>ver local da consulta</ButtonTitle>
                    </ButtonModal>

                    <LinkB onPress={() => setOnpress(false)}>Cancelar</LinkB>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}