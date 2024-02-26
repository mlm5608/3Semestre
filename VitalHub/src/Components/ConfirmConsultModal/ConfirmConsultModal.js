import { Modal } from "react-native"
import { ButtonModal } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { Title } from "../Title/style"
import { SubtitleBlack } from "../Subtitle/style"
import { ConsultInfoText, LabelModal } from "./style"
import { ModalContent, PatientModal } from "../CancelattionModal/style"
import { LinkB } from "../Link/style"

export const ConfirmConsultModal = ({
    visible,
    data,
    nomeMedico,
    especialidadeMedico,
    localConsulta,
    tipoConsulta,
    setShowConfirmModal,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            {/* container */}
            <PatientModal>
                <ModalContent>
                    <Title>Agendar consulta</Title>
                    <SubtitleBlack>Consulte os dados selecionados para a sua consulta</SubtitleBlack>

                    <LabelModal>Data da Consulta</LabelModal>
                    <ConsultInfoText>{data}</ConsultInfoText>

                    <LabelModal>Médico(a) da consulta</LabelModal>
                    <ConsultInfoText>{nomeMedico}</ConsultInfoText>
                    <ConsultInfoText>{especialidadeMedico}</ConsultInfoText>

                    <LabelModal>Local da consulta</LabelModal>
                    <ConsultInfoText>{localConsulta}</ConsultInfoText>

                    <LabelModal>Tipo da Consulta</LabelModal>
                    <ConsultInfoText>{tipoConsulta}</ConsultInfoText>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <LinkB onPress={() => setShowConfirmModal(false)}>Cancelar</LinkB>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}