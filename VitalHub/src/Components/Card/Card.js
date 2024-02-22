import { Text } from "react-native"
import { PacientAge } from "../AgeUser/style"
import { AgeETypeBox, ProfileContent, CardBox, HourELinkBox } from "../Box/style"
import { HourComponent } from "../HourComponent/style"
import { ImgPerfilHomeCard } from "../ImgPerfil/style"
import { LinkComponent } from "../LinkComponent/style"
import { PacientName } from "../NomeUser/style"
import { TipoConsulta } from "../TypeConsult/style"
import {FontAwesome} from '@expo/vector-icons';

export const CardComponentP = ({
    situação = "pendente",
    onpressCancel,
    onPressInfo,
    onPressPront,
    dados
}) => {
    return (
        <CardBox>
            <ImgPerfilHomeCard source={require("../../Assets/fotoClaudio.png")} />

            <ProfileContent>
                <PacientName onPress={situação === "pendente" ?onPressInfo : null}>{dados.name}</PacientName>
                
                <AgeETypeBox >
                    <PacientAge onPress={situação === "pendente" ?onPressInfo : null}>{dados.age} anos</PacientAge>
                    <FontAwesome name="circle" size={3} color="#D9D9D9" alignSelf={"center"} />
                    <TipoConsulta onPress={situação === "pendente" ?onPressInfo : null}>{dados.type}</TipoConsulta>
                </AgeETypeBox>

                <HourELinkBox>

                    <HourComponent
                        Time={dados.horario}
                        listAg={situação === "pendente"}
                        onPress={onPressInfo}
                    />

                    <LinkComponent
                        listFunction={situação}
                        functionButton={situação === "pendente"? onpressCancel : situação === "realizado"? onPressPront : null}
                    />

                </HourELinkBox>
            </ProfileContent>
        </CardBox>
    )
}

export const CardComponent = ({
    situação = "pendente",
    onpressCancel,
    onPressInfo,
    dados
}) => {
    return (
        <CardBox>
            <ImgPerfilHomeCard source={require("../../Assets/fotoClaudio.png")} onPress={onPressInfo}/>

            <ProfileContent>
                <PacientName onPress={onPressInfo}>{dados.name}</PacientName>
                
                <AgeETypeBox onPress={onPressInfo}>
                    <PacientAge>{dados.age} anos</PacientAge>
                    <FontAwesome name="circle" size={3} color="#D9D9D9" alignSelf={"center"} />
                    <TipoConsulta>{dados.type}</TipoConsulta>
                </AgeETypeBox>

                <HourELinkBox>

                    <HourComponent
                        Time={dados.horario}
                        listAg={situação === "pendente"}
                        onPress={onPressInfo}
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