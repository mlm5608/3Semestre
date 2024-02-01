import { ContainerForm, ScrollForm } from "./style"
import { BoxInput } from "../../Components/BoxInput/index"
import { View } from "react-native"


export const Home = () => {
    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel='informar CEP'
                    fieldWidth={100}
                    placeholder='Cep...'
                    keyType='numeric'
                    maxLength={9}
                />
                <BoxInput
                    textLabel='Logradouro'
                    fieldWidth={100}
                    placeholder='Logradouro...'
                    keyType='text'
                    maxLength={9}
                />
                <BoxInput
                    textLabel='Bairro'
                    fieldWidth={100}
                    placeholder='Bairro...'
                    keyType='text'
                    maxLength={9}
                />
                <BoxInput
                    textLabel='Cidade'
                    fieldWidth={100}
                    placeholder='Cidade...'
                    keyType='text'
                    maxLength={9}
                />

                <View>
                    <BoxInput
                        textLabel='Estado'
                        fieldWidth={100}
                        placeholder='Estado...'
                        keyType='text'
                        maxLength={9}
                    />
                    <BoxInput
                        textLabel='UF'
                        fieldWidth={100}
                        placeholder='UF...'
                        keyType='text'
                        maxLength={9}
                    />
                </View>
            </ContainerForm>
        </ScrollForm>
    )
}