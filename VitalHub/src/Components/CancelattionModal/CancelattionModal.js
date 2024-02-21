import { Modal } from "react-native"
import { Title } from "../Title/style"
import { ButtonModal } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { LinkB } from "../Link/style"
import { ModalContent, ModalText, PatientModal } from "./style"


export const CancelattionModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) =>{
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            {/* container */}
            <PatientModal>
                <ModalContent>
                    <Title>Cancelar consulta</Title>
                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <LinkB onPress={() => setShowModalCancel(false)}>Cancelar</LinkB>
                </ModalContent>
            </PatientModal>
        </Modal>
    )
}
