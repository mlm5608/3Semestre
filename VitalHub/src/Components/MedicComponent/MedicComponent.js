import { BoxContentMc, CardBoxColored } from "../Box/style";
import { ClickerCard2 } from "../ClickerCard/style";
import { TitleCard } from "../ClinicComponent/style";
import { ImgPerfilHomeCard } from "../ImgPerfil/style"
import { MedicSpecify } from "./style";

export const MedicComponent = ({ selected, onPress, name, specify }) => {
  return (
    <CardBoxColored ClickButton={selected}>
      <ClickerCard2 onPress={onPress}>
        <ImgPerfilHomeCard source={require("../../Assets/fotoClaudio.png")} />
        <BoxContentMc>
          <TitleCard>{name}</TitleCard>
          <MedicSpecify>{specify}</MedicSpecify>
        </BoxContentMc>
      </ClickerCard2>
    </CardBoxColored>
  );
};
