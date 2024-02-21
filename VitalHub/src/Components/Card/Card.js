import { PacientAge } from "../AgeUser/style"
import { AgeETypeBox, ProfileContent, CardBox, HourELinkBox } from "../Box/style"
import { HourComponent } from "../HourComponent/style"
import { ImgPerfilHomeCard } from "../ImgPerfil/style"
import { LinkComponent } from "../LinkComponent/style"
import { PacientName } from "../NomeUser/style"
import { TipoConsulta } from "../TypeConsult/style"
import {FontAwesome} from '@expo/vector-icons';

export const CardComponent = ({
    situação = "pendente",
    onpressCancel,
    onPressApointment,
    dados
}) => {
    return (
        <CardBox>
            <ImgPerfilHomeCard source={require("../../Assets/fotoNiccole.png")} />

            <ProfileContent>
                <PacientName>{dados.name}</PacientName>
                
                <AgeETypeBox>
                    <PacientAge>{dados.age} anos</PacientAge>
                    <FontAwesome name="circle" size={3} color="#D9D9D9" alignSelf={"center"} />
                    <TipoConsulta>{dados.type}</TipoConsulta>
                </AgeETypeBox>

                <HourELinkBox>

                    <HourComponent
                        Time={dados.horario}
                        listAg={situação === "pendente"}
                    />

                    <LinkComponent
                        listFunction={situação}
                        functionButton={situação === "pendente"? onpressCancel : situação === "realizado"? onPressApointment : null}
                    />

                </HourELinkBox>
            </ProfileContent>
        </CardBox>
    )
}