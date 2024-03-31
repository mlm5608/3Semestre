import { AgeUser } from "../../Components/AgeUser/style";
import { ButtonsBox, InfosBox, ContainerPic } from "../../Components/Box/style";
import { ButtonSave } from "../../Components/Button/style";
import { TextButtonSave } from "../../Components/ButtonTitle/style";
import { Container, ContainerScroll } from "../../Components/Container/style";
import { EmaiUserShort } from "../../Components/EmailUser/style";
import { ImgPerfil } from "../../Components/ImgPerfil/style";
import {
  InputMedium,
  InputPerfil,
  InputPerfilBig,
} from "../../Components/Input/style";
import { Label } from "../../Components/Label/style";
import { Line } from "../../Components/Line/style";
import { LinkB, LinkCancel } from "../../Components/Link/style";
import { NomeUser } from "../../Components/NomeUser/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//import para funcionalidade da camera
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import BtnPhoto from "../../Components/BtnPhoto/BtnPhoto";
import { CameraExpo } from "../../Components/Camera/Camera";
import { TxtPic } from "../../Components/Title/style";

export const ProntuarioPaciente = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [tipoCamera, setTipoCamera] = useState(CameraType.front);
  const [openModal, setOpenModal] = useState(false);
  const [salvarPhoto, setSalvarPhoto] = useState(null);

  const [showCameraModal, setShowCameraModal] = useState(false);
  const [cameraCapture, setCameraCapture] = useState(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setSalvarPhoto(photo.uri);

      setOpenModal(true);

      console.log(photo);
    }
  }

  function ClearPhoto() {
    setSalvarPhoto(null);

    setOpenModal(false);
  }

  async function UploadPhoto() {
    await MediaLibrary.createAssetAsync(salvarPhoto)
      .then(() => {
        alert("foto salva com sucesso");
      })
      .catch((error) => {
        console.log("nao foi possivel salvar a foto");
      });
  }

  return (
    <ContainerScroll>
      <Container>
        <ImgPerfil source={require("../../Assets/Rectangle 426.png")} />

        <NomeUser>Dr.Claudio</NomeUser>

        <InfosBox>
          <AgeUser>Clinico Geral</AgeUser>
          <EmaiUserShort>CRM-15432</EmaiUserShort>
        </InfosBox>

        <Label>Descrição da consulta:</Label>
        <InputPerfilBig
          placeholder={`O paciente possuí uma infecção no
ouvido. Necessário repouse de 2 dias
e acompanhamento médico 
constante`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <Label>Diagnóstico do Paciente:</Label>
        <InputPerfil
          placeholder="Ex.: Infecção no ouvido"
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <Label>Prescrição médica:</Label>
        <InputPerfilBig
          placeholder={`Ex.: Medicamento: Advil 
Dosagem: 50 mg 
Frequência: 3 vezes ao dia 
Duração: 3 dias`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <Label>Exames Medicos:</Label>
        <ContainerPic>
          {cameraCapture == null ? (
            <>
              <MaterialCommunityIcons
                name="file-alert-outline"
                size={24}
                color="#4E4B59"
              />
              <TxtPic>Nenhuma foto informada</TxtPic>
            </>
          ) : (
            <>
              <Image
                style={{ width: "100%", height: 120, borderRadius: 5 }}
                source={{ uri: cameraCapture }}
              />
            </>
          )}
        </ContainerPic>

        <ButtonsBox>
          <ButtonSave onPress={() => setShowCameraModal(true)}>
            <TextButtonSave>
              <MaterialCommunityIcons
                name="camera-plus-outline"
                size={24}
                color="white"
              />
            </TextButtonSave>
            <TextButtonSave>enviar</TextButtonSave>
          </ButtonSave>
          <LinkCancel onPress={() => setCameraCapture(null)}>
            Cancelar
          </LinkCancel>
        </ButtonsBox>

        <Line />

        <InputMedium
          placeholder={`Resultado do exame de sangue:
tudo normal`}
          placeholderTextColor="rgba(51, 48, 62, 0.5)"
        />

        <LinkB onPress={() => navigation.navigate("Main")}>voltar</LinkB>

        <CameraExpo
          visible={showCameraModal}
          setShowCameraModal={setShowCameraModal}
          setCameraCapture={setCameraCapture}
        />
      </Container>
    </ContainerScroll>
  );
};
