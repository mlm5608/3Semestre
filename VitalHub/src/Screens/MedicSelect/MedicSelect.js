import { Container } from "../../Components/Container/style";
import { MedicComponent } from "../../Components/MedicComponent/MedicComponent";
import { Button } from "../../Components/Button/style";
import { ButtonTitle } from "../../Components/ButtonTitle/style";
import { LinkB } from "../../Components/Link/style";
import { useState } from "react";
import { TitleSc } from "../../Components/Title/style";
import { ListComponent } from "../../Components/List/List";

export const MedicSelect = ({navigation}) => {
    const [selected, setSelected] = useState("")
    const [nameMedic, setNameMedic] = useState("")

    const [dadosMedicos, setDadosMedicos] = useState([
        {
          id: "1",
          name: "Jacques Pierce",
          specify:"Clinico Geral, Pediatra"
        },
        {
          id: "2",
          name: "Robert Alvarez",
          specify:"Cardiologista, Cirurgião"
        },
        {
          id: "3",
          name: "Vanessa Moreira",
          specify:"Dermatologa, Esteticista"
        },
        {
          id: "4",
          name: "Kleber de Paula",
          specify:"Ortopedista, Traumologista"
        },
      ]);
  return (
    <Container>
      <TitleSc>Selecionar médico</TitleSc>

      <ListComponent
        data={dadosMedicos}
        renderItem={({ item }) => <MedicComponent 
            selected={item.name === selected}
            name={item.name}
            specify={item.specify}
            onPress={() => {
                setSelected(item.name)
                setNameMedic(item.name)
            }}            
        />}
        keyExtractor={(item) => {
          item.id;
        }}
        showsVerticalScrollIndicator={false}
      />

      <Button
        onPress={() => {
          /*Volta para a tela de agendar com o nome da clinica no input*/
          alert(nameMedic);
        }}
      >
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <LinkB
        onPress={() => {
          {
            /*volta para a tela anterior*/
          }
        }}
      >
        Cancelar
      </LinkB>
    </Container>
  );
};
