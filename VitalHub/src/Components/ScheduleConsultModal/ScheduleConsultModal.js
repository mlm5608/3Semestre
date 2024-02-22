import { Modal } from "react-native"
import { ModalContent, PatientModal } from "../CancelattionModal/style"
import { LinkB } from "../Link/style"
import { Title } from "../Title/style"
import { Input } from "../Input/style"
import { Button } from "../Button/style"
import { ButtonTitle } from "../ButtonTitle/style"
import { ButtonContent, LabelModal, ModalContentM } from "./style"
import { TypeConsult } from "../BtnListApointment/style"



export const ScheduleConsultModal = ({
    visible,
    setOnpress,
    ...rest
}) => {
    const [selected, setSelected] = useState("")
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="slide">
            {/* container */}
            <PatientModal>
                <ModalContentM>
                    <Title>Agendar Consulta</Title>

                    <LabelModal>Qual o nível da consulta</LabelModal>
                    <ButtonContent>

                        <TypeConsult
                        
                        />

                    </ButtonContent>

                    <LabelModal>Qual o nível da consulta</LabelModal>
                    <Input
                        placeholder="Nova senha"
                        placeholderTextColor="#34898F"
                        onPress={null}
                        value={null}
                    />

                    <Button>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    <LinkB onPress={() => setOnpress(false)}>Cancelar</LinkB>
                </ModalContentM>
            </PatientModal>
        </Modal>
    )
}