import { AntDesign } from "@expo/vector-icons";
import { DaysComponent } from "../DaysComponent/DaysComponent";
import { ClinicContent, TitleCard, StarsBox, StarsText, LocalClinic, BoxContentSC} from "./style"
import {ClickerCard} from "../ClickerCard/style"

export const ClinicComponent = ({
  name,
  stars,
  local,
  operatingDays,
  selected,
  onPress,
}) => {
  return (
    <ClinicContent ClickButton={selected}>
      <ClickerCard onPress={onPress}>
        <BoxContentSC>
          <TitleCard>{name}</TitleCard>
          <StarsBox>
            <AntDesign name="star" size={20} color="#F9A620" />
            <StarsText>{stars}</StarsText>
          </StarsBox>
        </BoxContentSC>

        <BoxContentSC>
          <LocalClinic>{local}</LocalClinic>
          <DaysComponent Days={operatingDays} />
        </BoxContentSC>
      </ClickerCard>
    </ClinicContent>
  );
};
