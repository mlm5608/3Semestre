import { Button } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";
import CalendarComponent from "../../Components/CalendarBig/CalendarBig";
import { COntentSelect, Container } from "../../Components/Container/style";
import { LinkB } from "../../Components/Link/style";
import { TitleSc } from "../../Components/Title/style";
import InputSelect from "../../Components/Select/Select";
import { InputSelectBox } from "../../Components/Box/style";
import { LabelSmall } from "../../Components/Label/style";
import { useState } from "react";
import { ConfirmConsultModal } from "../../Components/ConfirmConsultModal/ConfirmConsultModal";

export const DateSelect = ({ navigation }) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  return (
    <Container>
      <COntentSelect>
        <TitleSc>Selecionar data</TitleSc>

        <CalendarComponent />

        <LabelSmall>Selecione um horário disponível</LabelSmall>
        <InputSelectBox>
          <InputSelect />
        </InputSelectBox>

        <Button onPress={() => {setShowConfirmModal(true)}}>
          <ButtonTitle>Confirmar</ButtonTitle>
        </Button>

        <LinkB onPress={() => {}}>Cancelar</LinkB>

        <ConfirmConsultModal
          visible={showConfirmModal}
          data={"2 de janeiro"}
          nomeMedico={"kleber"}
          especialidadeMedico={"odontologo"}
          localConsulta={"Santo André, SP"}
          tipoConsulta={"Rotina"}
          setShowConfirmModal={setShowConfirmModal}
        />
      </COntentSelect>
    </Container>
  );
};
