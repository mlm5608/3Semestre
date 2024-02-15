import { LinearGradient } from "expo-linear-gradient"
import { Container } from "../../Components/Container/style"
import { ContainerHeader } from "../../Components/ContainerHeader/style"
import { ImgPerfilHome } from "../../Components/ImgPerfil/style"
import { MaterialIcons } from '@expo/vector-icons';
import { DoctorName } from "../../Components/NomeUser/style";
import { TextTemplate } from "../../Components/TextTemplate/style";
import { InfosBox } from "../../Components/InfosBox/style";
import { TextsBox } from "../../Components/TextsBox/style";
import { BoxContent } from "../../Components/BoxContent/style";
import { ButtonsBox } from "../../Components/ButtonsBox/style";
import { PerfilButton, PerfilButtonSelected } from "../../Components/Button/style";
import { TextPerfilButton, TextPerfilButtonSelected } from "../../Components/ButtonTitle/style";


export const HomeMedico = ({ navigation }) => {

    return (
        <Container>
            <ContainerHeader>
                <LinearGradient colors={['rgba(96,191,197,1)', 'rgba(73,107,186,1)']} flex={1} start={{ x: -0.05, y: 1.08 }} end={{ x: 1, y: 0 }}>
                    <BoxContent>
                        <InfosBox>
                            <ImgPerfilHome source={require("../../Assets/ImgPerfilHome.png")} />

                            <TextsBox>

                                <TextTemplate>bem vindo</TextTemplate>
                                <DoctorName>Dr. Claudio</DoctorName>

                            </TextsBox>
                        </InfosBox>

                        <MaterialIcons name="notifications" size={24} color="white"/>
                    </BoxContent>
                </LinearGradient>
            </ContainerHeader>

            <ButtonsBox>

                <PerfilButtonSelected>
                    <TextPerfilButtonSelected>Agendadas</TextPerfilButtonSelected>
                </PerfilButtonSelected>

                <PerfilButton>
                    <TextPerfilButton>Realizadas</TextPerfilButton>
                </PerfilButton>

                <PerfilButton>
                    <TextPerfilButton>Canceladas</TextPerfilButton>
                </PerfilButton>

            </ButtonsBox>
        </Container>
    )
}