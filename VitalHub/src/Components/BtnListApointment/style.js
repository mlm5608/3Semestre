import { PerfilButton } from "../Button/style";
import { TextPerfilButton } from "../ButtonTitle/style";


export const ButtonListAppontment = ({
    textButton,
    clickButton = false,
    onPress,
  }) => {
    return (
      <PerfilButton clickButton={clickButton} onPress={onPress}>
        <TextPerfilButton clickButton={clickButton}>{textButton}</TextPerfilButton>
      </PerfilButton>
    );
  };