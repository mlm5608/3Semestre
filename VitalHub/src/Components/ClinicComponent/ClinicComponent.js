import { View } from "react-native"
import { BoxContentSC, ClinicContent, LocalClinic, StarsBox, StarsText, TitleClinic } from "./style"
import { AntDesign } from '@expo/vector-icons';
import { DaysComponent } from "../DaysComponent/DaysComponent";

export const ClinicComponent = ({
    name,
    stars,
    local,
    operatingDays,
    selected,
    onPress
}) => {
    return(
        <ClinicContent ClickButton={selected} >
            <BoxContentSC>
                <TitleClinic onPress={onPress}>{name}</TitleClinic>
                <StarsBox>
                    <AntDesign name="star" size={20} color="#F9A620" />
                    <StarsText>{stars}</StarsText>
                </StarsBox>
            </BoxContentSC>

            <BoxContentSC>
                <LocalClinic>{local}</LocalClinic>
                <DaysComponent
                    Days={operatingDays}
                />
            </BoxContentSC>
        </ClinicContent>
    )
}